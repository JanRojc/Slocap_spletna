// loading screen
document.getElementById("bodyId").style.overflow = "hidden";
document.getElementById("drawLogoId").style.opacity = 1;


anime({
  targets: '#drawLogoId',
  strokeDashoffset: [1900, 0],
  easing: 'easeInOutQuad',
  delay: 500,
  duration: 5000
});
TweenMax.to("#loadingScreen", 2, {x:"-125%", delay:2, ease: Power3.easeIn});
// TweenMax.to("#loadingScreen", 1, {opacity:0, delay:4});

setTimeout(function () {
  document.getElementById("loadingScreen").style['pointer-events'] = "none";
  document.getElementById("bodyId").style["overflow-y"] = "auto";
}, 3000);