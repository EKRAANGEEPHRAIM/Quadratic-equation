var readline= require("readline-sync"); // retrieve the modul readline-sync


// I create an array
var tableau = [4,8,12,16];
// input field
var saisie= readline.questionInt("Quel nombre voulez-vous ? ");

// callback function verifTabEstDivisiblePar(tableau,saisie)
var bool = verifTabEstDivisiblePar(tableau,saisie);

//Here, i test the elements inside my array.
if(bool){
    console.log("Le tableau contient que des valeurs divisibles par " + saisie);
} else {
    console.log("Le tableau ne contient pas que des valeurs divisibles par " + saisie);
}


function verifTabEstDivisiblePar(tab, diviseur){
    for (var i = 0 ; i < tab.length ; i++){
        if(tab[i] % diviseur !== 0){
            return false;
        }
    }
    return true;
}