var readline = require("readline-sync");

var tableMultiplications = readline.questionInt("Quelle est la table de multiplications ? "); // i need to take down a number

for(var cpt=1; cpt < 11 ; cpt++){
    var resultat = cpt * tableMultiplications;
    console.log(cpt + " * " + tableMultiplications +" = " + resultat);
}

// you can do the multiplication of all number between 1 and 10