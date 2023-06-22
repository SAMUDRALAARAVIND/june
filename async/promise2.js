/**
 * 1. Error handling
 * 2. Promise chaining 
 * 3. Static methods on Promise
 * 4. Async/await
 */

// class CustomException extends Error {
//     constructor(message) {
//         super(message);
//         console.log(this)
//         /*
//             {
//                name: "Error",
//                message: "random error",
//                stack: "" 
//             }
//         */
//         this.name = "CustomException"
//     }
// }

// let customException = new CustomException("random error")
// console.log(customException.name)
/*
    {
        name: "CustomException",
        message: "random error",
        stack: ""
    }
*/

// let error = new Error("custom error")
// error => {name: "", message: "", stack: ""}
// console.log(error.name)
// console.log(error.message)
// console.log(error.stack)

// class NullPointerException extends Error {
//     constructor(message){
//         // message is a pure string 
//         super(message);
//         this.name = ""
//     }
// }
// try {
//     // NullPointerException
// }
// catch(error) {
//     console.log(error)
// }


// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(a)
//     })
// })

// console.log(prom) // reject
// prom.catch((error) => {
//     console.log("error occured", error)
// })


// class A extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "A" ;
//     }
// }

// class B extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "B" ;
//     }
// }

// try {
//     // code can generate 2 types of errors
//     throw new B("some error")
// }
// catch(error) {
//     const p = document.createElement("p");
//     p.innerText = error.message ;
//     document.body.appendChild(p);
//     if(error.name === "A"){
//         p.style.color = "red" ;
//     }
//     else if(error.name = "B"){
//         p.style.color = "orange"
//     }
// }

// class Prom {
//     constructor(executor) {
//         this.state = "pending"
//         this.isThenCalled = false ;
//         executor(this.resolve, this.reject)
//     }
//     resolve = () =>{ 
//         this.state === "pending"  && (this.state = "fullfilled");

//         if(this.successCallback){
//             queueMicrotask(() => {
//                 this.successCallback();
//             })
//         }
//     }

//     reject = () => {

//     }

//     then = (successCallback) => {
//         this.successCallback = successCallback ;

//         return new Promise((resolve, reject) => {
            
//         }) ;
//     }
// }


// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject();
//     }, 2000)
// })

// function successCallback(data){
//     console.log(data, 'inside then')
// }

// let x = prom.then(successCallback)

// let y = x.then(() => {
//     console.log("success callback of x")
// })

// y.then(() => {
//     console.log("success callback of y")
// })

// y.catch(() => {
//     console.log("error callback of y")
// })

// x.catch(() => {
//     console.log("error callback of x")
// })

// setTimeout(() => {
//     console.log(y) // rejected
// }, 5000)

// prom => x => y => ... 


// prom(fullfilled) => successCallback => x(fullfilled)
// prom(rejected) => successCallback will not be executed at all => x(rejected)





/*

    x is a promise 
    when the successCallback is executed then x will be fullfilled

    when the successCallback is not executed then x will be rejected

*/

// pending

// console.log("some inforamtion")
// console.warn("some warning")
// console.error("some error")
// // throw new Error("some error")
// console.log("final statement")


// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("aravind");
//     }, 2000)
// })
// let x = prom.then((data) => {
//     let a = null ;
//     console.log(a.b);// throw new Error() ;
//     return "Vipul" ;
// })

// setTimeout(() => {
//     console.log(x) // {rejected, Error}
// }, 3000)





// prom.then((data) => { // x => ()
//     console.log(data) // aravind
// }).then(() => { // y => rejected
//     console.log("x is resolved")
// }).then(() => { // z => rejected
//     console.log("y is also resolved")
// }).catch(() => {
//     console.log("catch is called")
// }).finally(() => {
//     console.log("finally")
// })


// prom.then(() => {
//     console.log("success")
// })

// prom.catch(() => {
//     console.log("error")
// })

// prom.finally(() => {
//     // either the state becomes fullfilled / rejected
//     console.log("finally")
// })
