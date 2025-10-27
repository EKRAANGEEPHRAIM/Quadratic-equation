function resolveEquation () {
    /*
    1) I declared 5 variables named a , b  ,c result and a variable called message who will change value later that is because , 
    i use let to declare him.

    2) I used the DOM to browse my HTML elements . 
    I selected them using javascript . 
    Here, i selected them depending their ID.
     
    3) I used "Number's function" to convert the values into number.
    But before all  i had to retrieve the value'element with  the method ".value".

     */

    const a = Number(document.getElementById('A').value) ;
    const b = Number(document.getElementById('B').value) ;
    const c = Number(document.getElementById('C').value) ;
    const result= document.getElementById('result');

    let message = "";

    // here we will check each condition
    if( a === 0){
        if(b === 0){
            message ="there is nothing solution";

        }else{
            message= `there is one solution : x = ${-(c/b)} ` ;

        }

    } else{

        /*

        */ 
        let delta = b*b - (4* a *c);
        let x1 = (-b - Math.sqrt(delta))/(2*a); // I used the function Math.sqrt for to have the square root of delta
        let x2 = (-b + Math.sqrt(delta))/(2*a);

        if(delta > 0) {
            message = `there are  two solution : x1=  ${x1.toFixed(2)}
             and
            x2 =${x2.toFixed(2)}`; // I used the function toFixed() for to have 2 digits after the decimal point

        }
        else if (delta === 0) {
            let x = -b/(2*a);
            message=`there is one solution  x= ${x.toFixed(2)} ` 
        }
        else{
            message="there is nothing solutions."
        }

    }
    result.textContent = message; 
}
