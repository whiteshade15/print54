/* Print54 V2 — langues, galerie, visionneuse, devis. Écrit de zéro le 23/11/2026. */
(() => {
'use strict';

/* Réalisations : [fichier, client, catégories, légende FR, NL, EN] */
const REAL = [
  ["le-zee","Le Zee","ens","Enseigne lumineuse & drapeau","Lichtreclame & uithangbord","Illuminated sign & projecting sign"],
  ["gala","Gala","ens","Lettres en relief & LED","Reliëfletters & led","Raised letters & LED"],
  ["am-thermo","AM Thermo Services","veh","Lettrage utilitaire","Belettering bestelwagen","Van lettering"],
  ["israya-facade","Israya","ens vit","Lettres & vitrophanie","Letters & raambelettering","Letters & window graphics"],
  ["esperance-sante","Maison médicale Espérance Santé","ens","Enseigne lumineuse bilingue","Tweetalige lichtreclame","Bilingual illuminated sign"],
  ["fitroom","The Fitroom","ens vit","Lettres en relief & film dépoli","Reliëfletters & matglasfolie","Raised letters & frosted film"],
  ["enata","Enata","veh","Décor de camping-car","Belettering mobilhome","Motorhome graphics"],
  ["mister-pepe","Mister Pépé","ens vit","Enseigne & vitrine","Gevelreclame & etalage","Sign & shop window"],
  ["ddr","DDR Construction","veh","Lettrage utilitaire","Belettering bestelwagen","Van lettering"],
  ["le-30","Le 30","ens","Lettres rétroéclairées","Verlichte letters","Backlit letters"],
  ["ecowayez","Ecowayez","ens vit","Lettres 3D & vitrophanie","3D-letters & raambelettering","3D letters & window graphics"],
  ["velo-goffeau","Vélo Goffeau","ens vit","Lettres & décor de vitrine","Letters & etalagedecor","Letters & window decoration"],
  ["chicken-ky","Chicken Ky","ens","Enseigne en relief","Gevelreclame in reliëf","Raised sign"],
  ["hd-autos","H.D. Autos","veh","Lettrage voiture","Belettering wagen","Car lettering"],
  ["multinvest","Multinvest","ens","Panneau & lettres en relief","Paneel & reliëfletters","Panel & raised letters"],
  ["orca-sanitaire","Orca Sanitaire","ens vit","Enseigne & vitrophanie","Gevelreclame & raambelettering","Sign & window graphics"],
  ["centre-medical","Centre médical Charles Woeste","ens","Enseigne en caisson","Lichtbak","Light box sign"],
  ["israya-vitrine","Israya","vit","Lettrage de vitrine","Raambelettering","Window lettering"],
  ["enseigne-ciseaux","Salon de coiffure","ens","Enseigne drapeau découpée","Uitgesneden uithangbord","Cut-out projecting sign"],
  ["kandinsky","Kandinsky","ens","Lettres rétroéclairées","Verlichte letters","Backlit letters"]
];

/* Textes NL et EN (le français est dans le HTML). TODO : faire relire le néerlandais. */
const T = {
nl:{saut:"Naar de inhoud",menu:"Menu",nav1:"Diensten",nav2:"Realisaties",nav3:"Werkwijze",nav4:"Offerte",nav5:"Contact",
h_tag:"Reclame & signalisatie — Brussel",h_titre:"Uw zaak,<br>tot op de <span class=\"surligne\">millimeter</span>.",
h_texte:"Lichtreclame, voertuigbelettering en etalages: ontwerp, productie en plaatsing door hetzelfde team, vanuit ons atelier in de Wayezstraat.",
h_b1:"Offerte aanvragen",h_b2:"Bekijk onze realisaties",h_avis:"21 Google-reviews",h_legende:"Kandinsky — verlichte letters",
e1:"Advies en opmeting",e2:"Ontwerp vóór productie",e3:"Productie in ons atelier",e4:"Plaatsing door ons team",e5:"Eén aanspreekpunt",
s_tag:"Diensten",s_titre:"Vier vakken, één atelier.",s_intro:"Van klein bordje tot volledige gevel: alles wordt bij ons ontworpen en gemaakt.",
s1:"Gevelreclame",s1p:"Zodat uw gevel van ver opvalt, dag en nacht.",s1a:"Lichtreclame en lichtbakken",s1b:"Reliëf- en verlichte letters",s1c:"Uithangborden",
s2:"Voertuigen",s2p:"Uw bestelwagen wordt rijdende reclame.",s2a:"Belettering van bedrijfswagens",s2b:"Gedeeltelijke of volledige decors",s2c:"Mobilhomes en wagenparken",
s3:"Etalages",s3p:"Uw etalage trekt de aandacht en beschermt uw privacy waar nodig.",s3a:"Raamfolie en belettering",s3b:"Matglasfolie",s3c:"Etalagedecor",
s4:"Drukwerk",s4p:"Al uw dragers, gedrukt in dezelfde kleuren als uw gevelreclame.",s4a:"Spandoeken en panelen",s4b:"Stickers en etiketten",s4c:"Klein formaat",
r_tag:"Realisaties",r_titre:"Nu al op Brusselse gevels.",f0:"Alles",f1:"Gevelreclame",f2:"Voertuigen",f3:"Etalages",r_plus:"Meer realisaties",fermer:"Sluiten ✕",
m_tag:"Werkwijze",m_titre:"Van uw idee tot uw gevel.",m1:"We luisteren",m1p:"U legt uw project uit, in het atelier of ter plaatse. Wij nemen de maten.",
m2:"We ontwerpen",m2p:"U krijgt een ontwerp op een foto van uw gevel of voertuig.",m3:"We maken",m3p:"Snijden, drukken en monteren in ons atelier in Anderlecht.",m4:"We plaatsen",m4p:"Ons team plaatst en controleert of alles perfect is.",
d_tag:"Offerte",d_titre:"Vertel ons over uw project.",d_intro:"Beschrijf wat u nodig hebt. Een foto van uw gevel of voertuig helpt ons enorm: stuur ze via WhatsApp.",
d_wa:"Stuur een foto via WhatsApp",d_nom:"Naam",d_soc:"Bedrijf / zaak",d_mail:"E-mail",d_tel:"Telefoon",d_type:"Soort project",
o1:"Gevelreclame",o2:"Voertuigbelettering",o3:"Etalage",o4:"Drukwerk",o5:"Andere",d_msg:"Uw project",d_envoi:"Aanvraag versturen",
d_note:"De knop opent uw e-mailprogramma met de aanvraag klaar om te versturen naar info@print54.be.",
c_tag:"Contact",c_titre:"Kom langs in het atelier.",c_adr:"Adres",c_tel:"Telefoon",c_hor:"Openingsuren",c_hor1:"Maandag tot vrijdag, 9 – 17 u",c_hor2:"Gesloten in het weekend",
p_slogan:"Uw grafische afdruk.",
wa:"Hallo Print54, ik heb een vraag over een project.",mail_obj:"Offerteaanvraag",err:"Vul uw naam, e-mail en project in."},
en:{saut:"Skip to content",menu:"Menu",nav1:"Services",nav2:"Our work",nav3:"Process",nav4:"Quote",nav5:"Contact",
h_tag:"Signs & signage — Brussels",h_titre:"Your business,<br>set to the <span class=\"surligne\">millimetre</span>.",
h_texte:"Illuminated signs, vehicle lettering and shop windows: design, production and installation by one team, from our workshop on Rue Wayez.",
h_b1:"Request a quote",h_b2:"See our work",h_avis:"21 Google reviews",h_legende:"Kandinsky — backlit letters",
e1:"Advice and measuring",e2:"Mock-up before production",e3:"Made in our workshop",e4:"Installed by our team",e5:"One point of contact",
s_tag:"Services",s_titre:"Four trades, one workshop.",s_intro:"From a small plate to a full shopfront, everything is designed and made in-house.",
s1:"Signs",s1p:"So your shopfront stands out from afar, day and night.",s1a:"Illuminated signs and light boxes",s1b:"Raised and backlit letters",s1c:"Projecting signs",
s2:"Vehicles",s2p:"Your van becomes an advert on wheels.",s2a:"Van lettering",s2b:"Partial or full graphics",s2c:"Motorhomes and fleets",
s3:"Shop windows",s3p:"Your window catches the eye and keeps privacy where needed.",s3a:"Window graphics and lettering",s3b:"Frosted film",s3c:"Window displays",
s4:"Printing",s4p:"All your media, printed in the same colours as your sign.",s4a:"Banners and panels",s4b:"Stickers and labels",s4c:"Small format",
r_tag:"Our work",r_titre:"Already on Brussels shopfronts.",f0:"All",f1:"Signs",f2:"Vehicles",f3:"Windows",r_plus:"See more projects",fermer:"Close ✕",
m_tag:"Process",m_titre:"From your idea to your shopfront.",m1:"We listen",m1p:"You explain your project, at the workshop or on site. We take the measurements.",
m2:"We design",m2p:"You get a mock-up on a photo of your shopfront or vehicle.",m3:"We make",m3p:"Cutting, printing and assembly in our Anderlecht workshop.",m4:"We install",m4p:"Our team installs it and checks that everything is perfect.",
d_tag:"Quote",d_titre:"Tell us about your project.",d_intro:"Describe what you need. A photo of your shopfront or vehicle helps a lot: send it on WhatsApp.",
d_wa:"Send a photo on WhatsApp",d_nom:"Name",d_soc:"Company / shop",d_mail:"Email",d_tel:"Phone",d_type:"Type of project",
o1:"Sign",o2:"Vehicle lettering",o3:"Shop window",o4:"Printing",o5:"Other",d_msg:"Your project",d_envoi:"Send request",
d_note:"The button opens your email app with the request ready to send to info@print54.be.",
c_tag:"Contact",c_titre:"Visit the workshop.",c_adr:"Address",c_tel:"Phone",c_hor:"Opening hours",c_hor1:"Monday to Friday, 9 am – 5 pm",c_hor2:"Closed at weekends",
p_slogan:"Your graphic footprint.",
wa:"Hello Print54, I have a question about a project.",mail_obj:"Quote request",err:"Please fill in your name, email and project."},
fr:{wa:"Bonjour Print54, j'ai une question pour un projet.",mail_obj:"Demande de devis",err:"Indiquez votre nom, votre e-mail et votre projet."}
};
const IDX = {fr:3,nl:4,en:5};

/* Mémorise le français d'origine pour pouvoir y revenir */
const orig = new Map();
document.querySelectorAll('[data-i]').forEach(el => orig.set(el, el.textContent));
document.querySelectorAll('[data-ih]').forEach(el => orig.set(el, el.innerHTML));

let lang = 'fr';
const stocke = {
  get(){ try { return localStorage.getItem('p54-lang'); } catch(e){ return null; } },
  set(v){ try { localStorage.setItem('p54-lang', v); } catch(e){} }
};
const t = k => (T[lang] && T[lang][k]) || T.fr[k];

function appliqueLangue(l){
  lang = T[l] ? l : 'fr';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i]').forEach(el => {
    el.textContent = lang === 'fr' ? orig.get(el) : (T[lang][el.dataset.i] ?? orig.get(el));
  });
  document.querySelectorAll('[data-ih]').forEach(el => {
    el.innerHTML = lang === 'fr' ? orig.get(el) : (T[lang][el.dataset.ih] ?? orig.get(el));
  });
  document.querySelectorAll('.langues button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));
  const wa = 'https://wa.me/32477091897?text=' + encodeURIComponent(t('wa'));
  document.getElementById('wa-flottant').href = wa;
  document.getElementById('wa-devis').href = wa;
  dessineGalerie();
  stocke.set(lang);
}
document.querySelectorAll('.langues button').forEach(b => b.addEventListener('click', () => appliqueLangue(b.dataset.lang)));

/* Menu mobile */
const burger = document.querySelector('.burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const ouvert = menu.classList.toggle('ouvert');
  burger.setAttribute('aria-expanded', ouvert);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('ouvert'); burger.setAttribute('aria-expanded', false); } });

/* Galerie */
const galerie = document.getElementById('galerie'), plus = document.getElementById('plus');
const PAS = 9;
let filtre = 'tout', montres = PAS, liste = [];

function dessineGalerie(){
  liste = REAL.filter(r => filtre === 'tout' || r[2].split(' ').includes(filtre));
  galerie.innerHTML = '';
  liste.slice(0, montres).forEach((r, i) => {
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', `${r[1]} — ${r[IDX[lang]]}`);
    b.innerHTML = `<img src="img/${r[0]}.webp" alt="" loading="lazy"><span class="legende"><b></b></span>`;
    b.querySelector('b').textContent = r[1];
    b.querySelector('.legende').append(r[IDX[lang]]);
    b.addEventListener('click', () => ouvre(i));
    li.append(b); galerie.append(li);
  });
  plus.hidden = montres >= liste.length;
}
document.querySelectorAll('.filtres button').forEach(b => b.addEventListener('click', () => {
  filtre = b.dataset.f; montres = PAS;
  document.querySelectorAll('.filtres button').forEach(x => x.setAttribute('aria-pressed', x === b));
  dessineGalerie();
}));
plus.addEventListener('click', () => { montres = liste.length; dessineGalerie(); });

/* Visionneuse */
const dlg = document.getElementById('visionneuse'), dImg = dlg.querySelector('img'), dTxt = dlg.querySelector('p');
let pos = 0;
function montre(){ const r = liste[pos]; dImg.src = `img/${r[0]}.webp`; dImg.alt = `${r[1]} — ${r[IDX[lang]]}`; dTxt.textContent = `${r[1]} — ${r[IDX[lang]]}`; }
function ouvre(i){ pos = i; montre(); if (dlg.showModal) dlg.showModal(); }
const bouge = d => { pos = (pos + d + liste.length) % liste.length; montre(); };
dlg.querySelector('.prec').addEventListener('click', () => bouge(-1));
dlg.querySelector('.suiv').addEventListener('click', () => bouge(1));
dlg.querySelector('.fermer').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') bouge(-1); if (e.key === 'ArrowRight') bouge(1); });

/* Formulaire de devis : ouvre la messagerie avec la demande */
document.getElementById('form-devis').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, v = n => f.elements[n].value.trim();
  if (!v('nom') || !v('email') || !v('message') || !f.elements.email.checkValidity()) { alert(t('err')); return; }
  const corps = [`${v('nom')}${v('societe') ? ' — ' + v('societe') : ''}`, v('email'), v('tel'), '', `${f.elements.type.selectedOptions[0].textContent}`, '', v('message')].join('\n');
  location.href = `mailto:info@print54.be?subject=${encodeURIComponent(t('mail_obj') + ' — ' + v('nom'))}&body=${encodeURIComponent(corps)}`;
});

/* Apparition au défilement */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('vu'); io.unobserve(x.target); } }), {rootMargin:'0px 0px -10% 0px'});
  document.querySelectorAll('.apparait').forEach(el => io.observe(el));
} else document.querySelectorAll('.apparait').forEach(el => el.classList.add('vu'));

document.getElementById('annee').textContent = new Date().getFullYear();

/* Langue de départ : choix mémorisé, sinon langue du navigateur */
const nav = (navigator.language || 'fr').slice(0, 2);
appliqueLangue(stocke.get() || (T[nav] && nav !== 'fr' ? nav : 'fr'));
})();
