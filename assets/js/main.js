(function () {
  'use strict';
  var frame = document.querySelector('.poster-frame');
  if (!frame) return;
  function resizePoster() {
    try {
      var doc = frame.contentDocument;
      if (doc && doc.body) frame.style.height = Math.ceil(doc.documentElement.scrollHeight) + 'px';
    } catch (error) {
      // The full poster remains available through the adjacent link.
    }
  }
  frame.addEventListener('load', function () {
    resizePoster();
    if (frame.contentWindow.ResizeObserver) {
      new frame.contentWindow.ResizeObserver(resizePoster).observe(frame.contentDocument.body);
    }
  });
  window.addEventListener('resize', resizePoster);
}());
