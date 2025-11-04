var readline = require("readline-sync");

var age = readline.questionInt("Quel age voulez vous ? (entre 16 et 24) ?");

switch(age){
    case 16 :
    case 17 : console.log("Mineur");
    break;
    case 18 : 
    case 19 : 
    case 20 : console.log("Majeur");
    break;
    case 21 : 
    case 22 : 
    case 23 : 
    case 24 : console.log("Adulte");
    break;
    default : console.log("age non pris en compte");
}