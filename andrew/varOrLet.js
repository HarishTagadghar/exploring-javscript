// let is a block scope varible and var is a funcion scope varible
if (true) {
    var name = 'harish' //this name varible can be used outside of the if block  scope
    let age = 20 // this age varible cant be use outside of the if block scope
}

function a() {
    var num = 20 //this num varible cant be used outside of the function scope 
}

// same name of varible can be assined multiple time if we use var and it just grabes the last  varibe
// same name of varible cant be assined if we use let 

let firstPerson = 'mark'

// let firstPerson = 'jack'     // it gives a error if we use the same name multiple time in let varible

var secondName = 'mark'

var secondName = 'jack' // it dont give any error if we use the same name of varibe multiple times in var it just takes the last varible value