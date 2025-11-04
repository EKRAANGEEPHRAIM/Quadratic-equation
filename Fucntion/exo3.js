var readline=require("readline-sync");
var saisie = readline.questionInt("Quel nombre voulez-vous vérifier ? ");

estPair(saisie);
// estPair(2);
// estPair(3);
// estPair(4);
// estPair(5);

function estPair(nombre){
    if(nombre % 2 === 0){
        console.log("Le nombre %d est pair", nombre);
    } else {
        console.log("Le nombre %d est impair", nombre);
    }
}