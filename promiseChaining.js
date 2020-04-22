let  add = (a,b) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(a<0 || b< 0 ) return reject('Number Must Be  Positive')
            resolve(a+b)
        }, 1000);
    })
}
add(1,1).then((sum1) => {
console.log(sum1);
return add(sum1 , 1)
}).then((sum2) => {
    console.log(sum2);
})
.catch((e) => {
    console.log(e);
    
})

// calling a promise inside a promise result is called promise chaining
// there is a better way to do this with async await