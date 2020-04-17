// example one
let familyone = ['john' , 'mark' , 'mary']
let familytwo = ['smith', 'bob' , 'candy']

let holefamily = [...familyone , ...familytwo]
console.log(holefamily);

// example two with spread and non-spread
let add = (a,b,c,d) => {
    return a+b+c+d
}
 let unspread = add(1,2,3,4)
 let spread = [1,2,3,4]

 console.log(add(...spread));
 
console.log(unspread);

