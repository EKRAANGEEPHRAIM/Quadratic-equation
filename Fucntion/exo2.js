var readline = require("readline-sync");

var nom = "Matthieu";
console.log("-----------------------");
ditBonjour(nom);
console.log("-----------------------");
console.log("-----------------------");
var nom2 = readline.question("Quel pseudo voulez-vous ? ");
ditBonjour(nom2);
console.log("-----------------------");

function ditBonjour(pseudo){
    console.log("Bonjour " + pseudo);
    console.log("Hello %s ", pseudo);
    console.log("Hola " + pseudo);
}