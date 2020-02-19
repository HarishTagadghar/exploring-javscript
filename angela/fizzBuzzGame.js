let output = [];
// let count = 1;

function fizzbuzz(){

    for( var count = 1 ; count < 100 ; count++){
        if(count % 3 === 0 && count % 5 === 0 ){
            output.push("fizzBuzz");
        } else if ( count % 3 === 0 ){
            output.push("Fizz");
        } else if ( count % 5 === 0 ){
            output.push("BUzz");
        }else {
            output.push(count);
        }

    }

}

    console.log(fizzbuzz());

