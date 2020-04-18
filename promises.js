// promises are created to handle asyncronos callback hell (callback hell are nothing but calling a callback inside that call back and so on )
// how promises work

//                           fullfill       
//                        / 
//   promise  -- pending 
//                        \ 
//                           reject 

// useually when a promis is created it is in pending untill a resolve or reject function is called when resolve is called the promise is fulfilled and when reject is called the promise is rejected

// fist example

let simpleCallback = (callback) => {
    setTimeout(() => {
        // callback('a new error ' , undefined) // for error
        callback(undefined , [2,5,6]) // for result with no error
        // we cant call soth the callback function at the same time
    }, 2000);
}


simpleCallback((error,result) => {
    if(error) {
        return console.log(error);
    }
    console.log('success'+ result);
    
}) // without promises


let promiseCallback = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve([2,5,6])
    }, 2000);

})

promiseCallback
.then((resolve) => {
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
    
}) // with promises