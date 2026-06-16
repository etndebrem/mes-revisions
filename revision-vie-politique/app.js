/* ===== Révisions Vie politique contemporaine — logique ===== */
(function () {
  "use strict";

  var DATA = (window.REPERTOIRE || []).slice();
  var FICHES = (window.FICHES || []);
  var FICHE_PARTS = window.FICHE_PARTS || [];
  var STORE_KEY = "viepol_leitner_v1";
  var TYPE_LABEL = { auteur: "Auteur / penseur", notion: "Notion / concept", texte: "Loi / jurisprudence / ouvrage", date: "Date / événement" };
  var TYPE_SHORT = { auteur: "Auteur", notion: "Notion", texte: "Texte", date: "Date" };

  /* --- identifiants stables + chargement progression --- */
  function slug(s) {
    return s.toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);
  }
  var seen = {};
  DATA.forEach(function (e, i) {
    var id = slug(e.r);
    if (seen[id]) id += "-" + i;
    seen[id] = true;
    e.id = id;
  });

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) {}
  }
  var progress = loadProgress();
  function boxOf(id) { return (progress[id] && progress[id].box) || 1; }
  function setBox(id, box) {
    if (!progress[id]) progress[id] = {};
    progress[id].box = box;
    progress[id].seen = (progress[id].seen || 0) + 1;
    saveProgress();
  }

  /* --- thèmes / types présents --- */
  var THEMES = [];
  DATA.forEach(function (e) { if (THEMES.indexOf(e.th) < 0) THEMES.push(e.th); });
  var THEME_ORDER = window.THEME_ORDER || [];
  THEMES.sort(function (a, b) {
    var ia = THEME_ORDER.indexOf(a), ib = THEME_ORDER.indexOf(b);
    if (ia < 0) ia = 999; if (ib < 0) ib = 999;
    return (ia - ib) || a.localeCompare(b, "fr");
  });
  var TYPES = ["auteur", "notion", "texte", "date"];

  /* --- état --- */
  var state = {
    tab: "repertoire",
    search: "",
    types: {},            // filtres type actifs (vide = tous)
    themes: {},           // filtres thème actifs (vide = tous)
    dir: "rv",            // rv = réf->sens, vr = sens->réf, mix
    onlyDue: false
  };

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  // mini-formatage des fiches : **gras** et *italique*
  function fmt(s) {
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  /* --- filtrage commun --- */
  function activeKeys(obj) { return Object.keys(obj).filter(function (k) { return obj[k]; }); }
  function filtered() {
    var tk = activeKeys(state.types), thk = activeKeys(state.themes);
    var q = state.search.trim().toLowerCase();
    return DATA.filter(function (e) {
      if (tk.length && tk.indexOf(e.t) < 0) return false;
      if (thk.length && thk.indexOf(e.th) < 0) return false;
      if (q) {
        var hay = (e.r + " " + e.m + " " + e.th).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
  }

  /* ============ BARRE DE STATS GLOBALE ============ */
  function renderStats() {
    var total = DATA.length, mastered = 0, started = 0;
    DATA.forEach(function (e) {
      var b = boxOf(e.id);
      if (b >= 5) mastered++;
      if (progress[e.id] && progress[e.id].seen) started++;
    });
    var pct = total ? Math.round(mastered / total * 100) : 0;
    var bar = $("#statsbar");
    bar.innerHTML =
      '<span class="chip"><b>' + total + '</b> entrées</span>' +
      '<span class="chip"><b>' + started + '</b> vues</span>' +
      '<span class="chip">✅ <b>' + mastered + '</b> maîtrisées</span>' +
      '<div class="bar" title="' + pct + '% maîtrisé"><span style="width:' + pct + '%"></span></div>' +
      '<span class="chip">' + pct + ' %</span>';
  }

  /* ============ RÉPERTOIRE ============ */
  function renderControls() {
    var c = $("#rep-controls");
    var typeChips = TYPES.map(function (t) {
      return '<button class="fchip t-' + t + (state.types[t] ? " on" : "") +
        '" data-type="' + t + '">' + TYPE_SHORT[t] + '</button>';
    }).join("");
    var themeChips = THEMES.map(function (th) {
      return '<button class="fchip' + (state.themes[th] ? " on" : "") +
        '" data-theme="' + esc(th) + '">' + esc(th) + '</button>';
    }).join("");
    c.innerHTML =
      '<div class="row"><input type="search" id="rep-search" placeholder="🔎 Rechercher (auteur, notion, mot-clé, sens…)" value="' + esc(state.search) + '"></div>' +
      '<div class="row"><span class="filterlabel">Type</span><div class="chipset">' + typeChips + '</div></div>' +
      '<div class="row"><span class="filterlabel">Thème</span><div class="chipset">' + themeChips +
      '<button class="fchip" id="rep-reset" title="Tout réafficher">✕ réinitialiser</button></div></div>';

    var search = $("#rep-search");
    search.addEventListener("input", function () { state.search = this.value; renderList(); });
    $$("[data-type]", c).forEach(function (b) {
      b.addEventListener("click", function () {
        var t = this.getAttribute("data-type");
        state.types[t] = !state.types[t]; this.classList.toggle("on"); renderList();
      });
    });
    $$("[data-theme]", c).forEach(function (b) {
      b.addEventListener("click", function () {
        var th = this.getAttribute("data-theme");
        state.themes[th] = !state.themes[th]; this.classList.toggle("on"); renderList();
      });
    });
    $("#rep-reset").addEventListener("click", function () {
      state.search = ""; state.types = {}; state.themes = {}; renderControls(); renderList();
    });
  }

  function renderList() {
    var items = filtered();
    var box = $("#rep-list");
    $("#rep-count").textContent = items.length + " entrée" + (items.length > 1 ? "s" : "") + " affichée" + (items.length > 1 ? "s" : "");
    if (!items.length) { box.innerHTML = '<div class="empty">Aucune entrée ne correspond à ces filtres.</div>'; return; }
    box.innerHTML = "";
    items.forEach(function (e) {
      var b = boxOf(e.id);
      var boxBadge = (progress[e.id] && progress[e.id].seen)
        ? '<span class="badge box' + (b >= 5 ? " b5" : "") + '" title="Niveau de mémorisation (Leitner)">' + (b >= 5 ? "★ maîtrisée" : "boîte " + b) + '</span>'
        : "";
      var card = el("div", "entry t-" + e.t);
      card.innerHTML =
        '<div class="ref">' + esc(e.r) + '</div>' +
        '<div class="mean">' + esc(e.m) + '</div>' +
        '<div class="badges">' +
          '<span class="badge type t-' + e.t + '">' + TYPE_SHORT[e.t] + '</span>' +
          '<span class="badge theme">' + esc(e.th) + '</span>' + boxBadge +
        '</div>';
      box.appendChild(card);
    });
  }

  /* ============ FLASHCARDS ============ */
  var deck = [], pos = 0, revealed = false, sess = { ok: 0, ko: 0 };

  function renderFcSetup() {
    var c = $("#fc-controls");
    var typeChips = TYPES.map(function (t) {
      return '<button class="fchip t-' + t + (state.types[t] ? " on" : "") + '" data-type="' + t + '">' + TYPE_SHORT[t] + '</button>';
    }).join("");
    var themeChips = THEMES.map(function (th) {
      return '<button class="fchip' + (state.themes[th] ? " on" : "") + '" data-theme="' + esc(th) + '">' + esc(th) + '</button>';
    }).join("");
    c.innerHTML =
      '<h3>Préparer une session de révision</h3>' +
      '<div class="controls" style="box-shadow:none;border:0;padding:0;margin:0">' +
        '<div class="row"><span class="filterlabel">Type</span><div class="chipset">' + typeChips + '</div></div>' +
        '<div class="row"><span class="filterlabel">Thème</span><div class="chipset">' + themeChips +
          '<button class="fchip" id="fc-reset">✕ tous</button></div></div>' +
        '<div class="row" style="margin-top:14px"><span class="filterlabel">Sens</span>' +
          '<div class="seg" id="fc-dir">' +
            '<button data-dir="rv" class="' + (state.dir === "rv" ? "on" : "") + '">Référence → Sens</button>' +
            '<button data-dir="vr" class="' + (state.dir === "vr" ? "on" : "") + '">Sens → Référence</button>' +
            '<button data-dir="mix" class="' + (state.dir === "mix" ? "on" : "") + '">Mixte</button>' +
          '</div></div>' +
        '<label class="opt"><input type="checkbox" id="fc-due"' + (state.onlyDue ? " checked" : "") + '> Réviser en priorité les cartes non maîtrisées (boîte &lt; 5)</label>' +
      '</div>' +
      '<button class="btn big" id="fc-start">▶ Commencer (<span id="fc-n">0</span> cartes)</button>';

    $$("[data-type]", c).forEach(function (b) {
      b.addEventListener("click", function () { var t = this.getAttribute("data-type"); state.types[t] = !state.types[t]; this.classList.toggle("on"); updateN(); });
    });
    $$("[data-theme]", c).forEach(function (b) {
      b.addEventListener("click", function () { var th = this.getAttribute("data-theme"); state.themes[th] = !state.themes[th]; this.classList.toggle("on"); updateN(); });
    });
    $("#fc-reset").addEventListener("click", function () { state.types = {}; state.themes = {}; renderFcSetup(); });
    $$("#fc-dir button", c).forEach(function (b) {
      b.addEventListener("click", function () {
        state.dir = this.getAttribute("data-dir");
        $$("#fc-dir button", c).forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on");
      });
    });
    $("#fc-due").addEventListener("change", function () { state.onlyDue = this.checked; updateN(); });
    $("#fc-start").addEventListener("click", startSession);
    updateN();
  }
  function deckCandidates() {
    var arr = filtered();
    if (state.onlyDue) arr = arr.filter(function (e) { return boxOf(e.id) < 5; });
    return arr;
  }
  function updateN() { $("#fc-n").textContent = deckCandidates().length; }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function startSession() {
    deck = deckCandidates();
    if (!deck.length) { alert("Aucune carte avec ces filtres. Élargissez la sélection."); return; }
    // priorité aux boîtes basses (moins su) puis aléatoire
    deck = shuffle(deck).sort(function (a, b) { return boxOf(a.id) - boxOf(b.id); });
    pos = 0; revealed = false; sess = { ok: 0, ko: 0 };
    $("#fc-controls").classList.add("hidden");
    $("#fc-done").style.display = "none";
    $("#fc-stage").style.display = "block";
    showCard();
  }

  function frontBack(e) {
    var dir = state.dir === "mix" ? (Math.random() < 0.5 ? "rv" : "vr") : state.dir;
    if (dir === "vr") return { qLabel: "Quelle référence ?", q: e.m, qSmall: true, aRef: e.r, aBody: "" };
    return { qLabel: "Signification ?", q: e.r, qSmall: false, aRef: "", aBody: e.m };
  }

  function showCard() {
    revealed = false;
    var e = deck[pos];
    var fb = frontBack(e);
    e._fb = fb;
    var total = deck.length;
    var pct = Math.round(pos / total * 100);
    $("#fc-progress").innerHTML =
      '<span>Carte <b>' + (pos + 1) + '</b> / ' + total + '</span>' +
      '<div class="bar"><span style="width:' + pct + '%"></span></div>' +
      '<span>✅ ' + sess.ok + ' &nbsp; ❌ ' + sess.ko + '</span>';

    var b = boxOf(e.id);
    $("#fc-card").innerHTML =
      '<div class="side-label">' + esc(fb.qLabel) + '</div>' +
      '<div class="type-tag"><span class="badge type t-' + e.t + '">' + TYPE_SHORT[e.t] + '</span></div>' +
      '<div class="q' + (fb.qSmall ? " small" : "") + '">' + esc(fb.q) + '</div>' +
      '<div class="hint">Cliquez ou <span class="kbd">Espace</span> pour révéler</div>' +
      '<div class="theme-foot"><span class="badge theme">' + esc(e.th) + (progress[e.id] && progress[e.id].seen ? ' · boîte ' + b : '') + '</span></div>';

    $("#fc-actions").style.visibility = "hidden";
  }

  function reveal() {
    if (revealed) return;
    revealed = true;
    var e = deck[pos], fb = e._fb;
    var ansHtml = (fb.aRef ? '<div class="a-ref">' + esc(fb.aRef) + '</div>' : "") +
                  (fb.aBody ? '<div>' + esc(fb.aBody) + '</div>' : "");
    var card = $("#fc-card");
    var hint = card.querySelector(".hint");
    if (hint) hint.remove();
    var a = el("div", "a", ansHtml);
    card.insertBefore(a, card.querySelector(".theme-foot"));
    $("#fc-actions").style.visibility = "visible";
  }

  function answer(known) {
    if (!revealed) { reveal(); return; }
    var e = deck[pos];
    var b = boxOf(e.id);
    setBox(e.id, known ? Math.min(b + 1, 5) : 1);
    if (known) sess.ok++; else sess.ko++;
    pos++;
    renderStats();
    if (pos >= deck.length) finishSession();
    else showCard();
  }

  function finishSession() {
    $("#fc-stage").style.display = "none";
    var d = $("#fc-done");
    d.style.display = "block";
    var total = sess.ok + sess.ko;
    var pct = total ? Math.round(sess.ok / total * 100) : 0;
    d.innerHTML =
      '<h3>Session terminée 🎉</h3>' +
      '<div class="big-num">' + sess.ok + ' / ' + total + '</div>' +
      '<p style="color:var(--muted)">' + pct + ' % de réussite — ❌ ' + sess.ko + ' carte(s) à revoir.<br>Votre progression est sauvegardée automatiquement.</p>' +
      '<div class="done-actions">' +
        '<button class="btn" id="d-again">↻ Nouvelle session</button>' +
        (sess.ko > 0 ? '<button class="btn ghost" id="d-redo">Revoir les ' + sess.ko + ' ratées</button>' : "") +
        '<button class="btn ghost" id="d-back">← Réglages</button>' +
      '</div>';
    var lastKo = deck.filter(function (e) { return boxOf(e.id) === 1; });
    $("#d-again").addEventListener("click", startSession);
    $("#d-back").addEventListener("click", backToSetup);
    if (sess.ko > 0) $("#d-redo").addEventListener("click", function () {
      // refaire uniquement celles remises en boîte 1 pendant la session
      deck = shuffle(lastKo); pos = 0; revealed = false; sess = { ok: 0, ko: 0 };
      $("#fc-done").style.display = "none"; $("#fc-stage").style.display = "block"; showCard();
    });
  }

  function backToSetup() {
    $("#fc-stage").style.display = "none";
    $("#fc-done").style.display = "none";
    $("#fc-controls").classList.remove("hidden");
    renderFcSetup();
  }

  /* ============ FICHES DE SYNTHÈSE ============ */
  var fstate = { search: "", open: {} };

  function ficheMatches(f, q) {
    if (!q) return true;
    var hay = (f.title + " " + (f.sub || "") + " " +
      f.blocks.map(function (b) { return (b.h || "") + " " + (b.p || "") + " " + (b.l || []).join(" "); }).join(" ")).toLowerCase();
    return hay.indexOf(q) >= 0;
  }
  function currentFiches() {
    var q = fstate.search.trim().toLowerCase();
    var out = [];
    FICHES.forEach(function (f, i) {
      if (!ficheMatches(f, q)) return;
      out.push({ f: f, i: i });
    });
    return out;
  }
  function ficheCardHtml(f, i) {
    var open = !!fstate.open[i];
    var body = f.blocks.map(function (b) {
      var cls = /^⚠️/.test(b.h) ? " warn" : (/Plan-type/i.test(b.h) ? " plan" : "");
      var inner = (b.p != null)
        ? "<p>" + fmt(b.p) + "</p>"
        : "<ul>" + (b.l || []).map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>";
      return '<div class="fiche-block' + cls + '"><h4>' + esc(b.h) + "</h4>" + inner + "</div>";
    }).join("");
    return '<article class="fiche' + (open ? " open" : "") + '">' +
        '<div class="fiche-head" data-i="' + i + '">' +
          '<div class="fiche-head-main">' +
            '<div class="fiche-title">' + esc(f.title) + "</div>" +
            '<div class="fiche-sub">' + esc(f.sub || "") + "</div>" +
          "</div>" +
          '<div class="fiche-head-side"><span class="fiche-caret">▾</span></div>' +
        "</div>" +
        '<div class="fiche-body">' + body + "</div>" +
      "</article>";
  }
  function renderFicheList() {
    var items = currentFiches();
    $("#fiche-count").textContent = items.length + " fiche" + (items.length > 1 ? "s" : "") + " affichée" + (items.length > 1 ? "s" : "");
    var box = $("#fiche-list");
    if (!items.length) { box.innerHTML = '<div class="empty">Aucune fiche ne correspond à cette recherche.</div>'; return; }
    var html = "";
    FICHE_PARTS.forEach(function (part) {
      var group = items.filter(function (it) { return it.f.part === part; });
      if (!group.length) return;
      html += '<h2 class="fiche-part">' + esc(part) + ' <span>' + group.length + "</span></h2>";
      group.forEach(function (it) { html += ficheCardHtml(it.f, it.i); });
    });
    box.innerHTML = html;
    $$(".fiche-head", box).forEach(function (h) {
      h.addEventListener("click", function () {
        var i = +this.getAttribute("data-i");
        if (fstate.open[i]) delete fstate.open[i]; else fstate.open[i] = true;
        this.parentNode.classList.toggle("open", !!fstate.open[i]);
      });
    });
  }
  function renderFiches() {
    var c = $("#fiche-controls");
    c.innerHTML =
      '<div class="row"><input type="search" id="fiche-search" placeholder="🔎 Rechercher (thème, auteur, notion…)" value="' + esc(fstate.search) + '"></div>' +
      '<div class="row"><span class="filterlabel">' + FICHES.length + ' fiches · ' + FICHE_PARTS.length + ' leçons</span>' +
        '<button class="fchip" id="fiche-expand" style="margin-left:auto">▼ Tout déplier</button></div>';
    $("#fiche-search").addEventListener("input", function () { fstate.search = this.value; renderFicheList(); });
    $("#fiche-expand").addEventListener("click", function () {
      var items = currentFiches();
      var anyClosed = items.some(function (it) { return !fstate.open[it.i]; });
      items.forEach(function (it) { if (anyClosed) fstate.open[it.i] = true; else delete fstate.open[it.i]; });
      this.textContent = anyClosed ? "▲ Tout replier" : "▼ Tout déplier";
      renderFicheList();
    });
    renderFicheList();
  }

  /* ============ NAVIGATION ============ */
  function setTab(tab) {
    state.tab = tab;
    $$("nav.tabs button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-tab") === tab); });
    $("#view-repertoire").style.display = tab === "repertoire" ? "block" : "none";
    $("#view-flashcards").style.display = tab === "flashcards" ? "block" : "none";
    var fv = $("#view-fiches"); if (fv) fv.style.display = tab === "fiches" ? "block" : "none";
    if (tab === "repertoire") { renderControls(); renderList(); }
    else if (tab === "flashcards") { backToSetup(); }
    else if (tab === "fiches") { renderFiches(); }
    renderStats();
  }

  /* ============ CLAVIER ============ */
  document.addEventListener("keydown", function (ev) {
    if (state.tab !== "flashcards") return;
    if ($("#fc-stage").style.display !== "block") return;
    if (ev.code === "Space" || ev.code === "Enter") { ev.preventDefault(); if (!revealed) reveal(); }
    else if (revealed && (ev.key === "1" || ev.code === "ArrowLeft")) { ev.preventDefault(); answer(false); }
    else if (revealed && (ev.key === "2" || ev.code === "ArrowRight")) { ev.preventDefault(); answer(true); }
  });

  /* ============ INIT ============ */
  document.addEventListener("DOMContentLoaded", function () {
    $$("nav.tabs button").forEach(function (b) {
      b.addEventListener("click", function () { setTab(this.getAttribute("data-tab")); });
    });
    $("#fc-card").addEventListener("click", function () { if (!revealed) reveal(); });
    $("#fc-actions").querySelector(".ko").addEventListener("click", function () { answer(false); });
    $("#fc-actions").querySelector(".ok").addEventListener("click", function () { answer(true); });
    $("#reset-progress").addEventListener("click", function () {
      if (confirm("Réinitialiser toute la progression des flashcards ?")) {
        progress = {}; saveProgress(); renderStats();
        if (state.tab === "repertoire") renderList();
      }
    });
    setTab("repertoire");
  });
})();
