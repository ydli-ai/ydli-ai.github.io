// Highlight current section in all in-page navigation areas while scrolling.
(function () {
  "use strict";

  var navLinks = document.querySelectorAll(
    '.nav-links a[href^="#"], .page-sidebar a[href^="#"]'
  );
  if (!navLinks.length || !("IntersectionObserver" in window)) return;

  var linksById = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (!id) return;
    if (!linksById[id]) linksById[id] = [];
    linksById[id].push(link);
  });

  var sections = Object.keys(linksById)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var links = linksById[entry.target.id];
        if (!links || !links.length) return;
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove("active"); });
          links.forEach(function (link) { link.classList.add("active"); });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach(function (s) { observer.observe(s); });
})();
