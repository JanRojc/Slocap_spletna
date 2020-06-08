var boolPodjetje = false;
var boolProizvodi = false;
var stanje = 0;
var height;
// Doma-1, Podjetje-2, Galerija-3, Proizvodi-4, PVC-5, Polialuminat-6, Aluminij-7, Kontakt-8
//scroll enable: galerija, proizvodi, kontakt
//scroll disable: podjetje

functionDoma();





function pdfAnimacija1() {
  gsap.to("#pdf1", .2, {y:-5, rotateY:"+=360",opacity:.2});
  gsap.to("#pdf1", .2, {y:5, opacity:1, delay:.2});
  gsap.set("#pdf1", 0, {y:-5, rotateY:0,opacity:.2});
}
function pdfAnimacija2() {
  TweenMax.to("#pdf2", .2, {y:-5, opacity:.2});
  TweenMax.to("#pdf2", .2, {y:5, opacity:1, delay:.2});
}
function pdfAnimacija3() {
  TweenMax.to("#pdf3", .2, {y:-5, opacity:.2});
  TweenMax.to("#pdf3", .2, {y:5, opacity:1, delay:.2});
}

window.onresize = function () {
  document.getElementById("mainDiv").style['margin-left'] = window.innerWidth / 2 - 409 + "px";
  document.getElementById("bodyId").style['background-position'] = window.innerWidth / 2 - 409 + "px 0px";
}

function prikaziDropdown1() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
      <div id="divId" style="height:'+height+'px; background-color:#333333" class="rounded_top rounded_bot paddingTop position"> \
      <div id="dropdownId7"><button target="_self" class="button" onclick="functionDoma()">Doma</button></div> \
      <div id="dropdownId8"><button target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="images/arrowhead.png" height="10" border="0"> O podjetju</button></div> \
      <div id="dropdownId5"><button target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="images/arrowhead.png" height="10" border="0"> Proizvodi</button></div> \
      <div id="dropdownId6"><button target="_self" class="button" onclick="functionKontakt()">Kontakt</button></div> \
      <div class="positionSlikaSide"><img src="images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div></div>';
}


function prikaziDropdown2() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
      <div id="divId" style="height:'+height+'px; background-color:#333333" class="rounded_top rounded_bot paddingTop position"> \
      <div id="dropdownId7"><button target="_self" class="button" onclick="functionDoma()">Doma</button></div> \
      <div id="dropdownId8"><button target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="images/arrowhead.png" height="10" border="0"> O podjetju</button></div> \
      <div id="dropdownId1"><button target="_self" class="button2" onclick="functionGalerija()">- galerija</button></div> \
      <div id="dropdownId5"><button target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="images/arrowhead.png" height="10" border="0"> Proizvodi</button></div> \
      <div id="dropdownId6"><button target="_self" class="button" onclick="functionKontakt()">Kontakt</button></div> \
      <div class="positionSlikaSide"><img src="images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div></div>';
}


function prikaziDropdown3() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
    <div id="divId" style="height:'+height+'px; background-color:#333333" class="rounded_top rounded_bot paddingTop position"> \
    <div id="dropdownId7"><button target="_self" class="button" onclick="functionDoma()">Doma</button></div> \
    <div id="dropdownId8"><button target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="images/arrowhead.png" height="10" border="0"> O podjetju</button></div> \
    <div id="dropdownId5"><button target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="images/arrowhead.png" height="10" border="0"> Proizvodi</button></div> \
    <div id="dropdownId2"><button target="_self" class="button2" onclick="functionPVC()">- Kapice PVC</button></div> \
    <div id="dropdownId3"><button target="_self" class="button2" onclick="functionPolilaminat()">- Kapice polilaminat za steklenice penin</button></div> \
		<div id="dropdownId4"><button target="_self" class="button2" onclick="functionAluminij()">- Kapice Aluminij za sodčke</button></div> \
    <div id="dropdownId6"><button target="_self" class="button" onclick="functionKontakt()">Kontakt</button></div> \
    <div class="positionSlikaSide"><img src="images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div></div>';
}


function functionDoma() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Power3.easeOut});
  izkljuciDropdown(true, true, 1);
  animacijaOut();
  var time;
  if (stanje == 0) {
    time = 0;
  } else {
    time = 600;
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
  }, time);
}


function functionPodjetje() {
  height = 600;
  document.getElementById("bodyId").style.overflow = "hidden";
  TweenMax.to("#divId", .6, {height:600, ease: Power3.easeOut});
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
    setTimeout(function(){
      document.getElementById("bodyId").style.overflow = "auto";
    }, 1500);
  }, 600);
}


function functionGalerija() {
  TweenMax.to(window, .2, {scrollTo:{y:0}});
  height = 1607;
  animacijaOut();
  TweenMax.to("#divId", .7, {height:1607, ease: Power3.easeIn});
  
  //prikazi galerijo
  setTimeout(function(){
    stanje = 3;
    
    //main animacija
    document.getElementById("slika1").style.height = "381px";
    document.getElementById("slika2").style.height = "400px";
    document.getElementById("slika3").style.height = "400px";
    document.getElementById("slika4").style.height = "381px";
    document.getElementById("layer3").style.opacity = 1;
    document.getElementById("layer3").style["pointer-events"] = "auto";
    TweenMax.fromTo("#slika1", {opacity:0, y:100, scale:.9}, {opacity:1, delay:0, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo("#slika2", {opacity:0, y:100, scale:.9}, {opacity:1, delay:.2, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo("#slika3", {opacity:0, y:100, scale:.9}, {opacity:1, delay:.2, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    TweenMax.fromTo("#slika4", {opacity:0, y:100, scale:.9}, {opacity:1, delay:.2, y:0, duration:.5, scale:1, ease: Power3.easeOut});
    
    setTimeout(function(){
      gsap.from("#slika4", {
        scrollTrigger: {
            trigger: "#slika4",
            start: "-50px bottom",
            toggleActions: "restart none none restart",
            end: "200px bottom",
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
            end: "200px bottom",
            scrub: true
        },
        y: 100,
        opacity: 0,
        scale: 0.9
      });
    }, 700);
    
  }, 600);
}


function functionProizvodi() {
  height = 767.5;
  TweenMax.to("#divId", .3, {height:767.5});
  setTimeout(function(){
    izkljuciDropdown(true, false, 4);
  },100);
  animacijaOut();
  
  //prikazi proizvode
  setTimeout(function(){
    stanje = 4;
      
    //main animacija
    document.getElementById("proizvodiSlika1").style.height = "197px";
    document.getElementById("layer4").style.opacity = 1;
    document.getElementById("layer4").style["pointer-events"] = "auto";
    TweenMax.fromTo(".proizvodiId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo("#proizvodiSlika1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".proizvodiId2", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".proizvodiId3", {opacity:0, y:300}, {opacity:1, delay:.6, y:0, duration:.5, ease: Power3.easeOut});
  }, 600);
  //}, 300);
}


function functionPVC() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Power3.easeOut});
  animacijaOut();
  
  //prikazi PVC
  setTimeout(function(){
    
    stanje = 5;
      
    //main animacija
    document.getElementById("layer5").style.opacity = 1;
    document.getElementById("layer5").style["pointer-events"] = "auto";
    TweenMax.fromTo(".pvcId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".pvcId2", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".pvcId3", {opacity:0, y:300}, {opacity:1, delay:.6, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".pvcId4", {opacity:0}, {opacity:1, delay:.8, duration:1, ease: Power3.easeOut});
  }, 600);
}


function functionPolilaminat() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Power3.easeOut});
  animacijaOut();
  
  //prikazi Polialuminat
  setTimeout(function(){
    
    stanje = 6;
    
    //main animacija
    document.getElementById("layer6").style.opacity = 1;
    document.getElementById("layer6").style["pointer-events"] = "auto";
    TweenMax.fromTo(".polilaminatId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".polilaminatId2", {opacity:0, y:300}, {opacity:1, delay:.4, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".polilaminatId3", {opacity:0, y:300}, {opacity:1, delay:.6, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".polilaminatId4", {opacity:0}, {opacity:1, delay:.8, duration:1, ease: Power3.easeOut});
  }, 600);
}


function functionAluminij() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Power3.easeOut});
  animacijaOut();
  
  //prikazi Aluminij
  setTimeout(function(){
    
    stanje = 7;
    
    //main animacija
    document.getElementById("layer7").style.opacity = 1;
    document.getElementById("layer7").style["pointer-events"] = "auto";
    TweenMax.fromTo(".aluminijId1", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".aluminijId2", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".aluminijId3", {opacity:0, y:300}, {opacity:1, delay:.2, y:0, duration:.5, ease: Power3.easeOut});
    TweenMax.fromTo(".aluminijId4", {opacity:0}, {opacity:1, delay:.8, duration:1, ease: Power3.easeOut});
  }, 600);
}


function functionKontakt() {
  height = 842;
  TweenMax.to("#divId", .3, {height:842, ease: Power3.easeIn});
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
  }, 600);
}


function izkljuciDropdown(prvi, drugi, stFunkcije) {

  if (boolPodjetje && prvi) {
    boolPodjetje = false;
    TweenMax.to("#arrowhead1", .3, {rotate:0, ease: Power3.easeOut});
    TweenMax.to("#dropdownId1", 1, {opacity:0, y:-16, ease: Power3.easeOut});
    TweenMax.to("#dropdownId6", .3, {y:-16, delay:.1, ease: Power3.easeOut});
    TweenMax.to("#dropdownId5", .3, {y:-16, delay:.1, ease: Power3.easeOut});
    if (!drugi) {
      setTimeout(function(){
        animacijaDropdown(2)}
        ,350);
    } else {
      setTimeout(function(){
        prikaziDropdown1()}
        ,350);
    }
  } else if (boolProizvodi && drugi) {
    boolProizvodi = false;
    TweenMax.to("#arrowhead2", .3, {rotate:0, ease: Power3.easeOut});
    TweenMax.to("#dropdownId2", .3, {opacity:0, y:-10, ease: Power3.easeOut});
    TweenMax.to("#dropdownId3", .3, {opacity:0, y:-24, delay:.05, ease: Power3.easeOut});
    TweenMax.to("#dropdownId4", .3, {opacity:0, y:-32, delay:.1, ease: Power3.easeOut});
    TweenMax.to("#dropdownId6", .3, {y:-48, delay:.15, ease: Power3.easeOut});
    if (!prvi) {
      setTimeout(function(){
        animacijaDropdown(1)
      }, 400);
    } else {
      setTimeout(function(){
        prikaziDropdown1()}
        ,400);
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
    prikaziDropdown2();
    TweenMax.to("#arrowhead1", .3, {rotate:90, ease: Power3.easeOut});
    TweenMax.from("#dropdownId6", .3, {opacity:0, y:-16, ease: Power3.easeOut});
    TweenMax.from("#dropdownId5", .3, {opacity:0, y:-16, ease: Power3.easeOut});
    TweenMax.from("#dropdownId1", 1, {opacity:0, y:-24, ease: Power3.easeOut});
    
  } else if (index == 2 && !boolProizvodi) {
    boolProizvodi = true;
    prikaziDropdown3();
    TweenMax.to("#arrowhead2", .3, {rotate:90, ease: Power3.easeOut});
    TweenMax.from("#dropdownId6", .3, {opacity:0, y:-48, ease: Power3.easeOut});
    TweenMax.from("#dropdownId2", 1, {opacity:0, y:-24, ease: Power3.easeOut});
    TweenMax.from("#dropdownId3", 1, {opacity:0, y:-40, delay:.1, ease: Power3.easeOut});
    TweenMax.from("#dropdownId4", 1, {opacity:0, y:-56, delay:.2, ease: Power3.easeOut});
  }
}

// function swipe(id) {
//   TweenMax.to("#" + id, .5, {'backgroundPosition': -200});
//   document.getElementById(id).style.backgroundPosition = 0;
// }

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
        document.getElementById("slika1").style.height = "140px";
        document.getElementById("slika2").style.height = "140px";
        document.getElementById("slika3").style.height = "140px";
        document.getElementById("slika4").style.height = "140px";
      },600);
      break;
    case 4:
      TweenMax.to(".proizvodiId1", .3, {opacity:0, y:-300, delay:0, ease: Power3.easeIn});
      TweenMax.to("#proizvodiSlika1", .3, {opacity:0, y:-300, delay:0, ease: Power3.easeIn});
      TweenMax.to(".proizvodiId2", .3, {opacity:0, y:-300, delay:.1, ease: Power3.easeIn});
      TweenMax.to(".proizvodiId3", .3, {opacity:0, y:-300, delay:.2, ease: Power3.easeIn});
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
      TweenMax.to("#kontaktId1", .3, {opacity:0, y:-100, delay:0, scale:.9, ease: Power3.easeIn});
      TweenMax.to(".kontaktId2", .3, {opacity:0, y:-100, delay:.15, ease: Power3.easeIn});
      TweenMax.to(".kontaktId3", .3, {opacity:0, y:-100, delay:.3, ease: Power3.easeIn});
      setTimeout(function(){
        document.getElementById("layer8").style.opacity = 0;
        document.getElementById("layer8").style["pointer-events"] = "none";
        document.getElementById("kontaktId1").style.height = "1px";
      },600);
      break;
    
  }
}