document.addEventListener("DOMContentLoaded", function(){
  var headerText = document.querySelector('.site-header .container');
  var bgImage = document.querySelector('.site-header .bgEl');

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  }

  window.addEventListener("DOMContentLoaded", scrollLoop, false);

  var xScrollPosition;
  var yScrollPosition;

  function scrollLoop() {
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;

      setTranslate(0, yScrollPosition * -0.4, headerText);
      setTranslate(0, yScrollPosition * 0.7, bgImage);

      requestAnimationFrame(scrollLoop);
  }
});