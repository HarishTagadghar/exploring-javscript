//higher order function is a funcion which takes functions as input in another functions

function add(num1,num2){
    return num1+num2
}
function multiply(num1,num2){
    return num1*num2
}

function calculater(num1,num2,myfunction){
    return myfunction(num1,num2)
}

console.log(calculater(5,4,multiply));
