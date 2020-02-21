let names = ['harish','nitsh','pawan','rahul']

names.forEach(function (item,index) {
    console.log(`${index + 1}. ${ item}`);
    
}) // when we call a function in a funciton is colled a call back funciton ex. we are collign a funciton in foreach function

for (let i = 0; i < names.length; i++) {
    console.log( `${i+ 1}. ${names[i]}`);
    
    
}