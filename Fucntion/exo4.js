var readline = require("readline-sync");

console.log("----------------------");
ditBonjour("Matthieu", "FR");
console.log("----------------------");
ditBonjour("Tya", "Es");
console.log("----------------------");
ditBonjour("Milo", "eN");
console.log("----------------------");
console.log("----------------------");
var pseudo = readline.question("Quel pseudo voulez-vous ?");
var langue = readline.question("Quelle langue voulez-vous ?");
ditBonjour(pseudo,langue);
console.log("----------------------");

function ditBonjour(pseudo, langue){
    switch(langue.toLowerCase()){
        case "fr" : console.log("Bonjour " + pseudo);
        break;
        case "en" :console.log("Hello " + pseudo);
        break;
        case "es" : console.log("Hola " + pseudo);
        break;
        case "latin" : console.log("Salve " + pseudo);
        break;
        default : console.log("La langue demandée n'est pas paramétrée");
    }
}