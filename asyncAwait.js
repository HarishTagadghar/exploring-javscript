let add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if ( a< 0 || b<0) return reject('number must be positive')
            resolve(a+b)
        } , 1000)
    })
}

let output = async () => {
    let sum1 = await add(1,1); // im using here await because add function returns a promise
    let sum2 = await add(sum1 , 1) ;
    return sum2
}

output().then((result) => {console.log(result)}).catch((e) => {console.log(e)})

// async await is a toole used to handle the promise 