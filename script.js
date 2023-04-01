//TABLEAU DES CITATION
let mesCitations = [
    ["On ne se baigne jamais deux fois dans le même fleuve", "Héraclite"],
    ["Je sais que je ne sais rien", "Socrate"],
    ["L’homme est un animal politique ", "Aristote"],
    [" La mort n’est rien pour nous", "Epicure"],
    ["Je pense, donc je suis", "René Descartes"],
    ["L’homme est né libre, et partout il est dans les fers", "Jean-Jacques Rousseau"],
    ["Ose savoir !", "Emmanuel Kant"],
    ["Les philosophes n'ont fait qu'interpréter le monde de différentes manières, ce qui importe, c’est de le transformer", "Karl Marx"],
    ["L’existence précède l’essence", "Jean-Paul Sartre"],
    ["On ne naît pas femme : on le devient", "Simone de Beauvoir"]
];

//Declaration des variables
//Par defaut, premiere citation qui est stocker
let dernier = mesCitations[0][0];
//Stocke un nombre aleatoire generer par la fonction math.random
let nbAleatoire = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

//Recuperation des elements
let affichageCitation   = document.querySelector('#citation');
let affichageAuteur     = document.querySelector('#auteur');
let btnCitation    = document.querySelector('#btnNew');

// //Detection clic sur bouton
btnCitation.addEventListener('clic', nouvelleCitation);



function nouvelleCitation(){
    document.affichageCitation.innerHTML = mesCitations[0][0];
    document.querySelector("#auteur").innerHTML = mesCitations[0][1];
}
//     affichageCitation.innerHTML = '<p>dernier</p>';
//     document.body.append(affichageCitation);
// }

console.log(dernier);


