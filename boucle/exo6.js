var slash = "";

//number of slash
for(var i = 1 ; i <= 20 ; i++){
    slash += "/";
}
//number of antiSlash
var antiSlash = "";
for(var i = 1 ; i <= 20 ; i++){
    antiSlash += "\\";
}

// To change between antislash and slash
for(var j = 1; j <= 5; j++){
    if(j%2 === 0){
        console.log(antiSlash);
    } else {
        console.log(slash);
    }
    
}