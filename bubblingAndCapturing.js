// document.getElementById("outerMost").addEventListener("click" , ()=> {
//     console.log("outermost div clicked");
// },)


// document.getElementById("innerEle").addEventListener("click" , ()=> {
//     console.log("InnerELement div clicked");
// },)

// document.getElementById("innerMost").addEventListener("click" , ()=> {
//     console.log("innerMost  div clicked");
// },)

let outer =  document.getElementById("outerMost");
let innerEle = document.getElementById("innerEle");
let innerMost = document.getElementById("innerMost");

[outer,innerEle,innerMost].forEach((element) =>{
    addEventListener("click", function (e) {
        console.log(e.currentTarget);
    
        
    });
});

