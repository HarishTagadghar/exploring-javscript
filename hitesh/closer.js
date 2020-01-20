

var closer = function (){
    var num = 1 ;
    return function(){ return num += 1};
}();

console.log(closer());
