var boolPodjetje = true;
var boolProizvodi = false;
var stanje = 0;
var animationComplete = true;

// Doma-1, Podjetje-2, Galerija-3, Proizvodi-4, PVC-5, Polialuminat-6, Aluminij-7, Kontakt-8
//scroll enabled: galerija, kontakt




// Page loading ---------------------------------------------------------------------
//    |||
//    vvv


functionDoma();

// body positioning
document.getElementById("mainDiv").style['margin-left'] = window.innerWidth / 2 - 409 + "px";
document.getElementById("bodyId").style['background-position'] = window.innerWidth / 2 - 409 + "px 0px";

// pdf animation timelines
var t1 = new TimelineMax({paused:true});
t1.fromTo("#pdf1", {y:0, rotateY:0, opacity:1}, {y:-5, rotateY:90, opacity:.2, duration:.2});
t1.fromTo("#pdfDownload1", {y:-5, rotateY:-90, opacity:.2}, {y:0, rotateY:0, opacity:1, duration:.2});


var t2 = new TimelineMax({paused:true});
t2.fromTo("#pdf2", {y:0, rotateY:0, opacity:1}, {y:-5, rotateY:90, opacity:.2, duration:.2});
t2.fromTo("#pdfDownload2", {y:-5, rotateY:-90, opacity:.2}, {y:0, rotateY:0, opacity:1, duration:.2});

var t3 = new TimelineMax({paused:true});
t3.fromTo("#pdf3", {y:0, rotateY:0, opacity:1}, {y:-5, rotateY:90, opacity:.2, duration:.2});
t3.fromTo("#pdfDownload3", {y:-5, rotateY:-90, opacity:.2}, {y:0, rotateY:0, opacity:1, duration:.2});

// underline animation timelines
var timelineBtn1;
var timelineBtn2;
var timelineBtn3;
var timelineBtn4;
var timelineBtn5;
var timelineBtn6;
var timelineBtn7;
var timelineBtn8;

function reload() {
   timelineBtn1 = new TimelineMax({paused:true});
timelineBtn1.fromTo("#btn1", {backgroundPosition: "-47px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn2 = new TimelineMax({paused:true});
timelineBtn2.fromTo("#btn2", {backgroundPosition: "-76px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn3 = new TimelineMax({paused:true});
timelineBtn3.fromTo("#btn3", {backgroundPosition: "-52px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn4 = new TimelineMax({paused:true});
timelineBtn4.fromTo("#btn4", {backgroundPosition: "-65px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn5 = new TimelineMax({paused:true});
timelineBtn5.fromTo("#btn5", {backgroundPosition: "-70px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn6 = new TimelineMax({paused:true});
timelineBtn6.fromTo("#btn6", {backgroundPosition: "-194px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn7 = new TimelineMax({paused:true});
timelineBtn7.fromTo("#btn7", {backgroundPosition: "-137px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  timelineBtn8 = new TimelineMax({paused:true});
timelineBtn8.fromTo("#btn8", {backgroundPosition: "-58px 0px"}, {backgroundPosition: "0px 0px", duration:.3});
}
reload();

  var timelineSlo = new TimelineMax({paused:true});
  timelineSlo.fromTo("#slo", {backgroundPosition: "-77px 0px"}, {backgroundPosition: "0px 0px", duration:.3});
  
  var timelineGer = new TimelineMax({paused:true});
  timelineGer.fromTo("#ger", {backgroundPosition: "-54px 0px"}, {backgroundPosition: "0px 0px", duration:.3});
  
  var timelineHrv = new TimelineMax({paused:true});
  timelineHrv.fromTo("#hrv", {backgroundPosition: "-53px 0px"}, {backgroundPosition: "0px 0px", duration:.3});
  
  var timelineIta = new TimelineMax({paused:true});
  timelineIta.fromTo("#ita", {backgroundPosition: "-48px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  var timelineSrb = new TimelineMax({paused:true});
  timelineSrb.fromTo("#srb", {backgroundPosition: "-42px 0px"}, {backgroundPosition: "0px 0px", duration:.3});

  var timelineEng = new TimelineMax({paused:true});
  timelineEng.fromTo("#eng", {backgroundPosition: "-49px 0px"}, {backgroundPosition: "0px 0px", duration:.3});


//    ^^^
//    |||
// Page loading ---------------------------------------------------------------------



window.onresize = function () {
  document.getElementById("mainDiv").style['margin-left'] = window.innerWidth / 2 - 409 + "px";
  document.getElementById("bodyId").style['background-position'] = window.innerWidth / 2 - 409 + "px 0px";
};


// pdf animation functions
function pdfAnimacija1() {
  t1.play();
}
function pdfAnimacijaOut1() {
  t1.reverse();
}


function pdfAnimacija2() {
  t2.play();
}
function pdfAnimacijaOut2() {
  t2.reverse();
}


function pdfAnimacija3() {
  t3.play()
}
function pdfAnimacijaOut3() {
  t3.reverse();
}


//underline animation functions
function underlineBtn1In() {
    timelineBtn1.play();
}

function underlineBtn1Out() {
    timelineBtn1.reverse();
}


function underlineBtn2In() {
    timelineBtn2.play();
}

function underlineBtn2Out() {
    timelineBtn2.reverse();
}


function underlineBtn3In() {
    timelineBtn3.play();
}

function underlineBtn3Out() {
    timelineBtn3.reverse();
}


function underlineBtn4In() {
    timelineBtn4.play();
}

function underlineBtn4Out() {
    timelineBtn4.reverse();
}


function underlineBtn5In() {
    timelineBtn5.play();
}

function underlineBtn5Out() {
    timelineBtn5.reverse();
}


function underlineBtn6In() {
    timelineBtn6.play();
}

function underlineBtn6Out() {
    timelineBtn6.reverse();
}


function underlineBtn7In() {
    timelineBtn7.play();
}

function underlineBtn7Out() {
    timelineBtn7.reverse();
}


function underlineBtn8In() {
    timelineBtn8.play();
}

function underlineBtn8Out() {
    timelineBtn8.reverse();
}


function underlineSloIn() {
    timelineSlo.play();
}

function underlineSloOut() {
    timelineSlo.reverse();
}


function underlineGerIn() {
    timelineGer.play();
}

function underlineGerOut() {
    timelineGer.reverse();
}


function underlineHrvIn() {
    timelineHrv.play();
}

function underlineHrvOut() {
    timelineHrv.reverse();
}


function underlineItaIn() {
    timelineIta.play();
}

function underlineItaOut() {
    timelineIta.reverse();
}


function underlineSrbIn() {
    timelineSrb.play();
}

function underlineSrbOut() {
    timelineSrb.reverse();
}


function underlineEngIn() {
    timelineEng.play();
}

function underlineEngOut() {
    timelineEng.reverse();
}



function showDropdown1() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
      <div id="dropdownDivId" style="background-color:#333333" class="rounded_top rounded_bot paddingTop position"> \
      <div id="dropdownId7"><button onmouseenter="underlineBtn1In()" onmouseleave="underlineBtn1Out()" target="_self" class="button" onclick="functionDoma()"><a id="btn1">Doma</a> </button></div> \
      <div id="dropdownId8"><button onmouseenter="underlineBtn2In()" onmouseleave="underlineBtn2Out()" target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="../images/arrowhead.png" height="10" border="0"> <a id="btn2">O podjetju</a></button></div> \
      <div id="dropdownId5"><button onmouseenter="underlineBtn4In()" onmouseleave="underlineBtn4Out()" target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="../images/arrowhead.png" height="10" border="0"> <a id="btn4">Proizvodi</a></button></div> \
      <div id="dropdownId6"><button onmouseenter="underlineBtn8In()" onmouseleave="underlineBtn8Out()" target="_self" class="button" onclick="functionKontakt()"><a id="btn8">Kontakt</a></button></div> \
      <div class="positionSlikaSide"><img src="../images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div></div>';
      reload();
}


function showDropdown2() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
      <div id="dropdownDivId" style="background-color:#333333" class="rounded_top rounded_bot paddingTop position"> \
      <div id="dropdownId7"><button onmouseenter="underlineBtn1In()" onmouseleave="underlineBtn1Out()" target="_self" class="button" onclick="functionDoma()"><a id="btn1">Doma</a> </button></div> \
      <div id="dropdownId8"><button onmouseenter="underlineBtn2In()" onmouseleave="underlineBtn2Out()" target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="../images/arrowhead.png" height="10" border="0"> <a id="btn2">O podjetju</a></button></div> \
      <div id="dropdownId1"><button onmouseenter="underlineBtn3In()" onmouseleave="underlineBtn3Out()" target="_self" class="button2" onclick="functionGalerija()"><a id="btn3">- galerija</a></button></div> \
      <div id="dropdownId5"><button onmouseenter="underlineBtn4In()" onmouseleave="underlineBtn4Out()" target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="../images/arrowhead.png" height="10" border="0"> <a id="btn4">Proizvodi</a></button></div> \
      <div id="dropdownId6"><button onmouseenter="underlineBtn8In()" onmouseleave="underlineBtn8Out()" target="_self" class="button" onclick="functionKontakt()"><a id="btn8">Kontakt</a></button></div> \
      <div class="positionSlikaSide"><img src="../images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div></div>';
      reload();
}

function showDropdown3() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
    <div id="dropdownDivId" style="background-color:#333333" class="rounded_top rounded_bot paddingTop position"> \
    <div id="dropdownId7"><button onmouseenter="underlineBtn1In()" onmouseleave="underlineBtn1Out()" target="_self" class="button" onclick="functionDoma()"><a id="btn1">Doma</a> </button></div> \
    <div id="dropdownId8"><button onmouseenter="underlineBtn2In()" onmouseleave="underlineBtn2Out()" target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="../images/arrowhead.png" height="10" border="0"> <a id="btn2">O podjetju</a></button></div> \
    <div id="dropdownId5"><button onmouseenter="underlineBtn4In()" onmouseleave="underlineBtn4Out()" target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="../images/arrowhead.png" height="10" border="0"> <a id="btn4">Proizvodi</a></button></div> \
    <div id="dropdownId2"><button onmouseenter="underlineBtn5In()" onmouseleave="underlineBtn5Out()" target="_self" class="button2" onclick="functionPVC()"><a id="btn5">- Kapice PVC</a></button></div> \
    <div id="dropdownId3"><button onmouseenter="underlineBtn6In()" onmouseleave="underlineBtn6Out()" target="_self" class="button2" onclick="functionPolilaminat()"><a id="btn6">- Kapice polilaminat za steklenice penin</a></button></div> \
		<div id="dropdownId4"><button onmouseenter="underlineBtn7In()" onmouseleave="underlineBtn7Out()" target="_self" class="button2" onclick="functionAluminij()"><a id="btn7">- Kapice Aluminij za sodčke</a></button></div> \
    <div id="dropdownId6"><button onmouseenter="underlineBtn8In()" onmouseleave="underlineBtn8Out()" target="_self" class="button" onclick="functionKontakt()"><a id="btn8">Kontakt</a></button></div> \
    <div class="positionSlikaSide"><img src="../images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div></div>';
    reload();
}


function functionDoma() {
  if (stanje == 1 || !animationComplete) {
    errorAnimation("dropdownId7");
    return;
  }
  
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style.overflow = "hidden";
  
  izkljuciDropdown(true, true, 1);
  animacijaOut();
  var time;
  if (stanje == 0) {
    TweenMax.to("#dropdownPlaceholder", .1, {height:600});
    time = 0;
  } else {
    // swipe("dropdownId7");
    TweenMax.to("#dropdownPlaceholder", 1.3, {height:600});
    time = 400;
  }
  
  //prikazi doma
  setTimeout(function(){
    stanje = 1;
    
    //main animacija
    document.getElementById("layer1").style.opacity = 1;
    document.getElementById("layer1").style["pointer-events"] = "auto";
    TweenMax.fromTo(".domaId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".domaId2", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".domaId3", {opacity:0, y:300}, {opacity:1, delay:.6, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".domaId4", {opacity:0, y:300}, {opacity:1, delay:.8, y:0, duration:.5, ease: Power3.easeOut});

     animationComplete = true;

  }, time);
}


function functionPodjetje() {
  if (stanje == 2 || !animationComplete) {
    errorAnimation("dropdownId8");
    return;
  }
  
  // swipe("dropdownId8");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style.overflow = "hidden";
  TweenMax.to("#dropdownPlaceholder", 1, {height:600});

  izkljuciDropdown(false, true, 2);
  animacijaOut();
  //prikazi podjetje
  setTimeout(function(){
    stanje = 2;
    
    //main animacija
    document.getElementById("layer2").style.opacity = 1;
    document.getElementById("layer2").style["pointer-events"] = "auto";
    TweenMax.fromTo(".podjetjeId1", {opacity:0, y:100}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".podjetjeId2", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".podjetjeId3", {opacity:0, y:300}, {opacity:1, delay:.6, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".podjetjeId4", {opacity:0, y:300}, {opacity:1, delay:.8, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".podjetjeId5", {opacity:0, y:300}, {opacity:1, delay:1, y:0, duration:.5, ease: Power3.easeOut});
    
    animationComplete = true;
  }, 400);
}


function functionGalerija() {
  if (stanje == 3 || !animationComplete) {
    errorAnimation("dropdownId1");
    return;
  }
  
  // swipe("dropdownId1");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style["overflow-y"] = "auto";
  
  animacijaOut();
  TweenMax.to("#dropdownPlaceholder", .7, {height:1594});

  
  //prikazi galerijo
  setTimeout(function(){
    stanje = 3;
    
    //main animacija
    document.getElementById("slika1").style.height = "373px";
    document.getElementById("slika2").style.height = "392px";
    document.getElementById("slika3").style.height = "392px";
    document.getElementById("slika4").style.height = "373px";
    document.getElementById("layer3").style.opacity = 1;
    document.getElementById("layer3").style["pointer-events"] = "auto";
    TweenMax.fromTo("#slika1", {opacity:0, y:100, scale:.8}, {opacity:1, delay:0, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo("#slika2", {opacity:0, y:100, scale:.8}, {opacity:1, delay:.2, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo("#slika3", {opacity:0, y:100, scale:.8}, {opacity:1, delay:.2, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo("#slika4", {opacity:0, y:100, scale:.8}, {opacity:1, delay:.2, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    
    setTimeout(function(){
      gsap.from("#slika4", {
        scrollTrigger: {
            trigger: "#slika4",
            start: "-50px bottom",
            toggleActions: "restart none none restart",
            end: "300px bottom",
            scrub: .5
        },
        y: 100,
        opacity: 0,
        scale: 0.9
      });
    
      gsap.from("#slika3", {
        scrollTrigger: {
            trigger: "#slika3",
            start: "-50px bottom",
            toggleActions: "restart none none restart",
            end: "300px bottom",
            scrub: true
        },
        y: 100,
        opacity: 0,
        scale: 0.9
      });
    }, 700);
    
    animationComplete = true;
  }, 600);
}


function functionProizvodi() {
  if (stanje == 4 || !animationComplete) {
    errorAnimation("dropdownId5");
    return;
  }
  // swipe("dropdownId5");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style.overflow = "hidden";
  
  TweenMax.to("#dropdownPlaceholder", .2, {height:710});
  
  setTimeout(function(){
    izkljuciDropdown(true, false, 4);
  },100);
  animacijaOut();
  
  //prikazi proizvode
  setTimeout(function(){
    stanje = 4;
      
    //main animacija
    document.getElementById("proizvodiSlika1").style.height = "192px";
    document.getElementById("layer4").style.opacity = 1;
    document.getElementById("layer4").style["pointer-events"] = "auto";
    TweenMax.fromTo(".proizvodiId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo("#proizvodiSlika1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".proizvodiId2", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".proizvodiId3", {opacity:0, y:300}, {opacity:1, delay:.6, y:0, duration:.5, ease: Power3.easeOut});

    animationComplete = true;

  }, 400);
}


function functionPVC() {
  if (stanje == 5 || !animationComplete) {
    errorAnimation("dropdownId2");
    return;
  }

  // swipe("dropdownId2");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style.overflow = "hidden";
  
  TweenMax.to("#dropdownPlaceholder", 1, {height:600});
  
  animacijaOut();
  
  //prikazi PVC
  setTimeout(function(){
    stanje = 5;
      
    //main animacija
    document.getElementById("layer5").style.opacity = 1;
    document.getElementById("layer5").style["pointer-events"] = "auto";
    TweenMax.fromTo(".pvcId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".pvcId2", {opacity:0, y:300}, {opacity:1, delay:.3, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".pvcId3", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".pvcId4", {opacity:0}, {opacity:1, delay:.5, duration:1, ease: Power3.easeOut});
    
    animationComplete = true;
    
  }, 400);
}


function functionPolilaminat() {
  if (stanje == 6 || !animationComplete) {
    errorAnimation("dropdownId3");
    return;
  }
  // swipe("dropdownId3");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style.overflow = "hidden";
  
  TweenMax.to("#dropdownPlaceholder", 1, {height:600});
  
  animacijaOut();
  
  //prikazi Polialuminat
  setTimeout(function(){
    stanje = 6;
    
    //main animacija
    document.getElementById("layer6").style.opacity = 1;
    document.getElementById("layer6").style["pointer-events"] = "auto";
    TweenMax.fromTo(".polilaminatId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".polilaminatId2", {opacity:0, y:300}, {opacity:1, delay:.3, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".polilaminatId3", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".polilaminatId4", {opacity:0}, {opacity:1, delay:.5, duration:1, ease: Power3.easeOut});

     animationComplete = true;

  }, 400);
}


function functionAluminij() {
  if (stanje == 7 || !animationComplete) {
    errorAnimation("dropdownId4");
    return;
  }
  // swipe("dropdownId4");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style.overflow = "hidden";
  
  TweenMax.to("#dropdownPlaceholder", 1, {height:600});
  
  animacijaOut();
  
  //prikazi Aluminij
  setTimeout(function(){
    stanje = 7;
    
    //main animacija
    document.getElementById("layer7").style.opacity = 1;
    document.getElementById("layer7").style["pointer-events"] = "auto";
    TweenMax.fromTo(".aluminijId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".aluminijId2", {opacity:0, y:300}, {opacity:1, delay:.3, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".aluminijId3", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".aluminijId4", {opacity:0}, {opacity:1, delay:.5, duration:1, ease: Power3.easeOut});
    
     animationComplete = true;

  }, 400);
}


function functionKontakt() {
  if (stanje == 8 || !animationComplete) {
    errorAnimation("dropdownId6");
    return;
  }
  // swipe("dropdownId6");
  animationComplete = false;
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  document.getElementById("bodyId").style["overflow-y"] = "auto";
  
  TweenMax.to("#dropdownPlaceholder", .3, {height:868});

  izkljuciDropdown(true, true, 8);
  animacijaOut();
  
  //prikazi Kontakt
  setTimeout(function(){
    stanje = 8;
    
    //main animacija
    document.getElementById("kontaktId1").style.height = "267px";
    document.getElementById("layer8").style.opacity = 1;
    document.getElementById("layer8").style["pointer-events"] = "auto";
    TweenMax.fromTo("#kontaktId1", {opacity:0, y:100, scale:.9}, {opacity:1, delay:0, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo(".kontaktId2", {opacity:0, y:100}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".kontaktId3", {opacity:0, y:100}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.from("#dropdownPlaceholder", .5, {delay:.4, height:942, ease: Power3.easeOut});

    animationComplete = true;

  }, 400);
}


function izkljuciDropdown(prvi, drugi, stFunkcije) {

  if (boolPodjetje && prvi) {
    boolPodjetje = false;
    TweenMax.to("#arrowhead1", .3, {rotate:0, ease: Power3.easeOut});
    TweenMax.to("#dropdownId1", .5, {opacity:0, y:-16, ease: Power3.easeOut});
    TweenMax.to("#dropdownId6", .3, {y:-16, delay:.1, ease: Power3.easeOut});
    TweenMax.to("#dropdownId5", .3, {y:-16, delay:.1, ease: Power3.easeOut});
    if (!drugi) {
      setTimeout(function(){
        animacijaDropdown(2)}
        ,350);
    } else {
      setTimeout(function () {
        showDropdown1();
      }, 350);
    }
    
  } else if (boolProizvodi && drugi) {
    boolProizvodi = false;
    TweenMax.to("#arrowhead2", .3, {rotate:0, ease: Power3.easeOut});
    TweenMax.to("#dropdownId2", .7, {y:-60, ease: Power3.easeOut});
    TweenMax.to("#dropdownId3", .7, {y:-60, ease: Power3.easeOut});
    TweenMax.to("#dropdownId4", .7, {y:-60, ease: Power3.easeOut});
    TweenMax.to("#dropdownId2", .1, {opacity:0, delay:0});
    TweenMax.to("#dropdownId3", .1, {opacity:0, delay:.1});
    TweenMax.to("#dropdownId4", .1, {opacity:0, delay:.2});
    TweenMax.to("#dropdownId6", .7, {y:-48, ease: Power3.easeOut});
    if (!prvi) {
      setTimeout(function(){
        animacijaDropdown(1)
      }, 400);
    } else {
      setTimeout(function () {
        showDropdown1();
      }, 400);
    }
    
    
  } else if (prvi && !drugi) {
    animacijaDropdown(2);
  } else if (drugi && !prvi) {
    animacijaDropdown(1);
  }
}

function animacijaDropdown (index) {
  if (index == 1 && !boolPodjetje) {
    boolPodjetje = true;
    showDropdown2();
    
    TweenMax.to("#arrowhead1", .3, {rotate:90, ease: Power3.easeOut});
    TweenMax.from("#dropdownId6", .3, {y:-16, ease: Power3.easeOut});
    TweenMax.from("#dropdownId5", .3, {y:-16, ease: Power3.easeOut});
    TweenMax.from("#dropdownId1", .5, {opacity:0, y:-24, ease: Power3.easeOut});
    
  } else if (index == 2 && !boolProizvodi) {
    boolProizvodi = true;
    showDropdown3();
    
    TweenMax.to("#arrowhead2", .3, {rotate:90, ease: Power3.easeOut});
    TweenMax.from("#dropdownId6", .7, {y:-48, ease: Power3.easeOut});
    TweenMax.from("#dropdownId2", .7, {y:-60, ease: Power3.easeOut});
    TweenMax.from("#dropdownId3", .7, {y:-60, ease: Power3.easeOut});
    TweenMax.from("#dropdownId4", .7, {y:-60, ease: Power3.easeOut});
    TweenMax.from("#dropdownId2", .1, {opacity:0, delay:.2});
    TweenMax.from("#dropdownId3", .1, {opacity:0, delay:.1});
    TweenMax.from("#dropdownId4", .1, {opacity:0, delay:0});
  }
}

function swipe(id) {
  TweenMax.to("#" + id, .5, {backgroundPosition: 432});
  document.getElementById(id).style.backgroundPosition = 0;
}

function animacijaOut() {
  //trajanje animacije: 0.5-0.6s
  switch (stanje) {
    case 0:
      break;
    case 1:
      TweenMax.to(".domaId1", .2, {opacity:0, y:-300, delay:0, ease: Power3.easeIn});
      TweenMax.to(".domaId2", .2, {opacity:0, y:-300, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".domaId3", .2, {opacity:0, y:-300, delay:.2, ease: Power3.easeIn});
      TweenMax.to(".domaId4", .2, {opacity:0, y:-300, delay:.3, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer1").style.opacity = 0;
        document.getElementById("layer1").style["pointer-events"] = "none";
      },600);
      break;
    case 2:
      TweenMax.to(".podjetjeId1", .2, {opacity:0, y:-100, delay:0});
      TweenMax.to(".podjetjeId2", .2, {opacity:0, y:-300, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".podjetjeId3", .2, {opacity:0, y:-300, delay:.2, ease: Power3.easeIn});
      TweenMax.to(".podjetjeId4", .2, {opacity:0, y:-300, delay:.3, ease: Power3.easeIn});
      TweenMax.to(".podjetjeId5", .2, {opacity:0, y:-300, delay:.4, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer2").style.opacity = 0;
        document.getElementById("layer2").style["pointer-events"] = "none";
      },600);
      break;
    case 3:
      TweenMax.to("#slika1", .3, {opacity:0, y:-100, delay:0, scale:.9});
      TweenMax.to("#slika2", .3, {opacity:0, y:-100, delay:.2, scale:.9});
      TweenMax.to("#slika3", .3, {opacity:0, y:-100, delay:.3, scale:.9});
      TweenMax.to("#slika4", .3, {opacity:0, y:-100, delay:.3, scale:.9});
      setTimeout(function(){
        document.getElementById("layer3").style.opacity = 0;
        document.getElementById("layer3").style["pointer-events"] = "none";
        document.getElementById("slika1").style.height = "1px";
        document.getElementById("slika2").style.height = "1px";
        document.getElementById("slika3").style.height = "1px";
        document.getElementById("slika4").style.height = "1px";
      },600);
      break;
    case 4:
      TweenMax.to(".proizvodiId1", .3, {opacity:0, y:-100, delay:0, ease: Power3.easeIn});
      TweenMax.to("#proizvodiSlika1", .3, {opacity:0, y:-100, delay:0, ease: Power3.easeIn});
      TweenMax.to(".proizvodiId2", .3, {opacity:0, y:-100, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".proizvodiId3", .3, {opacity:0, y:-100, delay:.2, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer4").style.opacity = 0;
        document.getElementById("layer4").style["pointer-events"] = "none";
        document.getElementById("proizvodiSlika1").style.height = "1px";
      },600);
      break;
    case 5:
      TweenMax.to(".pvcId1", .3, {opacity:0, y:-100, delay:0, ease: Power3.easeIn});
      TweenMax.to(".pvcId2", .3, {opacity:0, y:-100, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".pvcId3", .3, {opacity:0, y:-100, delay:.2, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer5").style.opacity = 0;
        document.getElementById("layer5").style["pointer-events"] = "none";
      },600);
      break;
    case 6:
      TweenMax.to(".polilaminatId1", .3, {opacity:0, y:-100, delay:0, ease: Power3.easeIn});
      TweenMax.to(".polilaminatId2", .3, {opacity:0, y:-100, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".polilaminatId3", .3, {opacity:0, y:-100, delay:.2, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer6").style.opacity = 0;
        document.getElementById("layer6").style["pointer-events"] = "none";
      },600);
      break;
    case 7:
      TweenMax.to(".aluminijId1", .3, {opacity:0, y:-100, delay:0, ease: Power3.easeIn});
      TweenMax.to(".aluminijId2", .3, {opacity:0, y:-100, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".aluminijId3", .3, {opacity:0, y:-100, delay:.2, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer7").style.opacity = 0;
        document.getElementById("layer7").style["pointer-events"] = "none";
      },600);
      break;
    case 8:
      TweenMax.to("#kontaktId1", .3, {opacity:0, y:-100, delay:.1, scale:.9, ease: Power3.easeIn});
      TweenMax.to(".kontaktId2", .3, {opacity:0, y:-100, delay:.2, ease: Power3.easeIn});
      TweenMax.to(".kontaktId3", .3, {opacity:0, y:-100, delay:.3, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer8").style.opacity = 0;
        document.getElementById("layer8").style["pointer-events"] = "none";
        document.getElementById("kontaktId1").style.height = "1px";
      },600);
      break;
  }
}

function errorAnimation(idElementa) {
  TweenMax.to("#" + idElementa, .05, {x:-5});
  TweenMax.to("#" + idElementa, .1, {x:5, delay:.05});
  TweenMax.to("#" + idElementa, .05, {x:0, delay:.15});
}