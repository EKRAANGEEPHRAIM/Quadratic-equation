var readline = require("readline-sync");

var nombreNotes = readline.questionInt("Combien de notes voulez-vous ? ");

var nombres = [];
for(var cpt = 1; cpt <= nombreNotes; cpt++){
    nombres.push(readline.questionInt("Saisir la note numero "+ cpt +" :"));
}
console.log(nombres);

console.log('La moyenne est de : ' + Math.round(calculMoyenne(nombres)*10)/10);

function calculMoyenne(tab){
    var resultat = 0;
    for(var i = 0 ; i < tab.length ; i++){ 
        resultat = resultat + tab[i];
    }
    var moyenne = resultat / tab.length;
    return moyenne;
}

