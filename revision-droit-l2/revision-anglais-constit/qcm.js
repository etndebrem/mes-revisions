/* ===== QCM type annale (P. Ducoulombier, Introduction to UK Public Law) — logique ===== */
(function () {
  "use strict";

  var BANK = (window.QCM || []).slice();
  var THEMES = window.QCM_THEMES || [];
  var SECONDS_PER_Q = 90;             // annale : 40 questions en 1 h
  var POINT_OK = 0.5;                 // barème : bonne réponse +0,5 ; mauvaise 0 ; absence 0
  var STORE_KEY = "ukconst_qcm_v1";   // stats { id: {seen, ko} }
  var LETTERS = ["A", "B", "C", "D"];
  var N_ANNALE = BANK.filter(function (q) { return q.an; }).length;

  // Les 6 « pièges types » de l'annale (champ q.tr) — affichés dans le corrigé
  var TRAP_LABELS = {
    confusion: "Confusion d'éléments proches (offices, conventions, sections, instruments…)",
    absolu: "Mot absolu / limitatif (« only », « all », « always », « limited to », « required by statute »…)",
    source: "Mauvaise source / base juridique (convention ≠ statute ≠ prérogative ; quel Act ?)",
    reforme: "Chiffres / mécanisme d'une réforme récente (nombre, date, modalité)",
    justiciabilite: "Droit vs politique / (non-)justiciabilité (« as a matter of law » ≠ « of convention »)",
    intrus: "« Which is true / false » : repérer le seul énoncé intrus parmi plusieurs vrais"
  };
  function trapHtml(q) {
    return (q.tr && TRAP_LABELS[q.tr])
      ? '<div class="qcm-trap">⚠️ Piège type : ' + esc(TRAP_LABELS[q.tr]) + '</div>' : '';
  }

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
  BANK.forEach(function (q, i) { q.id = slug(q.q) + "-" + i; });

  function loadStats() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveStats() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(stats)); } catch (e) {}
  }
  var stats = loadStats();

  /* --- réglages de session --- */
  var setup = { themes: {}, count: 40, mode: "examen", chrono: true, onlyMissed: false, onlyAnnale: false };
  function anLabel(an) { return typeof an === "string" ? an : "2025-26"; }
  var run = null; // { items, pos, mode, chrono, total, answered:[], revealed, timerId, endAt }

  function activeThemes() { return Object.keys(setup.themes).filter(function (k) { return setup.themes[k]; }); }
  function missedIds() {
    return Object.keys(stats).filter(function (id) { return stats[id].ko > 0; });
  }
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
    var counts = [10, 20, 40, 0]; // 0 = tout
    var countBtns = counts.map(function (n) {
      var label = n === 0 ? "Tout" : (n === 40 ? "40 (annale)" : String(n));
      return '<button data-count="' + n + '" class="' + (setup.count === n ? "on" : "") + '">' + label + '</button>';
    }).join("");
    var nMissed = missedIds().length;

    c.innerHTML =
      '<h3>QCM type annale</h3>' +
      '<p class="qcm-intro">Conditions de l’annale (Introduction to UK Public Law, P. Ducoulombier) : <b>40 questions</b> en <b>1 heure</b>, réponse unique, aucun document.<br>' +
      'Barème : bonne réponse <b>+0,5</b> · mauvaise réponse <b>0</b> · pas de réponse <b>0</b> (pas de point négatif). Note ramenée sur 20.</p>' +
      '<div class="controls" style="box-shadow:none;border:0;padding:0;margin:0">' +
        '<div class="row"><span class="filterlabel">Source</span>' +
          '<div class="seg" id="qcm-source">' +
            '<button data-src="all" class="' + (setup.onlyAnnale ? "" : "on") + '">Toutes les questions</button>' +
            '<button data-src="annale" class="' + (setup.onlyAnnale ? "on" : "") + '">📜 Annales uniquement (' + N_ANNALE + ')</button>' +
          '</div></div>' +
        '<div class="row" style="margin-top:12px"><span class="filterlabel">Chapitre</span><div class="chipset">' + themeChips +
          '<button class="fchip" id="qcm-reset-th">✕ tous</button></div></div>' +
        '<div class="row" style="margin-top:12px"><span class="filterlabel">Questions</span>' +
          '<div class="seg" id="qcm-count">' + countBtns + '</div></div>' +
        '<div class="row" style="margin-top:12px"><span class="filterlabel">Mode</span>' +
          '<div class="seg" id="qcm-mode">' +
            '<button data-mode="examen" class="' + (setup.mode === "examen" ? "on" : "") + '">Examen (corrigé à la fin)</button>' +
            '<button data-mode="entrainement" class="' + (setup.mode === "entrainement" ? "on" : "") + '">Entraînement (correction immédiate)</button>' +
          '</div></div>' +
        '<label class="opt" id="qcm-chrono-row"><input type="checkbox" id="qcm-chrono"' + (setup.chrono ? " checked" : "") + '> Chronomètre (1,5 min par question, comme à l’annale)</label>' +
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
    $$("#qcm-source button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        setup.onlyAnnale = this.getAttribute("data-src") === "annale";
        $$("#qcm-source button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on"); updateN();
      });
    });
    $$("#qcm-count button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        setup.count = parseInt(this.getAttribute("data-count"), 10);
        $$("#qcm-count button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on"); updateN();
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
      var opts = q.o.map(function (text, i) { return { text: text, good: i === q.a }; });
      if (!q.f) shuffle(opts);
      return { q: q, opts: opts, picked: null, skipped: false };
    });
  }

  function startRun(itemsOverride, modeOverride) {
    var items = itemsOverride || buildItems();
    if (!items.length) { alert("Aucune question avec ces filtres. Élargissez la sélection."); return; }
    run = {
      items: items, pos: 0, revealed: false,
      mode: modeOverride || setup.mode,
      chrono: (modeOverride || setup.mode) === "examen" && setup.chrono,
      startedAt: Date.now(), timerId: null, endAt: null
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
    if (t) {
      t.textContent = "⏱ " + fmtTime(left);
      t.classList.toggle("low", left < 60000);
    }
    if (left <= 0) finishRun(true);
  }
  function stopTimer() {
    if (run && run.timerId) { clearInterval(run.timerId); run.timerId = null; }
  }

  function sessionScore() {
    var ok = 0, ko = 0, skip = 0;
    run.items.forEach(function (it) {
      if (it.picked === null) { if (it.skipped || run.finished) skip++; }
      else if (it.opts[it.picked].good) ok++;
      else ko++;
    });
    return { ok: ok, ko: ko, skip: skip, points: ok * POINT_OK };
  }

  function showQuestion() {
    run.revealed = false;
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
          (it.q.an ? '<span class="badge annale" title="Question posée à l’annale (sous une forme proche)">📜 annale ' + esc(anLabel(it.q.an)) + '</span>' : '') + '</div>' +
        '<div class="qcm-question">' + esc(it.q.q) + '</div>' +
        '<div class="qcm-options">' + it.opts.map(function (o, i) {
          return '<button class="qcm-opt" data-i="' + i + '"><span class="letter">' + LETTERS[i] + '.</span><span>' + esc(o.text) + '</span></button>';
        }).join("") + '</div>' +
        '<div id="qcm-expl"></div>' +
      '</div>' +
      '<div class="qcm-foot">' +
        '<button class="btn ghost" id="qcm-skip">⏭ Passer (sans réponse) <span class="kbd">0</span></button>' +
        '<span class="qcm-hint">' + (run.mode === "entrainement" ? 'Répondez avec <span class="kbd">A</span> <span class="kbd">B</span> <span class="kbd">C</span> <span class="kbd">D</span>' : 'Barème : +0,5 / 0 / 0') + '</span>' +
        '<button class="btn ghost" id="qcm-quit">✕ Abandonner</button>' +
      '</div>';

    $$(".qcm-opt", $("#qcm-stage")).forEach(function (b) {
      b.addEventListener("click", function () { answer(parseInt(this.getAttribute("data-i"), 10)); });
    });
    $("#qcm-skip").addEventListener("click", function () { answer(null); });
    $("#qcm-quit").addEventListener("click", function () {
      if (confirm("Abandonner ce QCM ? Les questions restantes compteront comme « sans réponse ».")) finishRun(true);
    });
  }

  function answer(idx) {
    if (!run || run.revealed) return;
    var it = run.items[run.pos];
    it.picked = idx;
    it.skipped = idx === null;

    if (run.mode === "examen") { next(); return; }

    // entraînement : correction immédiate
    run.revealed = true;
    $$(".qcm-opt", $("#qcm-stage")).forEach(function (b, i) {
      b.disabled = true;
      if (it.opts[i].good) b.classList.add("good");
      else if (i === idx) b.classList.add("bad");
    });
    var verdict = idx === null
      ? "⏭ Sans réponse (0 pt)"
      : (it.opts[idx].good ? "✅ Bonne réponse (+0,5 pt)" : "❌ Mauvaise réponse (0 pt)");
    $("#qcm-expl").innerHTML =
      '<div class="qcm-expl"><b>' + verdict + '</b><br>' + esc(it.q.e) + trapHtml(it.q) + '</div>' +
      '<button class="btn" id="qcm-next" style="margin-top:12px">Question suivante → <span class="kbd">Entrée</span></button>';
    $("#qcm-next").addEventListener("click", next);
    $("#qcm-next").focus();
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
      if (it.picked === null && !it.skipped) return; // jamais vue (abandon/chrono)
      var st = stats[it.q.id] || (stats[it.q.id] = { seen: 0, ko: 0 });
      st.seen++;
      if (it.picked === null || it.opts[it.picked].good) {
        if (it.picked !== null) st.ko = 0; // bonne réponse : on efface l'erreur passée
      } else st.ko++;
    });
    saveStats();

    var s = sessionScore();
    var n = run.items.length;
    var note = n ? (s.points / (n * POINT_OK) * 20) : 0;
    var noteStr = (Math.round(note * 10) / 10).toLocaleString("fr-FR");
    var ptsStr = (Math.round(s.points * 10) / 10).toLocaleString("fr-FR");
    var maxStr = (n * POINT_OK).toLocaleString("fr-FR");
    var wrong = run.items.filter(function (it) { return it.picked !== null && !it.opts[it.picked].good; });

    var review = run.items.map(function (it, i) {
      var cls, verdict;
      if (it.picked === null) { cls = "skip"; verdict = "⏭ sans réponse"; }
      else if (it.opts[it.picked].good) { cls = "good"; verdict = "✅ " + LETTERS[it.picked]; }
      else { cls = "bad"; verdict = "❌ " + LETTERS[it.picked]; }
      var goodIdx = it.opts.findIndex(function (o) { return o.good; });
      return '<div class="review-item ' + cls + '">' +
        '<div class="review-q"><b>' + (i + 1) + '.</b> ' + esc(it.q.q) + '</div>' +
        '<div class="review-a">' + verdict + ' &nbsp;·&nbsp; Bonne réponse : <b>' + LETTERS[goodIdx] + '. ' + esc(it.opts[goodIdx].text) + '</b></div>' +
        '<div class="review-e">' + esc(it.q.e) + '</div>' + trapHtml(it.q) +
      '</div>';
    }).join("");

    $("#qcm-stage").style.display = "none";
    var d = $("#qcm-done");
    d.style.display = "block";
    d.innerHTML =
      '<h3>' + (aborted ? "QCM interrompu" : "QCM terminé 🎉") + '</h3>' +
      '<div class="big-num">' + ptsStr + ' / ' + maxStr + '</div>' +
      '<p style="color:var(--muted)">soit <b>' + noteStr + ' / 20</b> (barème +0,5 / 0 / 0)<br>' +
        '✅ ' + s.ok + ' bonne' + (s.ok > 1 ? "s" : "") + ' · ❌ ' + s.ko + ' mauvaise' + (s.ko > 1 ? "s" : "") + ' · ⏭ ' + (n - s.ok - s.ko) + ' sans réponse · ⏱ ' + fmtTime(elapsed) + '</p>' +
      '<div class="done-actions">' +
        '<button class="btn" id="qcm-again">↻ Nouveau QCM</button>' +
        (wrong.length ? '<button class="btn ghost" id="qcm-redo">Retravailler les ' + wrong.length + ' erreur' + (wrong.length > 1 ? "s" : "") + '</button>' : '') +
        '<button class="btn ghost" id="qcm-back">← Réglages</button>' +
      '</div>' +
      '<div class="qcm-review"><h4>Corrigé</h4>' + review + '</div>';

    $("#qcm-again").addEventListener("click", function () { startRun(); });
    $("#qcm-back").addEventListener("click", renderSetup);
    if (wrong.length) $("#qcm-redo").addEventListener("click", function () {
      var items = wrong.map(function (it) {
        var opts = it.q.o.map(function (text, i) { return { text: text, good: i === it.q.a }; });
        if (!it.q.f) shuffle(opts);
        return { q: it.q, opts: opts, picked: null, skipped: false };
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
    var k = ev.key.toLowerCase();
    if (run.revealed) {
      if (ev.code === "Enter" || ev.code === "Space" || ev.code === "ArrowRight") { ev.preventDefault(); next(); }
      return;
    }
    var idx = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 }[k];
    var it = run.items[run.pos];
    if (idx !== undefined && it && idx < it.opts.length) { ev.preventDefault(); answer(idx); }
    else if (k === "0" || k === "p") { ev.preventDefault(); answer(null); }
  });

  /* ============ API pour app.js ============ */
  window.QCM_VIEW = {
    enter: function () { renderSetup(); },
    leave: function () { stopTimer(); }
  };
})();
