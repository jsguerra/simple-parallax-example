document.addEventListener("DOMContentLoaded", function(){
  var headerText = document.querySelector('.site-header .container');
  var bgImage = document.querySelector('.site-header .bgEl');
  var objectBlock = document.querySelector('.object');
  var objectBlockClone = document.querySelector('.object-clone');
  // var objectBlock2 = document.querySelector('.object2');
  var objectBlock3 = document.querySelector('.object3');
  // var objectBlock4 = document.querySelector('.object4');
  var hexObject = document.querySelector('.hexagon');
  var hexObjectClone = document.querySelector('.object-clone .hexagon');
  // var hexObject2 = document.querySelector('.object2 .hexagon');
  var hexObject3 = document.querySelector('.object3 .hexagon');
  // var svgObject = document.querySelector('.object4 svg');


  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
  }

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

      // setTranslate(0, yScrollPosition * 0.7, objectBlock);
      // setTranslateRotate(yScrollPosition * 1.2, hexObject);

      // setTranslate(0, yScrollPosition * 0.9, objectBlockClone);
      // setTranslateRotate(yScrollPosition * -1.4, hexObjectClone);

      // setTranslate(0, yScrollPosition * 1.5, objectBlock2);
      // setTranslateRotate(yScrollPosition * -0.9, hexObject2);

      // setTranslate(0, yScrollPosition * 0.9, objectBlock3);
      // setTranslateRotate(yScrollPosition * 1.5, hexObject3);

      // setTranslate(0, yScrollPosition * 1.30, objectBlock4);
      // setTranslateRotate(yScrollPosition * 0.9, svgObject);

      requestAnimationFrame(scrollLoop);
  }
});