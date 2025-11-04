var readline = require("readline-sync");

/**
 * MAIN
 */
var action = -1;
while(action !== 0){
    menu();
    action = readline.questionInt("Quel est votre choix ? ");
    switch(action){
        case 1 : 
            console.log("Calcul de la factorielle");
            var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
            console.log("La factorielle de "+ nombre + " = " + calculFactorielle(nombre));
        break;
        case 2 : 
            console.log("Calcul de la Somme");
            var nombre = readline.questionInt("Quel nombre voulez-vous ? ");
            console.log("La Somme des "+ nombre + " premiers nombres = " + calculSomme(nombre));
        break;
        case 0 : console.log("A +");
        break;
        default : console.log("Cas non pris en compte");
    }
}


/**
 * Fonctions
 */
function menu(){
    var txt = "1/ Factorielle\n";
    txt += "2/ Somme\n";
    txt += "0/ Quitter";
    console.log(txt);
}

function calculFactorielle(nombre){
    var resultat = 1;
    for(var i = 1; i <= nombre ; i++){
        resultat *= i; // resultat = resultat * i;
    }
    return resultat;
}

function calculSomme(nombre){
    var resultat = 0;
    for(var i = 1 ; i <= nombre ; i++){
        resultat += i; // resultat = resultat + nombre
    }
    return resultat;
}