console.log("----------------------");
console.log(ditBonjour("FR") + "Matthieu");
console.log("----------------------");
console.log(ditBonjour("Es") + "Tya");
console.log("----------------------");
console.log(ditBonjour("eN") + "Milo");
console.log("----------------------");

function ditBonjour(langue){
    switch(langue.toLowerCase()){
        case "fr" : return "Bonjour ";
        break;
        case "en" : return "Hello ";
        break;
        case "es" : return "Hola ";
        break;
        case "latin" : return "Salve ";
        break;
        default : return "La langue demandée n'est pas paramétrée";
    }
}