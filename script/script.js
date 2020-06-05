var boolPodjetje = false;
var boolProizvodi = false;

functionDoma();

//gsap.registerPlugin(ScrollTrigger);
/*
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
      scrub: .5
  },
  y: 100,
  opacity: 0,
  scale: 0.9
});
*/



/*
var timeline = new TimelineMax({onComplete: funkcija1});

timeline.from(".slika1", .5, {scale:.9, opacity:0, y:100});
timeline.from(".slika2", .5, {scale:.9, opacity:0, y:100});


function funkcija1() {
  document.getElementById("test2").innerHTML = "";
}
*/

function prikaziDropdown1() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
      <div id="dropdownId7"><button target="_self" class="button" onclick="functionDoma()">Doma</button></div> \
      <div id="dropdownId8"><button target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="images/arrowhead.png" height="10" border="0"> O podjetju</button></div> \
      <div id="dropdownId5"><button target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="images/arrowhead.png" height="10" border="0"> Proizvodi</button></div> \
      <div id="dropdownId6"><button target="_self" class="button" onclick="functionKontakt()">Kontakt</button></div> \
      <div class="positionSlikaSide"><img src="images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div>';
}


function prikaziDropdown2() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
      <div id="dropdownId7"><button target="_self" class="button" onclick="functionDoma()">Doma</button></div> \
      <div id="dropdownId8"><button target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="images/arrowhead.png" height="10" border="0"> O podjetju</button></div> \
      <div id="dropdownId1"><button target="_self" class="button2" onclick="functionGalerija()">- galerija</button></div> \
      <div id="dropdownId5"><button target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="images/arrowhead.png" height="10" border="0"> Proizvodi</button></div> \
      <div id="dropdownId6"><button target="_self" class="button" onclick="functionKontakt()">Kontakt</button></div> \
      <div class="positionSlikaSide"><img src="images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div>';
}


function prikaziDropdown3() {
  document.getElementById("dropdownPlaceholder").innerHTML = '\
    <div id="dropdownId7"><button target="_self" class="button" onclick="functionDoma()">Doma</button></div> \
    <div id="dropdownId8"><button target="_self" class="button" onclick="functionPodjetje()"><img id="arrowhead1" src="images/arrowhead.png" height="10" border="0"> O podjetju</button></div> \
    <div id="dropdownId5"><button target="_self" class="button" onclick="functionProizvodi()"><img id="arrowhead2" src="images/arrowhead.png" height="10" border="0"> Proizvodi</button></div> \
    <div id="dropdownId2"><button target="_self" class="button2" onclick="functionPVC()">- Kapice PVC</button></div> \
    <div id="dropdownId3"><button target="_self" class="button2" onclick="functionPolilaminat()">- Kapice polilaminat za steklenice penin</button></div> \
		<div id="dropdownId4"><button target="_self" class="button2" onclick="functionAluminij()">- Kapice Aluminij za sodčke</button></div> \
    <div id="dropdownId6"><button target="_self" class="button" onclick="functionKontakt()">Kontakt</button></div> \
    <div class="positionSlikaSide"><img src="images/podjetje_side.jpg" width="176" height="264" border="0" class="rounded_top rounded_bot"/><br /></div>';
}


function functionDoma() {
  izkljuciDropdown(true, true);
  
  
  //prikazi doma
  document.getElementById("mainPlaceholder").innerHTML = '<span style="display:inline-block" class="domaId1 style7">Dobrodošli!</span><br /><br /> \
    <span style="display:inline-block" class="domaId2 style5">Prišli ste na našo spletno stran, kjer si lahko poiščete marsikaj v zvezi z našim podjetjem. </span><br /><br /> \
    <span style="display:inline-block" class="domaId3 style5">Na strani  s proizvodi  lahko preverite, kaj vse vam nudimo. Na strani o podjetju je predstavljena</span><br /> \
    <span style="display:inline-block" class="domaId3 style5">kratka zgodovina našega podjetja in od kje prihajamo. Na zemljevidu  si lahko ogledate, kje točno se</span><br /> \
    <span style="display:inline-block" class="domaId3 style5">nahajamo, lahko pa si tudi poiščete pot do nas preko našega interaktivnega zemljevida.</span><br /><br /> \
    <span style="display:inline-block" class="domaId4 style5">Želimo vam čim bolj prijetno brskanje po naših straneh in  dobro poslovno sodelovanje v prihodnosti.</span>';
  
  
  //main animacija
  TweenMax.from(".domaId1", .5, {opacity:0, y:300, delay:.2, ease: Expo.easeOut});
  TweenMax.from(".domaId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
  TweenMax.from(".domaId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
  TweenMax.from(".domaId4", .5, {opacity:0, y:300, delay:.8, ease: Expo.easeOut});
}


function functionPodjetje() {
  izkljuciDropdown(false, true);
  
  swipe("dropdownId8");
  
  document.getElementById("mainPlaceholder").innerHTML = '<img src="images/podjetje_slocap_b2.jpg" width="588" height="267" border="0" class="rounded_top rounded_bot podjetjeId1"/><br /> \
    <p class="paddingTop podjetjeId2">Začetek podjetja Slocap d.o.o. sega v leto 1992, kjer je na začetni lokaciji v Sežani pričelo z izdelavo PVC kapic. Iz leta v leto se je podjetje razvijalo, širilo svojo proizvodnjo in trg.<p/> \
    <p class="paddingTop podjetjeId3">Leta 2007 se je podjetje Slocap preselilo v nove proizvodne prostore na novi lokaciji v Sežani. Pri tem je tudi svojo ponudbo razširilo na izdelavo polilaminatnih kapsulonov za steklenice penin, aluminijastih in pvc pokrovčkov za inox in steklene sodčke.<p/> \
    <p class="paddingTop podjetjeId4">Glavna načela podjetja so vedno bila zagotavljanje  kvalitete lastnega proizvoda, prilagodljivosti do končnega porabnika - kupca, minimalni dobavni roki, možna izdelava manjših količin in svetovanje kupcem pri naročanju proizvodov.<p/> \
    <p class="paddingTop podjetjeId5">Za zagotavljanje visoke kvalitete svojih proizvodov podjetje uporablja samo materiale priznanih svetovnih proizvajalcev. Kupce proizvodov Slocap najdemo po vsej Evropi in po državah bivše Jugoslavije.</p>';
  
  //main animacija
  TweenMax.from(".podjetjeId1", .5, {scale:.9, opacity:0, y:100});
  TweenMax.from(".podjetjeId2", .5, {opacity:0, y:300, delay:.4, ease: Expo.easeOut});
  TweenMax.from(".podjetjeId3", .5, {opacity:0, y:300, delay:.6, ease: Expo.easeOut});
  TweenMax.from(".podjetjeId4", .5, {opacity:0, y:300, delay:.8, ease: Expo.easeOut});
  TweenMax.from(".podjetjeId5", .5, {opacity:0, y:300, delay:1, ease: Expo.easeOut});
}


function functionGalerija() {
  document.getElementById("mainPlaceholder").innerHTML = '<img src="images/podjetje01.jpg" width="100%" height="381" class="rounded_top slika1" /><br /><br /> \
      <img class="slika2" src="images/podjetje02.jpg" width="100%" height="400" /><br /><br /> \
      <img class="slika3" src="images/podjetje03.jpg" width="100%" height="400" /><br /><br /> \
      <img src="images/podjetje04.jpg" width="100%" height="381" class="rounded_bot slika4"/>';
  
  
  var timeline = new TimelineMax();
  timeline.from(".slika1", .5, {scale:.9, opacity:0, y:100});
  timeline.from(".slika2", .5, {scale:.9, opacity:0, y:100});
  
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
        scrub: .5
    },
    y: 100,
    opacity: 0,
    scale: 0.9
  });
}


function functionProizvodi() {
  izkljuciDropdown(true, false);
  
  document.getElementById("mainPlaceholder").innerHTML = '<a href="proizvodi_kapice_pvc.html" target="_self" class="style7">Kapice PVC</a><br /> \
      <span class="style1"><br /> \
    </span><a href="proizvodi_kapice_pvc.html" target="_self"><img src="images/slocap_kapice.jpg" alt="Kapice PVC" border="0" style="margin-left:14px" class="rounded_top rounded_bot"/></a><br /><br /> \
    <span class="style7"><a href="proizvodi_kapice_polilaminat.html" target="_self">Kapice polilaminat za steklenice penin</a></span><br /><br /> \
    <a href="proizvodi_kapice_polilaminat.html" target="_self"><img src="images/slocap_kapsuloni.jpg" alt="Kapice polilaminat za steklenice penin" border="0" style="margin-left:14px" class="rounded_top rounded_bot"/></a><br /><br /> \
    <span class="style7"><a href="proizvodi_kapice_alumini.html" target="_self">Kapice Aluminij za sodčke</a></span><br /><br /> \
    <a href="proizvodi_kapice_alumini.html" target="_self"><img src="images/slocap_kalote.jpg" alt="Kapice Alumini za sodčke" border="0" style="margin-left:14px" class="rounded_top rounded_bot"/></a>';
}


function functionPVC() {
  document.getElementById("mainPlaceholder").innerHTML = '<a href="proizvodi_kapice_pvc.html" target="_self" class="style7">Kapice PVC</a><br /><br /> \
    <span class="style5">Tip: Standard (1) in ravna glava (2)</span><br /> \
    <span class="style5">dimenzije premera d : 25mm - 36mm, dolžine h : 30mm - 70 mm</span><br /> \
    <span class="style5">brez odvijalnega trakca,</span><br /> \
    <span class="style5">z vertikalnim odvijalnim trakcem </span><br /> \
    <span class="style5">s horizontalnim odvijalnim trakcem</span><br /> \
    <span class="style5">perforacija</span><br /> \
    <span class="style5">Barve: telo v dveh barvah + 1 x topli tisk</span><br /> \
    <span class="style5">Barve pokrovčka: v dveh barvah + relief - logo<br /><br /> \
    <a href="images/slocap_kapice.pdf" target="_blank"><img src="images/pdf_icon.png" alt="Prenesi" width="80" height="80" border="0" /></a></span>';
}


function functionPolilaminat() {
  document.getElementById("mainPlaceholder").innerHTML = '<span class="style7"><a href="proizvodi_kapice_polilaminat.html" target="_self">Kapice polilaminat za steklenice penin</a></span><br /><br /> \
    <span class="style5">Material: polilaminat 62 um (ostale debeline po naročilu)</span><br /> \
    <span class="style5">Dimenzije: glava 34mm dolžine 75mm- 140mm</span><br /> \
    <span class="style5">Konus: 1/7, 1/8</span><br /> \
    <span class="style5">brez odvijalnega trakca</span><br /> \
    <span class="style5">z odvijalnim trakcem</span><br /> \
    <span class="style5">z odvijalnim trakcem in 1 x perforacija pod trakcem</span><br /> \
    <span class="style5">dvojna perforacija brez trakca</span><br /> \
    <span class="style5">okenca</span><br /> \
    <span class="style5">relief rombi  v materialu,</span><br /> \
    <span class="style5">podaljšana okrogla ovratnica na eni strani.</span><br /> \
    <span class="style5">Barve telesa: v dveh barvah + 2 x topli tisk</span><br /> \
    <span class="style5">Barva pokrovčka: v dveh barvah + 1 x topli tisk<br /><br /> \
    <a href="images/slocap_kapsuloni.pdf" target="_blank"><img src="images/pdf_icon.png" alt="Prenesi" width="80" height="80" border="0" /></a></span>';
}


function functionAluminij() {
  document.getElementById("mainPlaceholder").innerHTML = '<span class="style7" class="paddingTop"><a href="proizvodi_kapice_alumini.html" target="_self">Kapice Aluminij za sodčke</a></span><br /><br /> \
    <span class="style5">Material: aluminij</span><br /> \
    <span class="style5">Dimenzije: premera 45, 60, 63, 78mm</span><br /> \
    <span class="style5">Barve: v eni barvi + tisk</span><br /><br /> \
    <span class="style5">Material: PVC</span><br /> \
    <span class="style5">Dimenzije: 63mm</span><br /> \
    <span class="style5">Barve: v eni barvi<br /><br /> \
    <a href="images/slocap_kalote.pdf" target="_blank"><img src="images/pdf_icon.png" alt="Prenesi" width="80" height="80" border="0" /></a></span>';
}


function functionKontakt() {
  izkljuciDropdown(true, true);
  
  document.getElementById("mainPlaceholder").innerHTML = '<img src="images/podjetje_slocap_b.jpg" width="588" height="267" border="0" class="rounded_top rounded_bot" /><br /><br /> \
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.0549761857833!2d13.85618516569426!3d45.70993392503351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477b159fa1403c47%3A0x5708e34ec77402d8!2sCesta+na+Lenivec+30d%2C+6210+Se%C5%BEana!5e0!3m2!1ssl!2ssi!4v1508485303364" width="588" height="450" frameborder="0" style="border:0" allowfullscreen></iframe><br /> \
    <span class="style8">Slocap d.o.o. Sežana</span><br /> \
    Cesta na Lenivec 30 D<br /> \
    6210 Sežana, Slovenija<br /> \
    Tel.: +386(0)5 730 48 90<br /> \
    Fax.: +386(0)5 730 48 91<br /> \
    E-mail: <a href="mailto:info@slocap.si" target="_blank">info@slocap.si</a><br />';
}


function izkljuciDropdown(prvi, drugi) {
  
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
        animacijaDropdown(1)}
        ,400);
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

function swipe(id) {
  TweenMax.to("#" + id, 1, {'backgroundPosition': -200});
}