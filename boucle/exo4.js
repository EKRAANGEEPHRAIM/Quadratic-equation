var readline = require("readline-sync");

var factorielle = readline.questionInt("Quelle factorielle voulez-vous ? ");

var resultat = 1;
for(var i = 1 ; i <= factorielle ; i++){
    resultat = resultat * i;

    var message = "";
    message += i;
    if(i === 1){
        message += "er";
    } else {
        message += "ème";
    }
    message += " passage - total : "+ resultat;
    console.log(message);
    // console.log(i+"ème passage - total : "+ resultat);
}