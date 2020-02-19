 function  calc(name , marks ) {
    let percentage = ( marks / 20 ) * 100
    if (marks > 20){
        return 'marks must be less then 20'
    } else if(marks > 15){
        return `${name} got ${percentage}% A grade`
    }else if ( marks <= 15 && marks >= 10 ){
        return `${name} got ${percentage}% B grade`
    }else if ( marks <= 10 && marks >= 5){
        return `${name} got ${percentage}% c grade `
    } else if ( marks <= 5 && marks >= 0) {
        return `${name} got ${percentage}% D grade`
    }else  {
        return "please enter the name"
    }
}

console.log(calc( 'harsih' , 50));
