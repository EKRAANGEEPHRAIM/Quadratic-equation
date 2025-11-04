/**
 * Main
 */
ligneTirets();
console.log("Bonjour");
afficherLignes();
console.log("Coucou");
afficherLignes();
console.log("Salut");
ligneTirets();

/**
 * Fonctions
 */
function ligneTirets(){
    var txt = "";
    for(var i = 0; i < 30 ; i++){
        txt += "-";
    }
    console.log(txt);
}


//depending on ligneTirets
function afficherLignes(){
    for(var i = 0; i < 10; i++){
        ligneTirets();
    }
}