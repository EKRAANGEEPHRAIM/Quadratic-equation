var readline= require("readline-sync");

var tableMultiplications = readline.questionInt("Quel table voulez-vous ? "); // i need a number

for(var i = 10 ; i >= 1 ; i--){
    console.log(i + " * "+ tableMultiplications +" = "+ (i*tableMultiplications)); // another way to write a multiplication
}