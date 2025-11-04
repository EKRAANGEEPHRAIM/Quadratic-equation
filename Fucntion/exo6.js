var readline = require("readline-sync");

var nombre1 = readline.questionInt("Quel est le premier nombre ? ");
var nombre2 = readline.questionInt("Quel est le deuxième nombre ? ");
var nombre3 = readline.questionInt("Quel est le troisième nombre ? ");
var nombre4 = readline.questionInt("Quel est le quatrième nombre ? ");
calculMoyenne(nombre1,nombre2,nombre3,nombre4);

function calculMoyenne(n1,n2,n3,n4){
    var moyenne = (n1 + n2 + n3 + n4) / 4;
    console.log("La moyenne des 4 nombres saisis au clavier est de : " + moyenne);
}