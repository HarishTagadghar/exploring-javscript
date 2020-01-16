let myObject = {
    firstName: "harish",
    lastName: "tg",
    fullName: function(){
        return this.firstName + this.lastName
    }
}

console.log(myObject.fullName());

//if you want to call a funciton then you shoud have to assain parameters () at back;