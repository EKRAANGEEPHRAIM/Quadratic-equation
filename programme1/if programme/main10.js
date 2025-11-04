var age = 70;
var sexe = false;
var ville = "Paris";

if(age > 70 && ville === "Toulouse"){ // personne agées de toulouse
    if(sexe){ // sexe === null
        console.log("Personne agée de Toulouse de sexe Masculin");
    } else {
        console.log("Personne agée de Toulouse de sexe Féminin");
    }
} else {
    if(age <= 70 && (ville === "Paris" || ville === "Marseille")){
        if(sexe){
            console.log("Personne adulte de Paris ou Marseille de sexe Masculin");
        } else {
            console.log("Personne adulte de Paris ou Marseille de sexe Féminin")
        }
    }
}