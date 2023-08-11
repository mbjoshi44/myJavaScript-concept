// Promises

// Defination :- the promise is the javascript object, which refers to evatually complition of a tasl
// status three status
//1 pending : niether fulfilled nor rejected
//2 fulfilled
//3 ejected

//why 
// to stop callback hell

// how to create Promise

// const promise = new Promise((resolve, reject) =>{
//         resolve("yes you can do it")
// })
// setTimeout(() =>{
//     console.log(promise);
// },4000)

//  console.log(promise);

// how to setup a  function that will be callback when function has been fulfilled
// .then is always looking for resolve or fulfilled 
//if the promise is resolve .then imidiatly execute the function
//success callback
// promise.then((message)=>{
//    console.log(message );
// })

//resolve()  => then => invoke/call the success calback

// const promise = new Promise((resolve,reject)=>{
//     let isTrue = false;
//     if(isTrue)
//     resolve(isTrue);
// else
//     reject(isTrue)
// })

// promise
// .then(()=>{
//     console.log("HEHE Promise Resolved");
// })

// .catch(()=>{
//     console.log("OhOn Promise Rejected");
// })



//FETCH METHOD WITH PROMISES

//  let url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
// .then((res)=>res.json())
// .then((data)=>console.log(data))

// let data = res.json();
// console.log(res);
//Fetch method returns to a promise
// response.json() also return a promise
 

// async function greet(){
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data);
// }

// console.log("Before function call");
// greet();
// console.log("After function call");

//For react 
// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch('https://api.example.com/data')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
//     </div>
//   );
// }

// export default App;



