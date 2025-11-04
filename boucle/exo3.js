var resultat = 0;

for(var compteur = 0; compteur <= 200 ; compteur = compteur + 2){
    resultat += compteur; //resultat = resultat + compteur;
}
// for(var compteur = 0; compteur <= 200 ; compteur = compteur + 1){
//     if(compteur % 2 === 0){
//         resultat += compteur;
//     } 
// }

console.log("La somme des 100 premiers nombres pair est égale à : "+ resultat);