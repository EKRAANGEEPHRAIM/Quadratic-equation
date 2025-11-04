var readline = require("readline-sync");

var saisie = readline.question("Quel mois de l'annee voulez-vous (en lettre) ?");

switch(saisie){
    case "janvier" :
    case "Janvier" : console.log("La correspondance est : 1"); 
    break;
    case "fevrier" :
    case "Fevrier" : console.log("La correspondance est : 2");
    break;
    case "mars" :
    case "Mars" : console.log("La correspondance est : 3");
    break;
    case "avril" :
    case "Avril" : console.log("La correspondance est : 4");
    break;
    case "mai" :
    case "Mai" : console.log("La correspondance est : 5");
    break;
    case "juin":
    case "Juin" : console.log("La correspondance est : 6");
    break;
    case "juillet" :
    case "Juillet" : console.log("La correspondance est : 7");
    break;
    case "aout" :
    case "Aout" : console.log("La correspondance est : 8");
    break;
    case "septembre" :
    case "Septembre" : console.log("La correspondance est : 9");
    break;
    case "octobre" :
    case "Octobre" : console.log("La correspondance est : 10");
    break;
    case "novembre" : 
    case "Novembre" : console.log("La correspondance est : 11");
    break;
    case "decembre" :
    case "Decembre" : console.log("La correspondance est : 12");
    break;
    default : console.log("Mois inexistant");
}