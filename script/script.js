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
  document.getElementById("test").style['margin-left'] = window.innerWidth / 2 - 409 + "px";
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
  TweenMax.to("#divId", .6, {height:600, ease: Expo.easeOut});
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
    document.getElementById("mainPlaceholder").innerHTML = '<span style="display:inline-block" class="domaId1 style7 paddingTop">Dobrodošli!</span><br /><br /> \
      <span style="display:inline-block" class="domaId2 style5">Prišli ste na našo spletno stran, kjer si lahko poiščete marsikaj v zvezi z našim podjetjem. </span><br /><br /> \
      <span style="display:inline-block" class="domaId3 style5">Na strani  s proizvodi  lahko preverite, kaj vse vam nudimo. Na strani o podjetju je predstavljena</span><br /> \
      <span style="display:inline-block" class="domaId3 style5">kratka zgodovina našega podjetja in od kje prihajamo. Na zemljevidu  si lahko ogledate, kje točno se</span><br /> \
      <span style="display:inline-block" class="domaId3 style5">nahajamo, lahko pa si tudi poiščete pot do nas preko našega interaktivnega zemljevida.</span><br /><br /> \
      <span style="display:inline-block" class="domaId4 style5">Želimo vam čim bolj prijetno brskanje po naših straneh in  dobro poslovno sodelovanje v prihodnosti.</span>';
    stanje = 1;
    
    //main animacija
    TweenMax.from(".domaId1", .5, {opacity:0, y:300, delay:.2, ease: Expo.easeOut});
    TweenMax.from(".domaId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".domaId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
    TweenMax.from(".domaId4", .5, {opacity:0, y:300, delay:.8, ease: Expo.easeOut});
  }, time);
}


function functionPodjetje() {
  height = 600;
  document.getElementById("bodyId").style.overflow = "hidden";
  TweenMax.to("#divId", .6, {height:600, ease: Expo.easeOut});
  izkljuciDropdown(false, true, 2);
  animacijaOut();
  //prikazi podjetje
  setTimeout(function(){
    document.getElementById("mainPlaceholder").innerHTML = '<img src="images/podjetje_slocap_b2.jpg" width="588" height="267" border="0" class="rounded_top rounded_bot podjetjeId1"/><br /> \
      <p class="paddingTop podjetjeId2">Začetek podjetja Slocap d.o.o. sega v leto 1992, kjer je na začetni lokaciji v Sežani pričelo z izdelavo PVC kapic. Iz leta v leto se je podjetje razvijalo, širilo svojo proizvodnjo in trg.<p/> \
      <p class="paddingTop podjetjeId3">Leta 2007 se je podjetje Slocap preselilo v nove proizvodne prostore na novi lokaciji v Sežani. Pri tem je tudi svojo ponudbo razširilo na izdelavo polilaminatnih kapsulonov za steklenice penin, aluminijastih in pvc pokrovčkov za inox in steklene sodčke.<p/> \
      <p class="paddingTop podjetjeId4">Glavna načela podjetja so vedno bila zagotavljanje  kvalitete lastnega proizvoda, prilagodljivosti do končnega porabnika - kupca, minimalni dobavni roki, možna izdelava manjših količin in svetovanje kupcem pri naročanju proizvodov.<p/> \
      <p class="paddingTop podjetjeId5">Za zagotavljanje visoke kvalitete svojih proizvodov podjetje uporablja samo materiale priznanih svetovnih proizvajalcev. Kupce proizvodov Slocap najdemo po vsej Evropi in po državah bivše Jugoslavije.</p>';
    stanje = 2;
    
    //main animacija
    TweenMax.from(".podjetjeId1", .5, {scale:.9, opacity:0, y:100, delay:.2});
    TweenMax.from(".podjetjeId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".podjetjeId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
    TweenMax.from(".podjetjeId4", .5, {opacity:0, y:300, delay:.8, ease: Expo.easeOut});
    TweenMax.from(".podjetjeId5", .5, {opacity:0, y:300, delay:1, ease: Expo.easeOut});
    setTimeout(function(){
      document.getElementById("bodyId").style.overflow = "auto";
    }, 1500);
  }, 600);
}


function functionGalerija() {
  height = 1607;
  animacijaOut();
  TweenMax.to("#divId", .7, {height:1607, ease: Expo.easeIn});
  
  //prikazi galerijo
  setTimeout(function(){
    document.getElementById("mainPlaceholder").innerHTML = '<img src="images/podjetje01.jpg" width="100%" height="381" class="rounded_top slika1" /><br /><br /> \
        <img class="slika2" src="images/podjetje02.jpg" width="100%" height="400" /><br /><br /> \
        <img class="slika3" src="images/podjetje03.jpg" width="100%" height="400" /><br /><br /> \
        <img src="images/podjetje04.jpg" width="100%" height="381" class="rounded_bot slika4"/>';
    stanje = 3;
    
    //main animacija
    TweenMax.from(".slika1", .5, {opacity:0, y:100, delay:.3, ease: Expo.easeOut});
    TweenMax.from(".slika2", .5, {opacity:0, y:100, delay:.4, ease: Expo.easeOut});

    
    gsap.from(".slika4", {
      scrollTrigger: {
          trigger: ".slika4",
          start: "-50px bottom",
          toggleActions: "restart none none restart",
          end: "200px bottom",
          scrub: .5
      },
      y: 100,
      opacity: 0,
      scale: 0.9
    });
  
    gsap.from(".slika3", {
      scrollTrigger: {
          trigger: ".slika3",
          start: "-50px bottom",
          toggleActions: "restart none none restart",
          end: "200px bottom",
          scrub: true
      },
      y: 100,
      opacity: 0,
      scale: 0.9
    });
    
    
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
    document.getElementById("mainPlaceholder").innerHTML = '<button target="_self" class="button proizvodiId1 paddingTop" onclick="functionPVC()">Kapice PVC</button><br /> \
        <span class="style8"><br /> \
      </span><button target="_self" class="button3" onclick="functionPVC()"><img src="images/slocap_kapice.jpg" alt="Kapice PVC" border="0" class="proizvodiId1 rounded_top rounded_bot"/></button><br /><br /> \
      <span><button target="_self" class="button proizvodiId2" onclick="functionPolilaminat()">Kapice polilaminat za steklenice penin</button></span><br /><br /> \
      <button target="_self" class="button3" onclick="functionPolilaminat()"><img src="images/slocap_kapsuloni.jpg" alt="Kapice polilaminat za steklenice penin" border="0" class="proizvodiId2 rounded_top rounded_bot"/></button><br /><br /> \
      <span><button target="_self" class="button proizvodiId3" onclick="functionAluminij()">Kapice Aluminij za sodčke</button></span><br /><br /> \
      <button target="_self" class="button3" onclick="functionAluminij()"><img src="images/slocap_kalote.jpg" alt="Kapice Alumini za sodčke" border="0" class="proizvodiId3 rounded_top rounded_bot"/></button>';
    stanje = 4;
      
    //main animacija
    TweenMax.from(".proizvodiId1", .5, {opacity:0, y:300, delay:.2, ease: Expo.easeOut});
    TweenMax.from(".proizvodiId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".proizvodiId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
  }, 600);
  //}, 300);
}


function functionPVC() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Expo.easeOut});
  animacijaOut();
  
  //prikazi PVC
  setTimeout(function(){
    document.getElementById("mainPlaceholder").innerHTML = '<span style="display:inline-block" target="_self" class="pvcId1 style8 paddingTop">Kapice PVC</span><br /><br /> \
      <span style="display:inline-block" class="pvcId2 style5">Tip: Standard (1) in ravna glava (2)</span><br /> \
      <span style="display:inline-block" class="pvcId2 style5">dimenzije premera d : 25mm - 36mm, dolžine h : 30mm - 70 mm</span><br /> \
      <span style="display:inline-block" class="pvcId2 style5">brez odvijalnega trakca,</span><br /> \
      <span style="display:inline-block" class="pvcId2 style5">z vertikalnim odvijalnim trakcem </span><br /> \
      <span style="display:inline-block" class="pvcId3 style5">s horizontalnim odvijalnim trakcem</span><br /> \
      <span style="display:inline-block" class="pvcId3 style5">perforacija</span><br /> \
      <span style="display:inline-block" class="pvcId3 style5">Barve: telo v dveh barvah + 1 x topli tisk</span><br /> \
      <span style="display:inline-block" class="pvcId3 style5">Barve pokrovčka: v dveh barvah + relief - logo<br /><br /> \
      <a href="images/slocap_kapice.pdf" target="_blank" class="pvcId4"><img onmouseover="pdfAnimacija1()" src="images/pdf_icon.png" alt="Prenesi" width="80" height="80" border="0" id="pdf1"/></a></span>';
    stanje = 5;
      
    //main animacija
    TweenMax.from(".pvcId1", .5, {scale:.9, opacity:0, y:300, delay:.2, ease: Expo.easeOut});
    TweenMax.from(".pvcId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".pvcId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
    TweenMax.from(".pvcId4", 1, {opacity:0, delay:.8, ease: Expo.easeOut});
  }, 600);
}


function functionPolilaminat() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Expo.easeOut});
  animacijaOut();
  
  //prikazi Polialuminat
  setTimeout(function(){
    document.getElementById("mainPlaceholder").innerHTML = '<span style="display:inline-block" class="polilaminatId1 style8 paddingTop">Kapice polilaminat za steklenice penin</span><br /><br /> \
      <span style="display:inline-block" class="polilaminatId2 style5">Material: polilaminat 62 um (ostale debeline po naročilu)</span><br /> \
      <span style="display:inline-block" class="polilaminatId2 style5">Dimenzije: glava 34mm dolžine 75mm- 140mm</span><br /> \
      <span style="display:inline-block" class="polilaminatId2 style5">Konus: 1/7, 1/8</span><br /> \
      <span style="display:inline-block" class="polilaminatId2 style5">brez odvijalnega trakca</span><br /> \
      <span style="display:inline-block" class="polilaminatId2 style5">z odvijalnim trakcem</span><br /> \
      <span style="display:inline-block" class="polilaminatId2 style5">z odvijalnim trakcem in 1 x perforacija pod trakcem</span><br /> \
      <span style="display:inline-block" class="polilaminatId3 style5">dvojna perforacija brez trakca</span><br /> \
      <span style="display:inline-block" class="polilaminatId3 style5">okenca</span><br /> \
      <span style="display:inline-block" class="polilaminatId3 style5">relief rombi  v materialu,</span><br /> \
      <span style="display:inline-block" class="polilaminatId3 style5">podaljšana okrogla ovratnica na eni strani.</span><br /> \
      <span style="display:inline-block" class="polilaminatId3 style5">Barve telesa: v dveh barvah + 2 x topli tisk</span><br /> \
      <span style="display:inline-block" class="polilaminatId3 style5">Barva pokrovčka: v dveh barvah + 1 x topli tisk<br /><br /> \
      <a href="images/slocap_kapsuloni.pdf" target="_blank" class="polilaminatId4"><img onmouseover="pdfAnimacija2()" src="images/pdf_icon.png" alt="Prenesi" width="80" height="80" border="0" id="pdf2"/></a></span>';
    stanje = 6;
    
    //main animacija
    TweenMax.from(".polilaminatId1", .5, {scale:.9, opacity:0, y:300, delay:.2, ease: Expo.easeOut});
    TweenMax.from(".polilaminatId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".polilaminatId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
    TweenMax.from(".polilaminatId4", 1, {opacity:0, delay:.8, ease: Expo.easeOut});
  }, 600);
}


function functionAluminij() {
  height = 600;
  TweenMax.to("#divId", .6, {height:600, ease: Expo.easeOut});
  animacijaOut();
  
  //prikazi Aluminij
  setTimeout(function(){
    document.getElementById("mainPlaceholder").innerHTML = '<span style="display:inline-block" class="aluminijId1 style7" class="paddingTop"><a href="proizvodi_kapice_alumini.html" target="_self">Kapice Aluminij za sodčke</a></span><br /><br /> \
      <span style="display:inline-block" class="aluminijId2 style5">Material: aluminij</span><br /> \
      <span style="display:inline-block" class="aluminijId2 style5">Dimenzije: premera 45, 60, 63, 78mm</span><br /> \
      <span style="display:inline-block" class="aluminijId2 style5">Barve: v eni barvi + tisk</span><br /><br /> \
      <span style="display:inline-block" class="aluminijId3 style5">Material: PVC</span><br /> \
      <span style="display:inline-block" class="aluminijId3 style5">Dimenzije: 63mm</span><br /> \
      <span style="display:inline-block" class="aluminijId3 style5">Barve: v eni barvi<br /><br /> \
      <a href="images/slocap_kalote.pdf" target="_blank" class="aluminijId4"><img onmouseover="pdfAnimacija3()" src="images/pdf_icon.png" alt="Prenesi" width="80" height="80" border="0" id="pdf3"/></a></span>';
    stanje = 7;
    
    //main animacija
    TweenMax.from(".aluminijId1", .5, {scale:.9, opacity:0, y:300, delay:.2, ease: Expo.easeOut});
    TweenMax.from(".aluminijId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".aluminijId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
    TweenMax.from(".aluminijId4", 1, {opacity:0, delay:.8, ease: Expo.easeOut});
  }, 600);
}


function functionKontakt() {
  height = 842;
  TweenMax.to("#divId", .3, {height:842, ease: Expo.easeIn});
  izkljuciDropdown(true, true, 8);
  animacijaOut();
  
  //prikazi Kontakt
  setTimeout(function(){  
    document.getElementById("mainPlaceholder").innerHTML = '<img src="images/podjetje_slocap_b.jpg" width="588" height="267" border="0" class="kontaktId1 rounded_top rounded_bot" /><br /><br /> \
      <iframe class="kontaktId2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.0549761857833!2d13.85618516569426!3d45.70993392503351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b159fa1403c47%3A0x5708e34ec77402d8!2sCesta+na+Lenivec+30d%2C+6210+Se%C5%BEana!5e0!3m2!1ssl!2ssi!4v1508485303364" width="588" height="450" frameborder="0" style="border:0" allowfullscreen></iframe><br /> \
      <div class="kontaktId3"> \
      <span class="style9">Slocap d.o.o. Sežana</span><br /> \
      Cesta na Lenivec 30 D<br /> \
      6210 Sežana, Slovenija<br /> \
      Tel.: +386(0)5 730 48 90<br /> \
      Fax.: +386(0)5 730 48 91<br /> \
      E-mail: <a href="mailto:info@slocap.si" target="_blank">info@slocap.si</a><br /></div>';
    stanje = 8;
    
    //main animacija
    TweenMax.from(".kontaktId1", .5, {scale:.9, opacity:0, y:300, delay:.4, ease: Expo.easeOut});
    TweenMax.from(".kontaktId2", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
    TweenMax.from(".kontaktId3", .5, {opacity:0, y:300, delay:.8, ease: Expo.easeOut});
  }, 600);
}


function izkljuciDropdown(prvi, drugi, stFunkcije) {

  if (boolPodjetje && prvi) {
    boolPodjetje = false;
    TweenMax.to("#arrowhead1", .3, {rotate:0, ease: Expo.easeOut});
    TweenMax.to("#dropdownId1", 1, {opacity:0, y:-16, ease: Expo.easeOut});
    TweenMax.to("#dropdownId6", .3, {y:-16, delay:.1, ease: Expo.easeOut});
    TweenMax.to("#dropdownId5", .3, {y:-16, delay:.1, ease: Expo.easeOut});
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
    TweenMax.to("#arrowhead2", .3, {rotate:0, ease: Expo.easeOut});
    TweenMax.to("#dropdownId2", .3, {opacity:0, y:-10, ease: Expo.easeOut});
    TweenMax.to("#dropdownId3", .3, {opacity:0, y:-24, delay:.05, ease: Expo.easeOut});
    TweenMax.to("#dropdownId4", .3, {opacity:0, y:-32, delay:.1, ease: Expo.easeOut});
    TweenMax.to("#dropdownId6", .3, {y:-48, delay:.15, ease: Expo.easeOut});
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
    TweenMax.to("#arrowhead1", .3, {rotate:90, ease: Expo.easeOut});
    TweenMax.from("#dropdownId6", .3, {opacity:0, y:-16, ease: Expo.easeOut});
    TweenMax.from("#dropdownId5", .3, {opacity:0, y:-16, ease: Expo.easeOut});
    TweenMax.from("#dropdownId1", 1, {opacity:0, y:-24, ease: Expo.easeOut});
    
  } else if (index == 2 && !boolProizvodi) {
    boolProizvodi = true;
    prikaziDropdown3();
    TweenMax.to("#arrowhead2", .3, {rotate:90, ease: Expo.easeOut});
    TweenMax.from("#dropdownId6", .3, {opacity:0, y:-48, ease: Expo.easeOut});
    TweenMax.from("#dropdownId2", 1, {opacity:0, y:-24, ease: Expo.easeOut});
    TweenMax.from("#dropdownId3", 1, {opacity:0, y:-40, delay:.1, ease: Expo.easeOut});
    TweenMax.from("#dropdownId4", 1, {opacity:0, y:-56, delay:.2, ease: Expo.easeOut});
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
      TweenMax.to(".domaId1", .2, {opacity:0, y:-300, delay:0, ease: Expo.easeIn});
      TweenMax.to(".domaId2", .2, {opacity:0, y:-300, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".domaId3", .2, {opacity:0, y:-300, delay:.2, ease: Expo.easeIn});
      TweenMax.to(".domaId4", .2, {opacity:0, y:-300, delay:.3, ease: Expo.easeIn});
      break;
    case 2:
      TweenMax.to(".podjetjeId1", .2, {opacity:0, y:-100, delay:0, scale:.9});
      TweenMax.to(".podjetjeId2", .2, {opacity:0, y:-300, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".podjetjeId3", .2, {opacity:0, y:-300, delay:.2, ease: Expo.easeIn});
      TweenMax.to(".podjetjeId4", .2, {opacity:0, y:-300, delay:.3, ease: Expo.easeIn});
      TweenMax.to(".podjetjeId5", .2, {opacity:0, y:-300, delay:.4, ease: Expo.easeIn});
      break;
    case 3:
      TweenMax.to(".slika1", .3, {scale:.9, opacity:0, y:-100, delay:0});
      TweenMax.to(".slika2", .3, {scale:.9, opacity:0, y:-100, delay:.2});
      TweenMax.to(".slika3", .3, {scale:.9, opacity:0, y:-100, delay:.3});
      break;
    case 4:
      TweenMax.to(".proizvodiId1", .3, {opacity:0, y:-300, delay:0, ease: Expo.easeIn});
      TweenMax.to(".proizvodiId2", .3, {opacity:0, y:-300, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".proizvodiId3", .3, {opacity:0, y:-300, delay:.2, ease: Expo.easeIn});
      break;
    case 5:
      TweenMax.to(".pvcId1", .3, {scale:.9, opacity:0, y:-100, delay:0, ease: Expo.easeIn});
      TweenMax.to(".pvcId2", .3, {opacity:0, y:-100, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".pvcId3", .3, {opacity:0, y:-100, delay:.2, ease: Expo.easeIn});
      break;
    case 6:
      TweenMax.to(".polilaminatId1", .3, {scale:.9, opacity:0, y:-100, delay:0, ease: Expo.easeIn});
      TweenMax.to(".polilaminatId2", .3, {opacity:0, y:-100, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".polilaminatId3", .3, {opacity:0, y:-100, delay:.2, ease: Expo.easeIn});
      break;
    case 7:
      TweenMax.to(".aluminijId1", .3, {scale:.9, opacity:0, y:-100, delay:0, ease: Expo.easeIn});
      TweenMax.to(".aluminijId2", .3, {opacity:0, y:-100, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".aluminijId3", .3, {opacity:0, y:-100, delay:.2, ease: Expo.easeIn});
      break;
    case 8:
      TweenMax.to(".kontaktId1", .3, {scale:.9, opacity:0, y:-100, delay:0, ease: Expo.easeIn});
      TweenMax.to(".kontaktId2", .3, {opacity:0, y:-100, delay:.1, ease: Expo.easeIn});
      TweenMax.to(".kontaktId3", .3, {opacity:0, y:-100, delay:.2, ease: Expo.easeIn});
      break;
    
  }
}