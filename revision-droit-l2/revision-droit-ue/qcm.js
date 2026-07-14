/* ===== QCM type annale — Droit institutionnel de l'UE (A. Husser) =====
   Particularité : chaque question peut comporter UNE OU PLUSIEURS bonnes
   réponses (cases à cocher). Le point n'est acquis que si la sélection
   correspond EXACTEMENT à l'ensemble des bonnes réponses. */
(function () {
  "use strict";

  var BANK = (window.QCM || []).slice();
  var THEMES = window.QCM_THEMES || [];
  var SECONDS_PER_Q = 72;             // ~1,2 min / question
  var STORE_KEY = "droitue_qcm_v1";   // stats { id: {seen, ko} }
  var LETTERS = ["A", "B", "C", "D", "E", "F", "G"];

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
  function slug(s) {
    return s.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 70);
  }
  function asArray(a) { return Array.isArray(a) ? a.slice() : [a]; }
  function sameSet(x, y) {
    if (x.length !== y.length) return false;
    var a = x.slice().sort(), b = y.slice().sort();
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }
  BANK.forEach(function (q, i) { q.id = slug(q.q) + "-" + i; q.correct = asArray(q.a); });

  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveStats() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) {}
  }
  var stats = loadStats();

  /* --- réglages de session --- */
  var setup = { themes: {}, count: 50, mode: "examen", chrono: true, onlyMissed: false, onlyAnnale: false, bareme: "simple" };
  var N_ANNALE = BANK.filter(function (q) { return q.an; }).length;
  function koPenalty() { return setup.bareme === "negatif" ? 0.5 : 0; }
  var run = null;

  function activeThemes() { return Object.keys(setup.themes).filter(function (k) { return setup.themes[k]; }); }
  function missedIds() { return Object.keys(stats).filter(function (id) { return stats[id].ko > 0; }); }
  function pool() {
    var tk = activeThemes();
    var missed = setup.onlyMissed ? missedIds() : null;
    return BANK.filter(function (q) {
      if (setup.onlyAnnale && !q.an) return false;
      if (tk.length && tk.indexOf(q.th) < 0) return false;
      if (missed && missed.indexOf(q.id) < 0) return false;
      return true;
    });
  }

  /* ============ ÉCRAN DE RÉGLAGES ============ */
  function renderSetup() {
    stopTimer();
    run = null;
    var c = $("#qcm-setup");
    c.classList.remove("hidden");
    $("#qcm-stage").style.display = "none";
    $("#qcm-done").style.display = "none";

    var themeChips = THEMES.map(function (th) {
      return '<button class="fchip' + (setup.themes[th] ? " on" : "") + '" data-theme="' + esc(th) + '">' + esc(th) + '</button>';
    }).join("");
    var counts = [10, 20, 50, 0];
    var countBtns = counts.map(function (n) {
      var label = n === 0 ? "Toutes" : String(n);
      return '<button data-count="' + n + '" class="' + (setup.count === n ? "on" : "") + '">' + label + '</button>';
    }).join("");
    var nMissed = missedIds().length;

    c.innerHTML =
      '<h3>QCM type annale</h3>' +
      '<p class="qcm-intro">L\'annale fournie compte <b>40 questions</b>. ⚠️ Comme à l\'examen, <b>chaque question peut avoir une OU plusieurs bonnes réponses</b> : l\'énoncé ne dit pas combien. ' +
      'Cochez la ou les réponses, puis validez. Le point n\'est acquis que si la sélection est <b>exacte</b>.<br>' +
      'Barème : bonne réponse <b>+1</b> · pas de réponse <b>0</b> · mauvaise réponse <b>0</b> ou <b>−0,5</b> (selon le réglage).</p>' +
      '<div class="controls" style="box-shadow:none;border:0;padding:0;margin:0">' +
        '<div class="row"><span class="filterlabel">Chapitre</span><div class="chipset">' + themeChips +
          '<button class="fchip" id="qcm-reset-th">✕ tous</button></div></div>' +
        '<div class="row" style="margin-top:12px"><span class="filterlabel">Questions</span>' +
          '<div class="seg" id="qcm-count">' + countBtns + '</div></div>' +
        '<div class="row" style="margin-top:12px"><span class="filterlabel">Mode</span>' +
          '<div class="seg" id="qcm-mode">' +
            '<button data-mode="examen" class="' + (setup.mode === "examen" ? "on" : "") + '">Examen (corrigé à la fin)</button>' +
            '<button data-mode="entrainement" class="' + (setup.mode === "entrainement" ? "on" : "") + '">Entraînement (correction immédiate)</button>' +
          '</div></div>' +
        '<div class="row" style="margin-top:12px"><span class="filterlabel">Barème</span>' +
          '<div class="seg" id="qcm-bareme">' +
            '<button data-bareme="simple" class="' + (setup.bareme === "simple" ? "on" : "") + '">Sans pénalité (+1 / 0 / 0)</button>' +
            '<button data-bareme="negatif" class="' + (setup.bareme === "negatif" ? "on" : "") + '">Avec pénalité (+1 / −0,5 / 0)</button>' +
          '</div></div>' +
        '<label class="opt opt-annale"><input type="checkbox" id="qcm-annale"' + (setup.onlyAnnale ? " checked" : "") + '> 📜 Seulement les questions de l\'annale (' + N_ANNALE + ')</label>' +
        '<label class="opt" id="qcm-chrono-row"><input type="checkbox" id="qcm-chrono"' + (setup.chrono ? " checked" : "") + '> Chronomètre (1,2 min par question)</label>' +
        (nMissed > 0
          ? '<label class="opt"><input type="checkbox" id="qcm-missed"' + (setup.onlyMissed ? " checked" : "") + '> Uniquement les questions déjà ratées (' + nMissed + ')</label>'
          : '') +
      '</div>' +
      '<button class="btn big" id="qcm-start">▶ Commencer (<span id="qcm-n">0</span> questions)</button>';

    $$("[data-theme]", c).forEach(function (b) {
      b.addEventListener("click", function () {
        var th = this.getAttribute("data-theme");
        setup.themes[th] = !setup.themes[th]; this.classList.toggle("on"); updateN();
      });
    });
    $("#qcm-reset-th").addEventListener("click", function () { setup.themes = {}; renderSetup(); });
    $$("#qcm-count button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        setup.count = parseInt(this.getAttribute("data-count"), 10);
        $$("#qcm-count button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on"); updateN();
      });
    });
    $$("#qcm-bareme button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        setup.bareme = this.getAttribute("data-bareme");
        $$("#qcm-bareme button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on");
      });
    });
    $$("#qcm-mode button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        setup.mode = this.getAttribute("data-mode");
        $$("#qcm-mode button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on");
        $("#qcm-chrono-row").style.display = setup.mode === "examen" ? "flex" : "none";
      });
    });
    $("#qcm-chrono-row").style.display = setup.mode === "examen" ? "flex" : "none";
    $("#qcm-chrono").addEventListener("change", function () { setup.chrono = this.checked; });
    $("#qcm-annale").addEventListener("change", function () { setup.onlyAnnale = this.checked; updateN(); });
    var missedCb = $("#qcm-missed");
    if (missedCb) missedCb.addEventListener("change", function () { setup.onlyMissed = this.checked; updateN(); });
    $("#qcm-start").addEventListener("click", function () { startRun(); });
    updateN();
  }
  function effectiveCount() {
    var p = pool().length;
    return setup.count === 0 ? p : Math.min(setup.count, p);
  }
  function updateN() { $("#qcm-n").textContent = effectiveCount(); }

  /* ============ SESSION ============ */
  function buildItems() {
    var qs = shuffle(pool().slice()).slice(0, effectiveCount());
    return qs.map(function (q) {
      var opts = q.o.map(function (text, i) { return { text: text, good: q.correct.indexOf(i) >= 0 }; });
      if (!q.f) shuffle(opts);
      return { q: q, opts: opts, picked: [], validated: false };
    });
  }

  function startRun(itemsOverride, modeOverride) {
    var items = itemsOverride || buildItems();
    if (!items.length) { alert("Aucune question avec ces filtres. Élargissez la sélection."); return; }
    run = {
      items: items, pos: 0,
      mode: modeOverride || setup.mode,
      chrono: (modeOverride || setup.mode) === "examen" && setup.chrono,
      startedAt: Date.now(), timerId: null, endAt: null, finished: false
    };
    $("#qcm-setup").classList.add("hidden");
    $("#qcm-done").style.display = "none";
    $("#qcm-stage").style.display = "block";
    if (run.chrono) {
      run.endAt = Date.now() + items.length * SECONDS_PER_Q * 1000;
      run.timerId = setInterval(tick, 500);
    }
    showQuestion();
  }

  function fmtTime(ms) {
    var s = Math.max(0, Math.round(ms / 1000));
    var m = Math.floor(s / 60);
    return m + ":" + ("0" + (s % 60)).slice(-2);
  }
  function tick() {
    if (!run || !run.chrono) return;
    var left = run.endAt - Date.now();
    var t = $("#qcm-timer");
    if (t) { t.textContent = "⏱ " + fmtTime(left); t.classList.toggle("low", left < 60000); }
    if (left <= 0) finishRun(true);
  }
  function stopTimer() { if (run && run.timerId) { clearInterval(run.timerId); run.timerId = null; } }

  function goodIdx(it) {
    var g = []; it.opts.forEach(function (o, i) { if (o.good) g.push(i); }); return g;
  }
  function isCorrect(it) { return it.validated && sameSet(it.picked, goodIdx(it)); }
  function isAnswered(it) { return it.validated && it.picked.length > 0; }

  function sessionScore() {
    var ok = 0, ko = 0, skip = 0;
    run.items.forEach(function (it) {
      if (!it.validated) { if (run.finished) skip++; return; }
      if (it.picked.length === 0) skip++;
      else if (sameSet(it.picked, goodIdx(it))) ok++;
      else ko++;
    });
    return { ok: ok, ko: ko, skip: skip, points: ok - ko * koPenalty() };
  }

  function showQuestion() {
    var it = run.items[run.pos];
    var total = run.items.length;
    var pct = Math.round(run.pos / total * 100);
    var s = sessionScore();

    $("#qcm-stage").innerHTML =
      '<div class="fc-progress">' +
        '<span>Question <b>' + (run.pos + 1) + '</b> / ' + total + '</span>' +
        '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
        (run.chrono
          ? '<span id="qcm-timer" class="qcm-timer">⏱ ' + fmtTime(run.endAt - Date.now()) + '</span>'
          : (run.mode === "entrainement" ? '<span>✅ ' + s.ok + ' &nbsp; ❌ ' + s.ko + ' &nbsp; ⏭ ' + s.skip + '</span>' : '')) +
      '</div>' +
      '<div class="card qcm-card">' +
        '<div class="qcm-badges"><span class="badge theme">' + esc(it.q.th) + '</span>' +
          (it.q.an ? '<span class="badge annale" title="Question issue de l\'annale (ou très proche)">📜 annale</span>' : '') +
          '<span class="badge multi" title="Une ou plusieurs réponses possibles">☑ réponses multiples possibles</span></div>' +
        '<div class="qcm-question">' + esc(it.q.q) + '</div>' +
        '<div class="qcm-options">' + it.opts.map(function (o, i) {
          return '<button class="qcm-opt" data-i="' + i + '"><span class="box">' + LETTERS[i] + '</span><span class="otext">' + esc(o.text) + '</span></button>';
        }).join("") + '</div>' +
        '<div id="qcm-expl"></div>' +
      '</div>' +
      '<div class="qcm-foot">' +
        '<button class="btn ghost" id="qcm-skip">⏭ Passer <span class="kbd">0</span></button>' +
        '<span class="qcm-hint">Cochez la ou les réponses</span>' +
        '<button class="btn" id="qcm-validate">✓ Valider <span class="kbd">Entrée</span></button>' +
      '</div>';

    $$(".qcm-opt", $("#qcm-stage")).forEach(function (b) {
      b.addEventListener("click", function () { toggle(parseInt(this.getAttribute("data-i"), 10)); });
    });
    $("#qcm-skip").addEventListener("click", function () { it.picked = []; validate(); });
    $("#qcm-validate").addEventListener("click", validate);
  }

  function toggle(i) {
    if (!run) return;
    var it = run.items[run.pos];
    if (it.validated) return;
    var pos = it.picked.indexOf(i);
    if (pos >= 0) it.picked.splice(pos, 1); else it.picked.push(i);
    var btn = $$('.qcm-opt', $("#qcm-stage"))[i];
    if (btn) btn.classList.toggle("sel", it.picked.indexOf(i) >= 0);
  }

  function validate() {
    if (!run) return;
    var it = run.items[run.pos];
    if (it.validated) return;
    it.validated = true;

    if (run.mode === "examen") { next(); return; }

    // entraînement : correction immédiate
    var g = goodIdx(it);
    $$(".qcm-opt", $("#qcm-stage")).forEach(function (b, i) {
      b.disabled = true;
      var picked = it.picked.indexOf(i) >= 0;
      if (it.opts[i].good) b.classList.add(picked ? "good" : "missed");
      else if (picked) b.classList.add("bad");
    });
    var verdict;
    if (it.picked.length === 0) verdict = "⏭ Sans réponse (" + (koPenalty() ? "0 pt" : "0 pt") + ")";
    else if (sameSet(it.picked, g)) verdict = "✅ Bonne réponse (+1 pt)";
    else verdict = "❌ Réponse inexacte (" + (koPenalty() ? "−0,5 pt" : "0 pt") + ")";
    var sol = g.map(function (i) { return LETTERS[i]; }).join(", ");
    $("#qcm-expl").innerHTML =
      '<div class="qcm-expl"><b>' + verdict + '</b> &nbsp;·&nbsp; Bonne(s) réponse(s) : <b>' + sol + '</b><br>' + esc(it.q.e) + '</div>' +
      '<button class="btn" id="qcm-next" style="margin-top:12px">Question suivante → <span class="kbd">Entrée</span></button>';
    $("#qcm-next").addEventListener("click", next);
    $("#qcm-next").focus();
    $("#qcm-validate").disabled = true;
    $("#qcm-skip").disabled = true;
  }

  function next() {
    run.pos++;
    if (run.pos >= run.items.length) finishRun(false);
    else showQuestion();
  }

  /* ============ RÉSULTATS ============ */
  function finishRun(aborted) {
    if (!run) return;
    stopTimer();
    run.finished = true;
    var elapsed = Date.now() - run.startedAt;

    run.items.forEach(function (it) {
      if (!it.validated) return; // jamais traitée (abandon/chrono) : on ignore
      var st = stats[it.q.id] || (stats[it.q.id] = { seen: 0, ko: 0 });
      st.seen++;
      if (it.picked.length === 0) { /* sans réponse : neutre */ }
      else if (sameSet(it.picked, goodIdx(it))) st.ko = 0; // réussie : on efface l'erreur passée
      else st.ko++;
    });
    saveStats();

    var s = sessionScore();
    var n = run.items.length;
    var note = Math.max(0, s.points) / n * 20;
    var noteStr = (Math.round(note * 10) / 10).toLocaleString("fr-FR");
    var ptsStr = (Math.round(s.points * 10) / 10).toLocaleString("fr-FR");
    var wrong = run.items.filter(function (it) { return it.validated && it.picked.length > 0 && !sameSet(it.picked, goodIdx(it)); });
    var bStr = setup.bareme === "negatif" ? "+1 / −0,5 / 0" : "+1 / 0 / 0";

    var review = run.items.map(function (it, i) {
      var g = goodIdx(it);
      var cls, verdict;
      if (!it.validated || it.picked.length === 0) { cls = "skip"; verdict = "⏭ sans réponse"; }
      else if (sameSet(it.picked, g)) { cls = "good"; verdict = "✅ " + it.picked.slice().sort().map(function (k) { return LETTERS[k]; }).join(", "); }
      else { cls = "bad"; verdict = "❌ " + it.picked.slice().sort().map(function (k) { return LETTERS[k]; }).join(", "); }
      var sol = g.map(function (k) { return LETTERS[k] + ". " + esc(it.opts[k].text); }).join(" &nbsp;|&nbsp; ");
      return '<div class="review-item ' + cls + '">' +
        '<div class="review-q"><b>' + (i + 1) + '.</b> ' + esc(it.q.q) + (it.q.an ? ' <span class="badge annale">annale</span>' : '') + '</div>' +
        '<div class="review-a">Votre réponse : ' + verdict + ' &nbsp;·&nbsp; Bonne(s) réponse(s) : <b>' + sol + '</b></div>' +
        '<div class="review-e">' + esc(it.q.e) + '</div>' +
      '</div>';
    }).join("");

    $("#qcm-stage").style.display = "none";
    var d = $("#qcm-done");
    d.style.display = "block";
    d.innerHTML =
      '<h3>' + (aborted ? "QCM interrompu" : "QCM terminé 🎉") + '</h3>' +
      '<div class="big-num">' + ptsStr + ' / ' + n + '</div>' +
      '<p style="color:var(--muted)">soit <b>' + noteStr + ' / 20</b> (barème ' + bStr + ')<br>' +
        '✅ ' + s.ok + ' exacte' + (s.ok > 1 ? "s" : "") + ' · ❌ ' + s.ko + ' inexacte' + (s.ko > 1 ? "s" : "") + ' · ⏭ ' + (n - s.ok - s.ko) + ' sans réponse · ⏱ ' + fmtTime(elapsed) + '</p>' +
      '<div class="done-actions">' +
        '<button class="btn" id="qcm-again">↻ Nouveau QCM</button>' +
        (wrong.length ? '<button class="btn ghost" id="qcm-redo">' + (wrong.length > 1 ? "Retravailler les " + wrong.length + " erreurs" : "Retravailler l'erreur") + '</button>' : '') +
        '<button class="btn ghost" id="qcm-back">← Réglages</button>' +
      '</div>' +
      '<div class="qcm-review"><h4>Corrigé</h4>' + review + '</div>';

    $("#qcm-again").addEventListener("click", function () { startRun(); });
    $("#qcm-back").addEventListener("click", renderSetup);
    if (wrong.length) $("#qcm-redo").addEventListener("click", function () {
      var items = wrong.map(function (it) {
        var opts = it.q.o.map(function (text, i) { return { text: text, good: it.q.correct.indexOf(i) >= 0 }; });
        if (!it.q.f) shuffle(opts);
        return { q: it.q, opts: opts, picked: [], validated: false };
      });
      startRun(shuffle(items), "entrainement");
    });
    d.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ============ CLAVIER ============ */
  document.addEventListener("keydown", function (ev) {
    if ($("#view-qcm").style.display !== "block") return;
    if (!run || $("#qcm-stage").style.display !== "block") return;
    if (ev.target && /input|textarea/i.test(ev.target.tagName)) return;
    var it = run.items[run.pos];
    if (!it) return;
    if (it.validated) {
      if (ev.code === "Enter" || ev.code === "Space" || ev.code === "ArrowRight") { ev.preventDefault(); next(); }
      return;
    }
    var k = ev.key.toLowerCase();
    var idx = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6 }[k];
    if (idx === undefined) idx = { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6 }[k];
    if (idx !== undefined && idx < it.opts.length) { ev.preventDefault(); toggle(idx); }
    else if (ev.code === "Enter") { ev.preventDefault(); validate(); }
    else if (k === "0" || k === "p") { ev.preventDefault(); it.picked = []; validate(); }
  });

  /* ============ API pour app.js ============ */
  window.QCM_VIEW = {
    enter: function () { renderSetup(); },
    leave: function () { stopTimer(); }
  };
})();
