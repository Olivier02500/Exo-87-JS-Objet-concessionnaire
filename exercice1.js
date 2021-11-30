let voiture = {
    Nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    Couleur : "Marron",
    Contructeur : "Citroen",
    Carburant : "Solaire",
    nombrePortes : 3,
    Autonomie : "450km",
    vitesseMax : "120km/h"
};

let titre = document.getElementById('titre').innerText = voiture.Nom;

let img = document.createElement('img');
img.src = voiture.imgUrl;
document.body.appendChild(img);

let text = document.createElement('div');
document.body.appendChild(text);
text.innerHTML =
    " Elle posséde " +voiture.nombresRoues + " roues <br> " +
    " De couleur " +voiture.Couleur+ "<br>" +
    " Construite chez " +voiture.Contructeur + "<br>" +
    " Fonctionne au " +voiture.Carburant+ "<br>" +
    " Elle à " + voiture.nombrePortes + " portes" + "<br>" +
    " Son autonomie s'élève à " +voiture.Autonomie+ "<br>" +
    " Sa vitesse maximale est de " +voiture.vitesseMax;


