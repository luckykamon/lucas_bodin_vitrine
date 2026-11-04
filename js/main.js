/* ------------------------------------------------------------------
   main.js — améliorations pour les humains uniquement.
   Le contenu du site est entièrement présent dans le HTML : ce script
   n'ajoute que des interactions (défilement doux, survol de la photo,
   navbar active, année courante). Aucun contenu n'en dépend.
------------------------------------------------------------------ */
(function () {
    "use strict";

    // Année courante dans le footer
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Défilement doux pour les ancres internes
    document.querySelectorAll('a.smoothscroll, a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            var id = link.getAttribute("href");
            if (!id || id === "#") return;
            var target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Survol de la photo de profil : échange avec l'image secondaire
    var pic = document.querySelector(".profile-pic[data-hover]");
    if (pic) {
        var base = pic.getAttribute("src");
        var hover = pic.getAttribute("data-hover");
        var img = new Image();
        img.src = hover; // préchargement
        pic.addEventListener("mouseover", function () { pic.setAttribute("src", hover); });
        pic.addEventListener("mouseout", function () { pic.setAttribute("src", base); });
    }

    // Navbar : item actif selon la section visible
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('#nav a.smoothscroll'));
    var sections = navLinks
        .map(function (a) { return document.querySelector(a.getAttribute("href")); })
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                navLinks.forEach(function (a) {
                    var li = a.parentElement;
                    if (a.getAttribute("href") === "#" + entry.target.id) {
                        li.classList.add("current");
                    } else {
                        li.classList.remove("current");
                    }
                });
            });
        }, { rootMargin: "-40% 0px -55% 0px" });
        sections.forEach(function (s) { observer.observe(s); });
    }
})();
