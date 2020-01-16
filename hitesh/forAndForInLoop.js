 let message = "";
 let inmessage = [] ;

//   here im using formates like string and array because in loop it runs the itration
//   till the end of the loop and dont save all the itrations just displays the last itration
//    there for i have used here message and inmessage varibles to save the data for every itration;

 let myArray = ["john","mark","sandy","jonson",];

 for (i=0; i< myArray.length ; i++){
     message +=  myArray[i] +",";
 }

 for (i in myArray){
    inmessage += myArray[i] +",";
 }
 //here in forin loop it automatically assiens all three conditions of for loop just like i = 0 ; i < arrayLength ; and incrment 1  by i++ 
 console.log(inmessage,message);
 