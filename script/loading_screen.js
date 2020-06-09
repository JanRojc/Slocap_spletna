// loading screen
document.getElementById("bodyId").style.overflow = "hidden";
document.getElementById("drawLogoId").style.opacity = 1;
document.getElementById("drawColorId").style.opacity = 1;

anime({
  targets: '#drawLogoId',
  strokeDashoffset: [1900, 0],
  easing: 'easeInOutQuad',
  delay: 500,
  duration: 10000
});
TweenMax.to("#loadingScreen", 2, {y:-1000, delay:5});
TweenMax.to("#loadingScreen", 1, {opacity:0, delay:7});
setTimeout(function () {
  document.getElementById("loadingScreen").style['pointer-events'] = "none";
  document.getElementById("bodyId").style["overflow-y"] = "auto";
}, 7500);