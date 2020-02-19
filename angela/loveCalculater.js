function love(){
    let cal = Math.floor(Math.random()*100)+1;
    if(cal < 50){
        return (`ramesh dont love suresh ${cal}%`)
    }else {
        return (`ramesh love's suresh ${cal}%`)
    }

  
    
}

console.log(love());
