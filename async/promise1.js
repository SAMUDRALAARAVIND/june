// Promises
// Promise => class / constructor functions
// console.log(Promise)
/*
class CustomPromise {
    constructor(x){
        // x = #100 = function
        // x should be a function
        x(this.resolve, this.reject) 
    }
    resolve(){
        console.log("inside resolve")
    }
    reject(){
        console.log("inside reject")
    }
}

const executor = (a, b) => { // #100
    console.log(typeof a , typeof b)
    console.log("inside executor")
}

let promise1 = new CustomPromise(executor) // #100
*/

// const executor = (resolve, reject) => {
//     queueMicrotask(() => {
//         reject();
//     })
//     setTimeout(() => {
//         resolve();
//     })
// }

// let promise1 = new Promise(executor) 

// queueMicrotask(() => {
//     console.log(promise1) 
// })

/* 
Every Promise object will have 3 states 

1. pending
2. fullfilled
3. rejected

12:30AM

pending

12:29     pending
12:31AM   fullfilled 
12:31AM   rejected
*/

// let arr = [] ;
// class Test {
//     constructor(){
//         console.log(this) 
//         this.a = 10 ;
//         this.b = 20; 
//         console.log(this)
//         arr.push(this);
//     }
// }

// let t = new Test() ;
// console.log(t === arr[0])
// console.log(t)

/*
class Test {
    constructor(executor){
        // #300 = this = {}
        this.state = "pending" ; // #300 = this = {state : "pending"}
        executor(this.resolve, this.reject);
    }
    resolve = () => {
        // this = #300 => {state: "fullfilled"}
        this.state === "pending" && (this.state = "fullfilled") ;
    }
    reject = () => {
        this.state === "pending" && (this.state = "rejected") ;
    }
}

function executor(resolve, reject) {
    // #300 = {state: "pending"}
    resolve();// #300 = {state: "fullfilled"}
    reject();// #300 = {state: "fullfilled" }
}

let obj = new Test(executor) // #300
// obj = #300 
console.log(obj.state) // #300.state = "fullfilled"

*/



// function resolve(){
//      1. mutate the status of the promise pending => fullfilled 
//      2. add the successLister(function/method) into microtask queue
// }

// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000)
// });

// function successCallback(){
//     console.log("Inside resolve listener")
// }

// prom1.then(successCallback) // attached successCallback for prom1

// console.log(prom1) // pending



// setTimeout(() => {
//     console.log("after one second")
// }, 1000)
// console.time("xyz") // t = 0s
// for(let i = 0; i < 10e9; i++) {
    
// }
// console.timeEnd("xyz") // t = 10s

/*
class Prom {
    constructor(executor){
        this.state = "pending";
        executor(this.resolve, this.reject)
    }

    resolve = (data) => {
        console.log("inside resolve method")
        // task1 is to mutate the state 
        this.state === "pending" && (this.state = "fullfilled")
        // task2 is the push the successCallback into microtask queue
        if(this.successCallback){
            queueMicrotask(() => {
                // adding this function into microtask queue
                this.successCallback(data);
            })
        }
    }

    reject = (data) => {
        this.state === "pending" && (this.state = "rejected")
        if(this.errorCallback){
            queueMicrotask(() => {
                this.errorCallback(data);
            })
        }
    }

    then = (successCallback) => {
        // task of then method is to attach the successCallback
        console.log("inside then method")
        this.successCallback = successCallback ;
    }

    catch = (errorCallback) => {
        this.errorCallback = errorCallback
    }
}

let p = new Prom((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000)
})

p.then(() => {
    console.log(p) // fullfilled
    console.log("successcallback method")
})
*/



/*
load list of products from some remote server(delay 3s)

1. fetch()

*/

// function fetch() {
//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data loaded after 3s")
//             reject();
//             /*
//                 1.  Mutate the state of the promsie form pending => rejected
//                 2.  Push the errorCallback method into microtask queue
//             */
//         }, 3000)
//     });

//     return prom ;
// }

// let prom = fetch()
// // after 3s prom object will be fullfilled 

// prom.then(() => {
//     console.log("success")
// })

// prom.catch(() => {
//     console.log("failure")
// })

// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve({name: "aravind"})
//         let data = [
//             {
//                 name: "laptop",
//                 price: 200,
//                 avilable: true
//             },
//             {
//                 name: "phone",
//                 price: 300,
//                 avilable: false
//             }
//         ]
//         reject(data)
//     }, 3000)
// })

// prom.then((data) => {
//     console.log(data)
//     console.log("success listener")
// })

// prom.catch((data) => {
//     console.log("error callback")
//     console.log(data)
// })

// which function will decide to pass some data into resolve or reject ? executor method
/*
function makeNetworkCall(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const responseData = [
                "mumbai",
                "hyderabad",
                "bangalore",
                "chennai",
                "delhi",
                "warangal"
            ]
            resolve(responseData)
        }, 2000)
    })
}

const container = document.getElementById("cities-container");

function appendDataOntoUi(citiesList) {
    citiesList.forEach(city => {
        const p = document.createElement("p");
        p.innerText = city ;
        container.appendChild(p);
    })
}

let promise = makeNetworkCall(); // this will return a promise

promise.then((data) => {
    appendDataOntoUi(data)
})
*/
// write the code to make network call and display the received cities data in the UI 


let objects = [
    {
        age: 10
    },
    {
        age: 1,
    },
    {
        age: 12,
        name: "aravind",
        college: "abcd"
    },
    {
        age: 3
    }
]

objects.sort((a, b) => {
    return a.age - b.age ;
})

console.log(objects)
