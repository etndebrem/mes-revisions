/* ===== Sujet blanc — simulateur d'examen (Droit commercial) =====
   Tire N notions (idéalement de thèmes différents), les pose au format du
   prof (« Présentez et expliquez… »), chronomètre l'épreuve, puis révèle les
   réponses-types pour auto-correction. L'auto-évaluation alimente la même
   progression Leitner que les flashcards (clé droitco_leitner_v1). */
(function () {
  "use strict";

  var R = (window.REPERTOIRE || []).slice();
  var CONCEPTS = R.filter(function (e) { return e.t === "concept"; });
  var LEITNER_KEY = "droitco_leitner_v1"; // partagé avec les flashcards
  var MIN_PER_Q = 20;                     // minutes par question (1h pour 3)

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* --- progression Leitner partagée --- */
  function loadLeitner() { try { return JSON.parse(localStorage.getItem(LEITNER_KEY)) || {}; } catch (e) { return {}; } }
  function saveLeitner(p) { try { localStorage.setItem(LEITNER_KEY, JSON.stringify(p)); } catch (e) {} }
  function boxOf(p, id) { return (p[id] && p[id].box) || 1; }
  function gradeLeitner(id, level) { // level: "ok" | "mid" | "ko"
    var p = loadLeitner();
    var cur = boxOf(p, id);
    var nb = level === "ok" ? Math.min(cur + 1, 5) : (level === "ko" ? 1 : cur);
    if (!p[id]) p[id] = {};
    p[id].box = nb;
    p[id].seen = (p[id].seen || 0) + 1;
    saveLeitner(p);
  }

  var setup = { count: 3, varied: true, onlyWeak: false, chrono: true };
  var run = null;

  /* --- sélection des notions --- */
  function pickNotions() {
    var pool = CONCEPTS.slice();
    if (setup.onlyWeak) {
      var p = loadLeitner();
      var weak = pool.filter(function (e) { return boxOf(p, e.id) < 5; });
      if (weak.length >= setup.count) pool = weak;
    }
    var out = [];
    if (setup.varied) {
      var byTheme = {};
      pool.forEach(function (e) { (byTheme[e.th] = byTheme[e.th] || []).push(e); });
      var themes = shuffle(Object.keys(byTheme));
      for (var i = 0; i < themes.length && out.length < setup.count; i++) {
        var g = byTheme[themes[i]];
        out.push(g[Math.floor(Math.random() * g.length)]);
      }
    }
    // compléter si besoin (peu de thèmes, ou mode non varié)
    var rest = shuffle(pool.filter(function (e) { return out.indexOf(e) < 0; }));
    while (out.length < setup.count && rest.length) out.push(rest.shift());
    return shuffle(out).slice(0, setup.count);
  }

  /* ============ RÉGLAGES ============ */
  function renderSetup() {
    stopTimer();
    run = null;
    var c = $("#sujet-setup");
    c.classList.remove("hidden");
    $("#sujet-stage").style.display = "none";
    $("#sujet-done").style.display = "none";

    var counts = [2, 3, 4];
    var countBtns = counts.map(function (n) {
      return '<button data-count="' + n + '" class="' + (setup.count === n ? "on" : "") + '">' + n + ' questions</button>';
    }).join("");

    c.innerHTML =
      '<h3>🎯 Sujet blanc — comme à l\'examen</h3>' +
      '<p class="sujet-intro">L\'app tire des notions au hasard et les pose au format de M. de Ravel d\'Esclapon (« Présentez et expliquez… »). ' +
      'Rédige tes réponses dans le temps imparti (~' + MIN_PER_Q + ' min/question), puis compare aux réponses-types pour t\'auto-noter. ' +
      'Ton auto-évaluation nourrit la même progression que les flashcards.</p>' +
      '<div class="controls" style="box-shadow:none;border:0;padding:0;margin:0">' +
        '<div class="row"><span class="filterlabel">Nombre</span><div class="seg" id="sujet-count">' + countBtns + '</div></div>' +
        '<label class="opt"><input type="checkbox" id="sujet-varied"' + (setup.varied ? " checked" : "") + '> Varier les thèmes (1 notion par grand chapitre, comme le vrai sujet)</label>' +
        '<label class="opt"><input type="checkbox" id="sujet-weak"' + (setup.onlyWeak ? " checked" : "") + '> Prioriser les notions non maîtrisées (boîte &lt; 5)</label>' +
        '<label class="opt"><input type="checkbox" id="sujet-chrono"' + (setup.chrono ? " checked" : "") + '> Chronomètre (' + MIN_PER_Q + ' min par question)</label>' +
      '</div>' +
      '<button class="btn big" id="sujet-start">▶ Composer le sujet</button>';

    $$("#sujet-count button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        setup.count = parseInt(this.getAttribute("data-count"), 10);
        $$("#sujet-count button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on");
      });
    });
    $("#sujet-varied").addEventListener("change", function () { setup.varied = this.checked; });
    $("#sujet-weak").addEventListener("change", function () { setup.onlyWeak = this.checked; });
    $("#sujet-chrono").addEventListener("change", function () { setup.chrono = this.checked; });
    $("#sujet-start").addEventListener("click", start);
  }

  /* ============ COMPOSITION ============ */
  function start() {
    var notions = pickNotions();
    if (notions.length < 1) { alert("Pas assez de notions disponibles."); return; }
    run = {
      items: notions.map(function (e) { return { e: e, answer: "", grade: null }; }),
      chrono: setup.chrono, startedAt: Date.now(), timerId: null, endAt: null, revealed: false
    };
    $("#sujet-setup").classList.add("hidden");
    $("#sujet-done").style.display = "none";
    $("#sujet-stage").style.display = "block";
    if (run.chrono) {
      run.endAt = Date.now() + run.items.length * MIN_PER_Q * 60 * 1000;
      run.timerId = setInterval(tick, 500);
    }
    renderCompose();
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    return m + ":" + ("0" + (s % 60)).slice(-2);
  }
  function tick() {
    if (!run || !run.chrono || run.revealed) return;
    var left = run.endAt - Date.now();
    var t = $("#sujet-timer");
    if (t) { t.textContent = "⏱ " + fmtTime(left); t.classList.toggle("low", left < 5 * 60000); }
    if (left <= 0) reveal();
  }
  function stopTimer() { if (run && run.timerId) { clearInterval(run.timerId); run.timerId = null; } }

  function renderCompose() {
    var bar = run.chrono
      ? '<div class="sujet-bar"><span>📝 Épreuve en cours</span><span id="sujet-timer" class="sujet-timer">⏱ ' + fmtTime(run.endAt - Date.now()) + '</span><button class="btn" id="sujet-finish">Terminer &amp; corriger</button></div>'
      : '<div class="sujet-bar"><span>📝 Épreuve en cours</span><button class="btn" id="sujet-finish" style="margin-left:auto">Terminer &amp; corriger</button></div>';

    var blocks = run.items.map(function (it, i) {
      return '<div class="sujet-q">' +
        '<div class="sujet-qhead"><span class="sujet-num">Question ' + (i + 1) + '</span><span class="badge theme">' + esc(it.e.th) + '</span></div>' +
        '<div class="sujet-enonce">Présentez et expliquez : « ' + esc(it.e.r) + ' ».</div>' +
        '<div class="sujet-hint">Plan attendu : définition → présentation → régime / effets. Citez articles et arrêts.</div>' +
        '<textarea class="sujet-input" data-i="' + i + '" placeholder="Rédigez votre réponse ici…">' + esc(it.answer) + '</textarea>' +
      '</div>';
    }).join("");

    $("#sujet-stage").innerHTML = bar + blocks;
    $$(".sujet-input", $("#sujet-stage")).forEach(function (ta) {
      ta.addEventListener("input", function () { run.items[+this.getAttribute("data-i")].answer = this.value; });
    });
    $("#sujet-finish").addEventListener("click", function () {
      if (!run.revealed && !confirm("Terminer l'épreuve et afficher les réponses-types ?")) return;
      reveal();
    });
  }

  /* ============ CORRIGÉ ============ */
  function reveal() {
    if (!run || run.revealed) return;
    run.revealed = true;
    stopTimer();
    // capture les saisies
    $$(".sujet-input", $("#sujet-stage")).forEach(function (ta) { run.items[+ta.getAttribute("data-i")].answer = ta.value; });
    var elapsed = Date.now() - run.startedAt;

    var blocks = run.items.map(function (it, i) {
      var ans = it.answer.trim();
      var refs = it.e.th;
      return '<div class="sujet-q" data-i="' + i + '">' +
        '<div class="sujet-qhead"><span class="sujet-num">Question ' + (i + 1) + '</span><span class="badge theme">' + esc(it.e.th) + '</span></div>' +
        '<div class="sujet-enonce">Présentez et expliquez : « ' + esc(it.e.r) + ' ».</div>' +
        '<textarea class="sujet-input" readonly>' + esc(ans || "(pas de réponse rédigée)") + '</textarea>' +
        '<div class="sujet-model"><h5>✅ Réponse-type</h5><p>' + esc(it.e.m) + '</p><div class="refs">Chapitre : ' + esc(refs) + '</div></div>' +
        '<div class="sujet-grade" data-i="' + i + '">' +
          '<button class="g-ok" data-g="ok">✅ Maîtrisé</button>' +
          '<button class="g-mid" data-g="mid">⚠️ Partiel</button>' +
          '<button class="g-ko" data-g="ko">❌ À revoir</button>' +
        '</div>' +
      '</div>';
    }).join("");

    $("#sujet-stage").innerHTML =
      '<div class="sujet-bar"><span>📄 Corrigé — auto-évaluation</span><span class="sujet-timer">⏱ ' + fmtTime(elapsed) + '</span></div>' +
      blocks +
      '<div class="sujet-foot">' +
        '<button class="btn" id="sujet-again">↻ Nouveau sujet</button>' +
        '<button class="btn ghost" id="sujet-back">← Réglages</button>' +
      '</div>';

    $$(".sujet-grade", $("#sujet-stage")).forEach(function (g) {
      var i = +g.getAttribute("data-i");
      $$("button", g).forEach(function (b) {
        b.addEventListener("click", function () {
          var lvl = this.getAttribute("data-g");
          run.items[i].grade = lvl;
          gradeLeitner(run.items[i].e.id, lvl);
          $$("button", g).forEach(function (x) { x.classList.remove("on"); });
          this.classList.add("on");
        });
      });
    });
    $("#sujet-again").addEventListener("click", start);
    $("#sujet-back").addEventListener("click", renderSetup);
    $("#sujet-stage").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ============ API pour app.js ============ */
  window.SUJET_VIEW = {
    enter: function () { renderSetup(); },
    leave: function () { stopTimer(); }
  };
})();
