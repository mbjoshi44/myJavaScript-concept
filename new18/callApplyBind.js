// this keyword is an special keyword which is store its values in different context
// refer window object

//eg

//this target or point 


//console.log(this); // global => window

//function thisKey(){
  //  console.log(this); // function => window
//}

// thisKey()


//diff b/w function and method
// a function written inside an object theb it's called as method

// let obj1 ={
//     name:"moti",
//     kyaHai: function(){
//         console.log(this); // inside an method => object
//     }
// }

// console.log(obj1.kyaHai)

//call
// let obj ={
//     name:"moti",
//     printfn:function(){
//         console.log(this.name);
//     }
// }

//  let obj1={name:"gc"}
// obj.printfn.call(obj1)

// function abc(val1,val2,val3){
//     console.log(this,val1,val2,val3);
// }

//apply
// let obj ={age:25}
// abc.call(obj,1,2,3)


// function abc(val1,val2,val3){
//     console.log(this,val1,val2,val3);
// }

// let obj ={age:25}
// abc.apply(obj, [1,2,3])//pass value in array that its
// in apply we can use only 2 parameters so we are using []

function abc(val1,val2,val3){
    console.log(this);
}

let obj ={age:25}
let binedMethod =  abc.bind(obj)

// binedMethod()