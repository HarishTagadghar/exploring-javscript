for (let i = 0; i <= 15; i++) {
    if(i==10){ break;} // it just breaks the loop at iteration of 10;
    console.log(i);
}
for (let i = 0; i <= 15; i++) {
    if(i==10){ continue;} // first it breaks the loop at 10 and continue the loop at 11th itration;
    console.log(i);
}