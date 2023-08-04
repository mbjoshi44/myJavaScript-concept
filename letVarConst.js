// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// let and const both are the part of  ES6(2015);
 // redeclared means
 // let x = "moti";

 // let x = 5;  not possible with let and const use with var;
 // block scope means;

 //{
    //let x = 30l

 //}
 // console.log(x);  not possible because out of scope


 // With let, redeclaring a variable in the same block is NOT allowed:
 //var x = 2;   // Allowed
//let x = 3;   // Not allowed

//{
//let x = 2;   // Allowed
//let x = 3;   // Not allowed
//}

//{
//let x = 2;   // Allowed
//var x = 3;   // Not allowed
//}



//  console.log(name);  error Uncaught ReferenceError: Cannot access 'name' before initialization
  // console.log(newName);  //undefined
//  let name = "moti";
//var newName = "joshi" ;


// CONST

// connot be reassign , redecalar block scope
// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp