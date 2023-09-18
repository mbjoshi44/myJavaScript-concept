//js

//Clouser
// Clouser is the property of js where outer function's variable and parameter
//access by inner function even outer function return

//eg.

// function outerFn(){
//     let func = "i am outer function ";
//     function innerFn(){
//         console.log(`i am inner and comibine with ${func}`);
//     }
//     return innerFn;
// }
// let vare = outerFn();
// console.log(vare);

// vare();



// Why we use Clouser 
// Memory Efficiency


// function heavyDuty(index){
//     const bigArray = new Array(5000).fill("m");
//     console.log("very big Array");
//      console.log(bigArray[5]);
//     return bigArray[index];
// }

// heavyDuty(0);
// heavyDuty(20);
// heavyDuty(50);


// function optimizeHeavyDuty(index){
//     const optBigArray = new Array(7000).fill('mb');
//     console.log("very Big Array");
//     return function(index){
//         return optBigArray[index];
//     }
// }

//const newHeavyDuty = optimizeHeavyDuty();//calling this function  this function return a new function new function contains
//big array its a clouser array created once and reffence to the array
// newHeavyDuty(90);
// newHeavyDuty(50)
// newHeavyDuty(80)
// newHeavyDuty(100)

// in this apporch array created just once 

//IIfe immediate involve function

// (function hello(){
//     console.log("hello man");
// })()




