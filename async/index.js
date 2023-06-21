/*

box1 => TODO
box2 => IN_PROGRESS
box3 => COMPLETED

status=> COMPLETED

element = document.getElementByid(task.status)
element.appendChild(card);
*/


/*

callbacks
setTimeout
how user events were working behind the scenes ?
event loop
callback queue
microtask queue

*/

// function callme(a) {
//     console.log(typeof a) ;
// }

// let f = () => {
//     console.log("Inside f")
// }
// // callback function
// callme(f)

// type (string) , function

// function add(a, b, checkEvenOrOdd){
//     let result = a + b ;
//     // result => 30 => number of days in a month
//     function validate(days){
//         if(days > 0 && days <= 30) {
//             console.log("valid")
//         }
//         else {
//             console.log("invalid")
//         }
//     }
//     checkEvenOrOdd(result, validate);
// }
// function checkEvenOrOdd(result, validateDays) {
//     if(result % 2 === 0){
//         console.log("even", result)
//         result += 3 ;
//         validateDays(result) ;
//     }
//     else {
//         console.log("odd", result)
//     }
// }

// add(10, 12 , checkEvenOrOdd)

// add two number => check even or odd => validate days when even

// add numbers => checkEvenOrOdd => validate


// amazon  want to buy a laptop

// search => make a request to server(function) => show the data onto UI => (user has added two laptops onto cart)

// search() => fetch(), show()

// function fetch(show){
//     // code to make the network call 
//     // after 1s it receives the response 
//     // show();
// }

// fetch(show);


// biryani on zomato 
// place order => payment => success message
// type pin number => delay => success message


// function placeOrder(payment, showSuccessMessage) {
//     // save data into database 
//     if(orderPlacedSuccessfully){
//          payment(showSuccessMessage)
//     }
   
// }

// function payment(showSuccessMessage){
//     // code for payment
//     if(paymentSuccess){
//         showSuccessMessage();
//     }
// }
// function showSuccessMessage(){

// }

// placeOrder(payment, showSuccessMessage)



// timers 

// function callme() {
//     console.log("Hello")
// }
// console.log("before setting timer")
// setTimeout(callme, 5000); 
// console.log("after setting timer")
// 5000ms => 5s

// 1, 4, 2, 3, 21

// let x = 20;  // 21
// console.log("1")
// let f1 = () => {
//     console.log("2");
//     x++; // x = 21
// }
// let f2 = () => console.log("3", x)
// setTimeout(f1, 1000);// f1 = 12h:00m:00s:000ms PM => 12h:00m:01s:000ms
// setTimeout(f2, 1002);// f2 = 12h:00m:00s:002ms PM => 12h:00m:01s:002ms
// console.log("4")

// output : 1 , 5, 3, 2, 4
// t = 0ms
// console.log(1)

// setTimeout(() => { // #100
//     console.log(3) // t = 302ms
//     setTimeout(() => { // #200
//         console.log(2)
//     }, 200)
//     // #200 t = 303ms => t = 503ms
// }, 300)
// // #100 => t = 1ms => 301ms

// setTimeout(() => { // #300
//     console.log(4)
// }, 550)
// // #300 => t = 2ms => 552ms


// console.log(5)

// console.log(1)
// setTimeout(() => {
//     console.log(3)
// }, 0)
// console.log(2)

// 1, 3, 2, 7
// function f(){ // #100
//     console.log(2)
// }
// console.log(1) // 
// setTimeout(() => { // #200
//     console.log(7)
// }, 0)
// queueMicrotask(f)
// console.log(3)

// callback queue = [#200]
// microtask queue = [#100]

// #100() => 2
// #200() => 7

// 4 , 1, 2, 3
// setTimeout(() => { // #100
//     console.log(1)
//     queueMicrotask(() => { // #200
//         console.log(2)
//     })
// })

// queueMicrotask(() => { // #300
//     console.log(4)
//     setTimeout(() => { // #400
//         console.log(3)
//     })
// })
// callbackqueue = []

// microtask queue = []

// #300() => #100() => #200() => #400()



// const button = document.getElementsByTagName("button")[0] ;
// console.log(1)
// button.addEventListener("click", () => {
//     console.log(2)
// })
// console.log(3)


// let obj = {
//     x:10,
//     a: function() {
//         console.log(this.x);
//     },
//     b:function() {
//         console.log(this) // obj

//       let f = () => {
//         console.log(this); // obj
//       }

//       function callme(){
//         console.log(this) // obj
//         let g = () => {
//           console.log(this); // obj
//         }
//         g();
//       }

//       callme();
//       f();

//       console.log(this.x); // 10
//     }
//   }
  
// var x = 100;
// obj.b();

// let o = {
//     x: 10,
//     f: function(){
//         console.log(this) // o
//         function callme(){
//             console.log(this) // o => window
//         }
//         callme();
//     }
// }
// o.f()

// console.log(this === window)
// const obj = {
//     name: "John",
//     sayHello: () => { // lexical parent => GEC
//         // this = window
//       console.log("Hello, " + this.name); // "this" refers to the enclosing scope, not the object
//     }
// };
  
// obj.sayHello(); // Output: Hello, undefined

// function call(a){
//     return (x) => {
//         return (z) => {
//             // z = 11, x = 20, a = 10
//             console.log(x  + a + z)
//         }
//     }
// }
// call(10)(20)(11); 
// result(20);