//TABLEAU DES CITATION
let tabCitations = [
  ["L’inspiration existe, mais il faut qu’elle vous trouve au travail.", "Pablo Picasso"],
  ["Espece de gros con de ta mere, tu pues comme un minable qui pue, je rève de te découper en morceaux jusqu'à l'aube après le match de foot. Va te faire voir chez les grecs", "Signé : Ton ami qui t'attends"],
  ["Espece de vieux batard  puant(e) , tu ressembles à  une merde siliconnée  qui transpire du cul , je ris en pensant à  te fumer  derrière le cyprès  après l'apéro . Va te faire sucer ", "Socrate"],
  ["Espece de vieux batard  de tes os , tu es  un nabot  jaune devant marron derrière , je mouille en pensant à  te mettre mes couilles sur ton nez devant ta petasse  en regardant un match de rugby . Va te faire pourrir ", "Aristote"],
  [" La mort n’est rien pour nous", "Epicure"],
  ["Je pense, donc je suis", "René Descartes"],
  ["L’homme est né libre, et partout il est dans les fers", "Jean-Jacques Rousseau"],
  ["Ose savoir !", "Emmanuel Kant"],
  ["Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe, c’est de le transformer", "Karl Marx"],
  ["L’existence précède l’essence", "Jean-Paul Sartre"],
  ["On ne naît pas femme : on le devient", "Simone de Beauvoir"]
];
//DECLARATION DES VARIABLES
//La variable récupère la derniere citation générer
let lastCitation = 0;
let nbAleatoire = 0;

//RECUPERATION DES ELEMENT DE LA PAGE WEB
let citation    = document.querySelector("#citation");
let auteur      = document.querySelector("#auteur");
let btn         = document.querySelector("#btn");

//DECLARATION DES FONCTIONS
//Fonction qui génère le nombre aleatoire
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//Fonction affiche une nouvelle citation au clic sur le bouton
function generationCitation(){
  do{
    nbAleatoire = genererNombreEntier(tabCitations.length-1);
  } while(nbAleatoire === lastCitation);
  //lastCitation = nbAleatoire
  citation.innerHTML  = tabCitations[nbAleatoire][0];
  auteur.innerHTML    = tabCitations[nbAleatoire][1];
}

//On affiche la premier citation par défaut.
citation.innerHTML  = tabCitations[lastCitation][0];
auteur.innerHTML    = tabCitations[lastCitation][1];

//Ajout l'évènement clic user
btn.addEventListener('click', generationCitation);