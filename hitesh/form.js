function myfun(){
    var x = document.forms["form"];
let text = "";
var i; 
for (let i = 0; i < x.length; i++) {

    text += x.elements[i].value ;

    
}

document.getElementById("idd").innerHTML = text ;

}