
console.log(__dirname);
var two = {
    name: 'harish',
    age: 19
}

var one = ['hey', 'hi', two];

// var onee = Boolean ;
// var twoo = String ;
// var three = undefined;
// var four = 1:Number ;
// var  five = null ;

for (let i = 0; i < one.length; i++) {
    const element = one[i];
    // console.log(element);

}

two["place"] = "vlaue";

console.log(one[0]);
// mockData is a Object
// Object is  key= value
var mockData = {
    name: 'harish',
    // name is a property for mockData
    // harish is a value of name property in mockData

    getName: function () {
        return "rahul";
    }
    // getname is ta method for mockData
    // unnamed function is a value for getname in mockData
}

// console.log(mockData.getName());

// Array is index value 

var collectionData = [100000, true, 'john', ['name', 'lastName']];
// var collectionData = [ 0,  1,  2, 3];

collectionData[3]
// whatever there is in array is element 
var data = [{
    name: 'harish',
    age: 19
},
{
    name: 'nitesh',
    age: 20
},
{
    name: 'pawan',
    age: 20
},
{
    name: 'rahul',
    age: 24
}
];
function name() {

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log(element);
        
        if ('harish'=== data.name) {
            console.log(element);
        }
       

    }



}
name();



var string = 'abcdef ghifj    ';
var split = ' a,b,c ';
var Number = '123456'
var length = string.length;
var location = string.indexOf(5);
var search = string.search('5');
var slice = string.slice(0,5);
var replace = string.replace('a','z');
var REPLACE = string.replace(/A/i,'z');
var multireplace = string.replace(/f/g,'z');
var capital = string.toUpperCase();
var small = string.toLowerCase();
var trim = string.trim();
var lastLocation = string.lastIndexOf('f');
var connect = string.concat("hey" + Number);
var position = string.charCodeAt(2);
var simplePositon = string[2];
var splitedV = split.split(",")
console.log();



var person = new Object();
person.name = 'rahul';

// console.log(person);



var obj = {
    name:'harish',
    age:19
}
obj.age = 10;
// delete obj.name;
// console.log(obj);

var person = {
    firstName : "harish",
    lastName : "tg",
    fullName : function(){
        return this.firstName + this.lastName;
    },
    get FULLNAMES() {
        return this.firstName + this.lastName;
    }
};

// console.log(person.FULLNAMES);



function persons(first , last,age){
    this.firstName = first;
    this.lastName = last ;
    this.age = age;
}

var harish = new persons("harish","tg",19);

// console.log(persons);



// es5 javascript
var fun = function (a,b) {
    return a * b 

};
var xx =fun(2,3);

// es6 javascript 
const xz = (x,y) => { return x + y} ;
const x = (x,y) => x + y ;

const xy = x(2,5)
console.log(xx);
