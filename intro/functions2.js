// function callme(){
//     console.log("Inside function")
// }
// callme();
// callme();

// let callme1 = function(a){
//     return a * 2;
// }

// // callme();
// let callme1 = a => {
//     return a * 2 ;
// }
// let callme2 = a =>  {
//     // code 
// };


// console.log( callme(10) ) ;


// let func = a => {
    //     // a = 10
    //     return console.log(2 * a); // 2 * 10 => 20
    // }
    
    // console.log( func(10) )


// js execution , hoisting, scope chain

// let r = console.log();
// console.log(r)
// function a(){
//     return 10/2 ;
// }

// function b(){
//     // return 2 * console.log("sdjdfjdfo"); // 2*undefined = NaN
// }
// console.log( b() ) // undefined

// let result = typeof(b) // function
// console.log(result)

// let , const

// var, function

// let a = 20 ;
// let b = 15 ;
// let test = function(){
//     let b = 10 ;
//     console.log(a + b)
// }
// b = 30;
// test();
/*

TDZ => Temporal dead zone
 Every container that gets created in the call stack goes through 2 Phases
 1) Creation phase
 2) Execution phase

 Creation Phase: 

   During the creation phase variables will get hoisted
   variables will be intialised with undefined values during creation phase ithat is what we call as hoisting.

 Execution phase: 
  The code gets executed sequentially


Hoisting: 

Variables which are declared with let/const keywords will be hoisted with undefined values and kept inside the temporal dead zone (TDZ)
*/

// let, const , var, function
// var x = 90 ;
// console.log(x)
// const y = "abc" ;
// let z = true ;
// function test(){
//     var a = 20 ;
//     let c = 100;
//     console.log(a + c + x);
//     console.log(x + y + z);
//     console.log("test function");
// }
// test();

// when you touch a variable which is inside the TDZ js will throw error ( can not access before intialisation)
// undefined , NaN

// function callme(){
//     console.log(y) // undefined
//     var y = 100 ;
//     let z = 200 ;
//     console.log(y + x + z) // cannot access
// };
// let x ;
// callme();

// let a = 10 ;
// let x = 70 ;
// function parent(a, b){
//     let y = 90;
//     function child(){
//         console.log(a + b + x, y)
//         var y ;
//     }
//     child();
// }
// parent();

