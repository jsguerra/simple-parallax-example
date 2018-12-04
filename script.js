document.addEventListener("DOMContentLoaded", function(){
  // Header
  var headerText = document.querySelector('.site-header .container'),
      bgImage = document.querySelector('.site-header .bgEl');

  // Object blocks on page
  var objectBlock = document.querySelector('.object'),
      objectBlock2 = document.querySelector('.object2'),
      objectBlock3 = document.querySelector('.object3'),
      objectBlock4 = document.querySelector('.object4');

  // Shapes in the object blocks
  var hexObject = document.querySelector('.hexagon'),
      hexObject2 = document.querySelector('.object2 .hexagon'),
      hexObject3 = document.querySelector('.object3 .hexagon'),
      svgObject = document.querySelector('.object4 svg');

  // Translate Function
  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  }

  // Rotate Function
  function setTranslateRotate(yPos, el) {
    el.style.transform = "rotate(" + yPos + "deg)"
  }

  window.addEventListener("DOMContentLoaded", scrollLoop, false);

  var xScrollPosition;
  var yScrollPosition;

  function scrollLoop() {
      xScrollPosition = window.scrollX;
      yScrollPosition = window.scrollY;

      setTranslate(0, yScrollPosition * -0.4, headerText);
      setTranslate(0, yScrollPosition * 0.7, bgImage);

      setTranslate(0, yScrollPosition * 0.2, objectBlock);
      setTranslate(0, yScrollPosition * 0.2, objectBlock2);
      setTranslate(0, yScrollPosition * 0.2, objectBlock3);
      setTranslate(0, 0, objectBlock4);

      setTranslateRotate(yScrollPosition * 1.2, hexObject);
      setTranslateRotate(yScrollPosition * -1.4, hexObject2);
      setTranslateRotate(yScrollPosition * 1.5, hexObject3);
      setTranslateRotate(yScrollPosition * 0.4, svgObject);

      requestAnimationFrame(scrollLoop);
  }
});

/*!
 * Immediately Invoked Function Expression Boilerplate
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
;(function (window, document, undefined) {

    'use strict';

    var today = new Date(),
        currentYear = today.getFullYear(),
        colophon = document.querySelector('.colophon');

    colophon.innerHTML = 'Copyright &copy; ' + currentYear;

})(window, document);