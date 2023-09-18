//Rest Operator
//rest operator use to handle function parameter
//its allows us to handle more function parameter 
// rest operator in js allows a funcn to  take  an idefinite number of  arguments and budle then in an array
//eg.

// function sum(...other){
//      console.log(other);
//      return a+b+c+other;
//    return other.reduce((accu,ele)=>{
//         return accu+ele;
//     })

// }
// console.log(sum(5,6,7));

//rest in object

let obj = {
    name:"moti",
    age:25,
    hobbies:["cricket","traveling","coding"]
}
//const{...rest} = obj // Destructring
//console.log(rest);



//SPREAD OPERATOR
// its qucikly copy the all the part of the exiting array and object on anathor array

// let array = ['moti','dimple','rudransh'];

// function newArray(arr){
//     console.log(...arr);
// }
// newArray(array)

// let newObj ={
//     ...obj,
//     age:26
// }
// console.log(obj);
// console.log(newObj);