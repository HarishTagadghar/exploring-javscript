let x = "2";

try{
    if( x == ""){ throw "plz write a number "}
    if(x<=3){ throw "the number should be greater then 3"}
    if(isNaN(x)){ throw "The value should be a number"}
    
}catch(err){
    console.log(err);
    
}finally{
    console.log("you are going on the way");
    
}