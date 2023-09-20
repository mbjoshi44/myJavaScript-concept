//JavaScript create an bydefault property called [[prototype]] to the object.
// javaScript contains many helper properties and methods which can use to complete task
// let array = [10,20,30,40,50];
// console.log(array.length);

// Prototype Inheritance
// By using prototype we can inherit one object propeties into other
//eg.

let human = {
  canfly:false,
  cantalk:true,
  canwalk:true
}

let person ={
    name:"moti",
    age:25
}

person.__proto__ = human

console.log(person.canfly) //also work

