var age = 18;
var taille = 175;
var pays = "France";

if(age > 16 && taille > 160 && (pays ==="France" || pays === "france" )){
    // test with logic operator
    console.log("apte");
} else {
    // else
    console.log("inapte");
}