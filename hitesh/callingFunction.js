// first method

function myFunction(parametes){
    let output = 2 + parametes;
    return output
}

console.log(myFunction(2));

// second method

let myFunctions = function (parametes){
    let output = 2 + parametes;
    return output;
}

console.log(myFunctions(2));

// third maethod
//invoking the funciton

let myname = function (parametes){
    let output = 2 + parametes;

   return output ;
   
}(2);

//we cannot invoke a funcion my "function name" it should be in a "varible"

console.log(myname);
