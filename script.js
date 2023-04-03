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
// function generationCitation(){
//   for(let i = 1; i <= 10000; i++){
//     if(lastCitation == nbAleatoire){
//       nbAleatoire = genererNombreEntier(tabCitations.length-1);
//     } else{
//       btn.addEventListener('click', generationCitation);
//     };
//     citation.innerHTML  = tabCitations[nbAleatoire][0];
//     auteur.innerHTML    = tabCitations[nbAleatoire][1];
//   }  
// }
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

//Si la valeur du nombre aléatoire est égale à la derniere valeur, on relance une génération aléatoire
// if(lastCitation == nbAleatoire){
//   nbAleatoire = genererNombreEntier(tabCitations.length-1);
// } else{
//   btn.addEventListener('click', generationCitation);
// };



// //variable contiendras le nb max d'element dans le tableau. A automatiser
// let indexTabMax = (tabCitations.length)-1;
// //Variable contient l'index de la question actuellement affichée (par défaut, la citation affichée est la première du tableau, sa valeur est donc égale à 0)
// let dernier;




// function genererNombreEntier(max) {
// let nb =Math.floor(Math.random() * Math.floor(max));
// return nb
// }
// //Variable contient le nb aleatoire 
// let nbAleatoire = genererNombreEntier(indexTabMax);
// console.log(nbAleatoire);


// //On recupere le clic de l'user sur le bouton Generer citation
// btn.addEventListener('click', ()=>alert(nbAleatoire));

// //la fonction vient chercher une nouvelle citation grace au nb aleatoire generer
// function nouvelleCitation(){
//   nbAleatoire         = genererNombreEntier(nbElementTab);
//   let recupCitation   = tabCitations[nbAleatoire][0];
//   let recupAuteur     = tabCitations[nbAleatoire][1];
// }


//Ou max est le nombre max d'element du tableau
//Celle ci est a implementer