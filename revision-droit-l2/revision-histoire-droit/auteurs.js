/* ===== Personnages — fiches comparatives & mode duel ===== */
(function () {
  "use strict";

  var DATA = (window.AUTEURS || []).slice();
  var GROUPES = window.AUTEUR_GROUPES || [];
  var DUELS = window.AUTEUR_DUELS || [];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function byNom(nom) { return DATA.filter(function (a) { return a.nom === nom; })[0]; }

  var state = { groupe: "", search: "", duel: null };

  /* ---- carte d'un personnage ---- */
  function fiche(a, compact) {
    var pos = a.pos.map(function (x) {
      return '<div class="aut-pos"><span class="aut-pos-t">' + esc(x.t) + '</span>' +
        '<span class="aut-pos-p">' + esc(x.p) + '</span></div>';
    }).join("");
    var conf = (a.confusion || []).map(function (c) {
      return '<div class="aut-conf"><b>↔ ' + esc(c.avec) + '</b> — ' + esc(c.note) + '</div>';
    }).join("");
    return '<div class="aut-card' + (compact ? " compact" : "") + '">' +
      '<div class="aut-head">' +
        '<div class="aut-nom">' + esc(a.nom) + '</div>' +
        '<div class="aut-vie">' + esc(a.vie) + '</div>' +
      '</div>' +
      '<div class="aut-courant">' + esc(a.courant) + '</div>' +
      (a.oeuvre ? '<div class="aut-oeuvre">📖 ' + esc(a.oeuvre) + '</div>' : '') +
      '<div class="aut-essence">' + esc(a.essence) + '</div>' +
      '<div class="aut-positions">' + pos + '</div>' +
      (conf ? '<div class="aut-confusions"><div class="aut-conf-h">À ne pas confondre</div>' + conf + '</div>' : '') +
    '</div>';
  }

  /* ---- tableau de duel (2 personnages côte à côte) ---- */
  function duelTable(a, b, cle) {
    // union ordonnée des thèmes présents chez l'un ou l'autre
    var order = ["Notion d'obligation", "Classifications", "Formation", "Prêt à intérêts", "Lésion", "Preuve", "Interprétation", "Nullité / vices", "Exécution", "Apport"];
    var themes = [];
    [a, b].forEach(function (p) { p.pos.forEach(function (x) { if (themes.indexOf(x.t) < 0) themes.push(x.t); }); });
    themes.sort(function (x, y) {
      var ix = order.indexOf(x), iy = order.indexOf(y);
      return (ix < 0 ? 99 : ix) - (iy < 0 ? 99 : iy);
    });
    function cell(p, t) {
      var m = p.pos.filter(function (x) { return x.t === t; })[0];
      return m ? esc(m.p) : '<span class="aut-na">—</span>';
    }
    var rows = themes.map(function (t) {
      return '<tr><th>' + esc(t) + '</th><td>' + cell(a, t) + '</td><td>' + cell(b, t) + '</td></tr>';
    }).join("");
    return '<div class="aut-duel">' +
      '<div class="aut-duel-cle">🎯 ' + esc(cle) + '</div>' +
      '<table class="aut-duel-table">' +
        '<thead><tr><th></th>' +
          '<th><div class="aut-duel-nom">' + esc(a.nom) + '</div><div class="aut-duel-vie">' + esc(a.vie) + ' · ' + esc(a.courant) + '</div></th>' +
          '<th><div class="aut-duel-nom">' + esc(b.nom) + '</div><div class="aut-duel-vie">' + esc(b.vie) + ' · ' + esc(b.courant) + '</div></th>' +
        '</tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
      '</table>' +
    '</div>';
  }

  /* ---- rendu principal ---- */
  function render() {
    var c = $("#view-auteurs");
    var duelChips = DUELS.map(function (d, i) {
      return '<button class="fchip aut-duel-chip' + (state.duel === i ? " on" : "") + '" data-duel="' + i + '">' +
        esc(d.a) + ' ↔ ' + esc(d.b) + '</button>';
    }).join("");
    var groupChips = GROUPES.map(function (g) {
      return '<button class="fchip' + (state.groupe === g ? " on" : "") + '" data-groupe="' + esc(g) + '">' + esc(g) + '</button>';
    }).join("");

    var body;
    if (state.duel !== null) {
      var d = DUELS[state.duel];
      var a = byNom(d.a), b = byNom(d.b);
      body = '<div class="aut-duel-wrap">' + duelTable(a, b, d.cle) +
        '<div class="aut-grid duo">' + fiche(a, true) + fiche(b, true) + '</div></div>';
    } else {
      var q = state.search.trim().toLowerCase();
      var items = DATA.filter(function (a) {
        if (state.groupe && a.groupe !== state.groupe) return false;
        if (q) {
          var hay = (a.nom + " " + a.courant + " " + a.essence + " " + a.oeuvre + " " +
            a.pos.map(function (x) { return x.t + " " + x.p; }).join(" ")).toLowerCase();
          if (hay.indexOf(q) < 0) return false;
        }
        return true;
      });
      $("#aut-count") && ($("#aut-count").textContent = items.length);
      // groupés par époque, dans l'ordre AUTEUR_GROUPES
      var sections = GROUPES.map(function (g) {
        var inG = items.filter(function (a) { return a.groupe === g; });
        if (!inG.length) return "";
        return '<h3 class="aut-groupe">' + esc(g) + '</h3><div class="aut-grid">' +
          inG.map(function (a) { return fiche(a, false); }).join("") + '</div>';
      }).join("");
      body = sections || '<div class="empty">Aucun personnage ne correspond à cette recherche.</div>';
    }

    c.innerHTML =
      '<div class="controls">' +
        '<div class="row"><span class="filterlabel">⚔️ Duels</span><div class="chipset">' + duelChips +
          (state.duel !== null ? '<button class="fchip" id="aut-duel-off">✕ revenir aux fiches</button>' : '') +
        '</div></div>' +
        (state.duel === null ?
          '<div class="row" style="margin-top:10px"><input type="search" id="aut-search" placeholder="🔎 Rechercher un juriste, une position, un mot-clé…" value="' + esc(state.search) + '"></div>' +
          '<div class="row" style="margin-top:10px"><span class="filterlabel">Époque</span><div class="chipset">' + groupChips +
            '<button class="fchip" id="aut-reset">✕ toutes</button></div></div>'
          : '') +
      '</div>' +
      (state.duel === null ? '<p class="count"><span id="aut-count"></span> personnage(s)</p>' : '') +
      body;

    $$("[data-duel]", c).forEach(function (b) {
      b.addEventListener("click", function () {
        var i = parseInt(this.getAttribute("data-duel"), 10);
        state.duel = state.duel === i ? null : i;
        render();
      });
    });
    var off = $("#aut-duel-off"); if (off) off.addEventListener("click", function () { state.duel = null; render(); });
    $$("[data-groupe]", c).forEach(function (b) {
      b.addEventListener("click", function () {
        var g = this.getAttribute("data-groupe");
        state.groupe = state.groupe === g ? "" : g; render();
      });
    });
    var reset = $("#aut-reset"); if (reset) reset.addEventListener("click", function () { state.groupe = ""; state.search = ""; render(); });
    var search = $("#aut-search");
    if (search) search.addEventListener("input", function () { state.search = this.value; renderListOnly(); });
    // recompte initial
    if (state.duel === null) { var cnt = $("#aut-count"); if (cnt && !cnt.textContent) cnt.textContent = DATA.filter(function (a) { return !state.groupe || a.groupe === state.groupe; }).length; }
  }

  // évite de perdre le focus de la recherche à chaque frappe : ne re-render que la liste
  function renderListOnly() {
    var q = state.search.trim().toLowerCase();
    var items = DATA.filter(function (a) {
      if (state.groupe && a.groupe !== state.groupe) return false;
      if (q) {
        var hay = (a.nom + " " + a.courant + " " + a.essence + " " + a.oeuvre + " " +
          a.pos.map(function (x) { return x.t + " " + x.p; }).join(" ")).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
    var cnt = $("#aut-count"); if (cnt) cnt.textContent = items.length;
    var sections = GROUPES.map(function (g) {
      var inG = items.filter(function (a) { return a.groupe === g; });
      if (!inG.length) return "";
      return '<h3 class="aut-groupe">' + esc(g) + '</h3><div class="aut-grid">' +
        inG.map(function (a) { return fiche(a, false); }).join("") + '</div>';
    }).join("");
    // remplace tout ce qui suit le <p class="count">
    var c = $("#view-auteurs");
    var countP = c.querySelector(".count");
    // retire les anciennes sections
    while (countP && countP.nextSibling) c.removeChild(countP.nextSibling);
    var holder = document.createElement("div");
    holder.innerHTML = sections || '<div class="empty">Aucun personnage ne correspond à cette recherche.</div>';
    while (holder.firstChild) c.appendChild(holder.firstChild);
  }

  window.AUTEURS_VIEW = { enter: function () { state.duel = null; render(); }, leave: function () {} };
})();
