var force = 2;

// if(force < 3){
//     console.log("Mage");
// } else if (force < 6) { // 2 < force < 6
//     console.log("Archer");
// } else { // > 5 --> >= 6
//     console.log("Guerrier");
// }

if(force >= 6){ // > 5
    console.log("Guerrier");
} else if(force >= 3){ // 2 < force < 6
    console.log("Archer");
} else {
    console.log("Mage");
}