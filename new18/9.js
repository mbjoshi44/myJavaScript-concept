 //HIGHER ORDER FUNCTION
// A function which are accept another function as arguments or return a function are 
 // called higher function 
 // in below example cal are the higher order function which are accept 3 arguments 


// import { button } from "./callApplyBind";

 // two variables and one function
// function add(a,b){
//     return a+b;
//    }
   
//    function cal(a,b,opera){
//        return opera(a,b);
//    }
   
//    const sub =(a,b) => a-b;
//    // console.log(getarg(15,6,sub));
   
// //CONSTRUCTOR

//    function contact(color){
//         this.color = color,
//         this.name = "moti"
//    }
//    var newMem = new contact("blue")
//    // console.log(newMem);
   
   
   
//    //IIFE IMMEDIATLY INVOKE FUNCTION EXPRESSION
//    //A Function said to be an iife if a function immediatly called or run , its is also used for storing
//    // for private variable
//    // can can access or modifie using some methods or functions
//    let ans =   (function(){
//        let a = 12;
//        return {
//            getter: function(){
//                console.log(a);
//            },
//            setter:function(val){
//                a=val;
//            }
//        }
//    }
   
//    )();


var button = document.querySelector('button');

button.addEventListener('click',function(){
    console.log(this);
})