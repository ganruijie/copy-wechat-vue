(function (doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = window.hasOwnProperty("orientationchange") ? "orientationchange" : "resize",
    // resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc;
  recalc = () => {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) {
      return;
    }
    docEl.style.fontSize = `${(clientWidth / 10)}px`;
  };
  if (!doc.addEventListener) {
    return;
  }
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);