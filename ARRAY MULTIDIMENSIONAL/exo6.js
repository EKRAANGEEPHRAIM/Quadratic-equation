var readline = require("readline-sync");

var p1 = ['Tya', 21 , false];
var p2 = ['Milo', 30, true];
var p3 = ['Lili', 15, false];
var persos = [p1,p2,p3];

var choix = -1;
while(choix !== 0){
    menu();
    choix = readline.questionInt("Quel est votre choix ? ");
    switch(choix){
        case 1 : afficherPersos(persos)
        break;
        case 2 : 
            var moyenneAge = calculMoyenneAge(persos);
            console.log("La moyenne d'âge est : " + moyenneAge);
        break;
        case 3 : 
            var p = creerPerso();//création d'un tableau de personnage
            persos.push(p);//ajout du personnage à la fin du tableau de personnages
            console.log("Le personnage a été ajouté");
            afficherPerso(p);
        break;
        case 4 :
            if(persos.length > 0){
                afficherPerso(persos[persos.length-1]);
                var saisie = 0;
                while (saisie !== 1 && saisie !== 2){
                    saisie=readline.questionInt("Voulez-vous vraiment supprimer ? 1 : oui - 2 : non ");
                }
                
                if(saisie === 1){
                    persos.pop();
                    console.log("Le personnage a bien été supprimé");
                } else {
                    console.log("Annulation");
                }
            } else {
                console.log("Le tableau est vide");
            }
        break;
        case 5 : 
            var nom = readline.question("Quel est le nom recherche ? ");
            var indice = recherchePerso(nom,persos);
            if(indice !== -1){
                afficherPerso(persos[indice]);
            } else {
                console.log("Le personnage ayant le nom " + nom + " n'existe pas");
            }
        break;
        case 0 : console.log("A +");
        break;
        default : console.log("Cas non pris en compte");
    }
}


/**
 * Fonction permettant d'afficher le menu
 */
function menu(){
    var txt = "*****************************************\n";
    txt += "1/ Afficher les personnages\n";
    txt += "2/ Calcul de la moyenne d'âge\n";
    txt += "3/ Ajouter un personnage\n";
    txt += "4/ Supprimer un personnage\n";
    txt += "5/ Afficher un personnage saisi au clavier\n";
    txt += "0/ Quitter\n";
    txt += "*****************************************";
    console.log(txt);
}

/**
 * Fonction qui permet d'afficher une liste de personnages
 * @param {Array} tab tab : tableau de personnages
 */
function afficherPersos(tab){
    for(var i = 0 ; i < tab.length ; i++){
        console.log("********************");
        console.log("Perso " + (i + 1) + " : ");
        afficherPerso(tab[i]);
    }
}

/**
 * Fonction permettant d'afficher un personnage
 * @param {Array} tab tab : tableau contenant les informations d'un personnage
 */
function afficherPerso(tab){
    console.log("Nom : " + tab[0]);
    console.log("Age : " + tab[1]);
    console.log("Sexe : " + ((tab[2]) ? "Homme" : "Femme"));
}

/**
 * Fonction permettant de calculer la moyenne d'âge des personnages
 * @param {Array} persos persos : tableau de personnages
 * @return {number} returne la moyenne d'âge
 */
function calculMoyenneAge(persos){
    var moyenne = 0;
    for(var i = 0 ; i < persos.length ; i++){
        moyenne += persos[i][1];
    }
    return moyenne / persos.length;
}

/**
 * Fonction permettant de créer un personnage
 * @return {Array} retourne un tableau contenant les informations d'un personnage
 */
function creerPerso(){
    var perso = [];
    perso.push(readline.question("Quel est le nom ? "));
    perso.push(readline.questionInt("Quel est l'age du personnage ? "));

    var sexeInt = 0;
    while (sexeInt !== 1 && sexeInt !==2){
        sexeInt = readline.questionInt("Quel est le sexe ? (1 : homme / 2 : femme)");
    } //on sort quand sexeInt est égal à 1 ou égal à 2
    if(sexeInt===1){
        perso.push(true);
    } else {
        perso.push(false);
    }
    return perso;
}

/**
 * Fonction permettant de récupérer la position d'un personnage
 * @param {String} nom  nom : le nom recherché
 * @param {Array} tab tab : le tableau de personnages
 * @return {number} retourne l'indice du tableau ou -1 si non trouvé
 */
function recherchePerso(nom, tab){
    for(var i = 0 ; i < tab.length ; i++){
        if(tab[i][0].toLowerCase() === nom.toLowerCase()){
            return i;
        }
    }
    return -1;
}