// loading screen

document.getElementById("bodyId").style.overflow = "hidden";
document.getElementById("drawLogoId").style.opacity = 1;


anime({
  targets: '#drawLogoId',
  strokeDashoffset: [1900, 0],
  easing: 'easeInOutQuad',
  delay: 500,
  duration: 4000
});
TweenMax.to("#loadingScreen", 0, {x:-1});


TweenMax.to("#loadingScreenBackground1", 1.5, {x:"-100%", delay:2, ease: Power3.easeInOut});
TweenMax.to("#loadingScreenBackground2", 1.5, {x:"-100%", delay:2.05, ease: Power3.easeInOut});
TweenMax.to("#loadingScreenBackground3", 1.5, {x:"-100%", delay:2.1, ease: Power3.easeInOut});
TweenMax.to("#loadingScreen", 1, {opacity:0, delay:4.4});

setTimeout(function () {
  document.getElementById("loadingScreen").style['background-color'] = "rgba(0, 0, 0, 0)";
}, 1000);

setTimeout(function () {
  document.getElementById("loadingScreen").style['pointer-events'] = "none";
  document.getElementById("bodyId").style["overflow-y"] = "auto";
}, 3000);