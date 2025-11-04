var readline = require("readline-sync"); // récupére le module readline-sync

var moisEnChiffre = readline.questionInt("Quel mois de l'annee voulez-vous : ");

if(moisEnChiffre === 1){
    console.log("Le mois %d est Janvier",moisEnChiffre);
} else if(moisEnChiffre === 2){
    console.log("Le mois %d est Février",moisEnChiffre);
} else if(moisEnChiffre === 3){
    console.log("Le mois %d est Mars",moisEnChiffre);
} else if(moisEnChiffre === 4){
    console.log("Le mois %d est Avril",moisEnChiffre);
}else if(moisEnChiffre === 5){
    console.log("Le mois %d est Mai",moisEnChiffre);
}else if(moisEnChiffre === 6){
    console.log("Le mois %d est Juin",moisEnChiffre);
}else if(moisEnChiffre === 7){
    console.log("Le mois %d est Juillet",moisEnChiffre);
}else if(moisEnChiffre === 8){
    console.log("Le mois %d est Aout",moisEnChiffre);
}else if(moisEnChiffre === 9){
    console.log("Le mois %d est Septembre",moisEnChiffre);
}else if(moisEnChiffre === 10){
    console.log("Le mois %d est Octobre",moisEnChiffre);
}else if(moisEnChiffre === 11){
    console.log("Le mois %d est Novembre",moisEnChiffre);
}else if(moisEnChiffre === 12){
    console.log("Le mois %d est Décembre",moisEnChiffre);
}