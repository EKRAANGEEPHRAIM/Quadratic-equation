var readline = require("readline-sync");

var age = 17;
console.log((age < 18) ? "mineur" : "majeur");

var sportif = false;
console.log((sportif) ? "bien" : "Devrait faire du sport");

var sexe = false;
var sexeEnMot = (sexe) ? "Femme" : "Homme";
console.log(sexeEnMot);

var saisie1 = readline.questionInt("Choisir un nombre : ");
var parite = (saisie1 % 2 === 0) ? "pair" : "impair";
console.log("Parite : " + parite);

var saisie2 = readline.questionInt("Choisir un deuxieme nombre : ");
var divisiblePar4 = (saisie2 % 4 === 0) ? "divisible par 4" : "non divisible par 4";
console.log(divisiblePar4);