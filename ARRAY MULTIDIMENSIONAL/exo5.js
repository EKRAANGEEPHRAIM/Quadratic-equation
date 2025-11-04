var readline = require("readline-sync");

var p1 = ['Tya',21, false];
var p2 = ['Milo',30 , true];
var p3 = ['Lili',15 , false];

var characters = [p1,p2,p3];

var choice = -1 ;


while(choice !== 0 ) {
    menu();
    choice = readline.questionInt("What is your choice ?");
    switch(choice){
        case 1 : displayCharacters(characters)
        break;
            case 2 : 
            var Average = calculAverage(characters);
            console.log("The age average is  : " + Average);
        break;
        case 3 :
            var p = createCharacters(); // Creating a characterers
            characters.push(p);
            console.log("The chracter have created and added");
            displayCharacters();
            break;
            case 4 : 
            if(characters.length > 0) {
                displayCharacters( characters[characters.length-1]);
                var saisie = 0;
                while(saisie !== 1 && saisie !==2) {
                    saisie = readline.questionInt("Would really you delete ? 1yes or 2-no")
                }
            }



    }

}


/**
 * Function who allows to display a menu
 */

function menu(){

var txt = "*************************************"
txt += "1/ Display the characters \n";
txt += "2/ To calcul the average age \n";
txt += "3/ To add a character\n";
txt += "4/To delete a character\n";
txt += "5/ Display a character entered on the keyboard \n";
txt += "0/ Exit";
txt += "*****************************************";

console.log(txt);
}


/**
 * Function that allows to display a list of character;
 * @param {Array} tab ta : array of characters
 */

function displayCharacters(tab) {
    for(var i = 0 ; i < tab.length ; i++ ) {
        console.log("******************************")
        console.log("Perso" + (i + 1) + " : ");
        displayCharacters(tab[i]);
    }
}

function displayCharacters(tab) {
    console.log("Name : " + tab[0]);
    console.log("Age : " + tab[1]);
    console.log("Sex : " + ((tab[2]) ? "Male" : "Female"));
}

/**
 * Function allowing to calcul the age  average 
 * @param {Array} characters : array of characters
 * @returns {number} return the age average
 */

function calculAverage (characters){
    var average = 0;
    for(var i = 0 ; i < characters.length ; i++) {
        average += characters[i][1];

    }
    return average / characters.length;
}