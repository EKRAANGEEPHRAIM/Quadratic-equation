var readline = require("readline-sync");
var classe = readline.question("Saisir la classe (Entre A et E) : "); // value is string

if(classe === "A" || classe ==="a" || classe === "B" || classe === "b"){
    console.log("numéro 1");
} else if(classe === "c" || classe === "C" || classe === "d" || classe === "D"){
    console.log("numéro 2");
} else if(classe === "e" || classe === "E" || classe === "f" || classe === "F"){
    console.log("numéro 3");
} else {
    console.log("Classe inconnue");
}

