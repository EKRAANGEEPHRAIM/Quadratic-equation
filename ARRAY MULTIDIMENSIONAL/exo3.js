var eleves = [
    ['Toto', 4, 17],
    ['Titi', 11, 12],
    ['Tata', 12, 14]
];

for(var i = 0 ; i < eleves.length ; i++){
    var moyenne = calculMoyenne(eleves[i]);
    console.log("La moyenne de : " + eleves[i][0] + " est : " + moyenne);
}

function calculMoyenne(tab){
    var moyenne=0;
    var nbNotes=0;
    for(var i = 0; i < tab.length; i++){
        if(typeof(tab[i]) === "number"){
            moyenne += tab[i];
            nbNotes++;
        }
    }
    moyenne /= nbNotes; // moyenne = moyenne / tab.length
    return moyenne;
}