/*
1. async-await 
2. static methods in Promise
3. JSON methods
4. fetch API
*/

/*
    1. task1 (fetching the geolocation of the user) (2s)
    2. task2 (print the lat and lng on to the UI)
    3. after task to is done create a paragraph and append it inside 
*/




function getLocation(){
    return new Promise((resolve, reject) => {
        let successCallback = (position) => {
            resolve(position) ;
            /*
                1. to mutate the state of the promise from pending => fullfilled 

                2. if there's any succescallback attached the method will be pushed into microtask queue
            */
        }
        let errorCallback = (error) => {
            reject(error);
        }
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    })
}

// let locationPromise = getLocation();

// locationPromise.then((position) => {
//     let lat = position.coords.latitude
//     let lng = position.coords.longitude
//     return `Latitude: ${lat} and Longitude: ${lng}`;
// }).then((data) => {
//     let p = document.createElement("p");
//     p.innerText = data ;
//     document.body.appendChild(p);
// }).catch((error) => {
//     console.log({error})
//     document.write("failed to fetch locatioon");
// })

// function somePromise1(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("aravind")
//         }, 3000)
//     })
// }

// function somePromise2(name){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(name + " "+"samudrala")
//         }, 2000)
//     })
// }

// somePromise1().then((data) => {
//     // data = aravind 
//     let x = somePromise2(data)
//     x.then((data) => {
//         // data = "aravind"   ""
//         console.log(data)
//     })
// })

// async function solve() {
//     let name = await somePromise1(); // after 3s name = "aravind"
//     let fullName = await somePromise2(name);
//     // second promise will settled down after 2s {fullfilled, aravind samudrala}
//     console.log(fullName)
// }

// solve();


// JSON methods 

/**
 * login => username, password
 */


// 1M => serever(database) 

// {
//     username: "aravind",
//     password: "ataudndjieooe"
// }

// string  => software => bitstream
                        

// {
//     email: "aravind@gmail.com",
//     age: 22
// }

// 1001000001010010101010001001001001 => 

/*

client => server
object => string => software => bitstram => sent to the server


server => client

bitstream => software => string => object

*/

// let obj = {
//     a: 10,
//     b: 20
// }

// const parsedString = JSON.stringify(obj);
// console.log(parsedString)

// let str = '{"name": "aravind", "age": 22}';
// let parsedObject  = JSON.parse(str);
// console.log( parsedObject.name)


// Static methods in Promises 

// class Test {
//     method1(){
//         console.log("method1")
//     }

//     static method2(){
//         console.log("method2")
//     }
// }
// let t = new Test();

// Test.method2();

/**
 * resolve method takes data and then returns a fullfilled promise with the data as whatever we pass into resolve static method
 * 
 * if we pass another promise as an argument to static resolve method it returns the same promise 
 */

// function resolve(obj){
//     // obj => function, number, undefined, string, boolean, object,
//     if(obj instanceof Promise) return obj ;
    
//     return new Promise(resolve => {
//         resolve(obj)
//     })
// }
// let y = new Promise(() => {}) ;
// let x = resolve(y);
// console.log(x === y) // {fullfilled, 10}

// let prom = new Promise((resolve) => {
//     setTimeout(() => {
//             resolve("aravind")
//     }, 2000);
// })
// let y  =new Promise(() => {})
// // let x = Promise.resolve(y);

// // console.log(x === y) // {fullfilled, 10}

// function reject(obj) {
//     return new Promise((_, reject) => {
//         reject(obj)
//     })
// }

// let x = Promise.reject("20")
// console.log(x)

/*
let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("manjeeth")
    }, 2000)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("2")
    }, 1000)
})

let c = new Promise(resolve => {
    setTimeout(() => {
        resolve("c")
    }, 1000)
})

let x = Promise.all([a, b, c])
setTimeout(() => {
    console.log(x) // {rejected, "manjeeth"}
    // {fullfilled, ["a", "2", "c"]}
}, 4000);
*/


/**
 * Promise.all() will take a list of promises and returns another promise say `x` 
 * 
 * `x` will be resolve when all the promises in the list are resolved with data as array of resolved data.
 * 
 * `x` will be rejected when atleast one promise in the list is rejected with the data of with the one promise rejected
 * 
 */



// Promise.any 

/*
let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("manjeeth")
    }, 2000)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("2")
    }, 2000)
})

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("c")
    }, 1000)
})

// any method task is to check if any promise is fullfilled => figures out the earliest resolved promise.
let x = Promise.any([a, b, c])

setTimeout(() => {
    console.log(x) // {rejected, []}
}, 3000)

x.catch(data => {
    console.log(data)
})
*/

// Promise.race (to figure out the earliest settled promise)
/*
let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("manjeeth")
    }, 2000)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2")
    }, 1000)
})

let c = new Promise(resolve => {
    setTimeout(() => {
        resolve("c")
    }, 1000)
})
// b => {rejected , "2"}
// b => {fullfilled, "2"}
let x = Promise.race([a, b, c])
setTimeout(() => {
    console.log(x)
}, 2000)
*/




// async function callme(){
//     console.log("0")
//     let a =  await new Promise(resolve => setTimeout(resolve, 1000))
//     console.log("3", a)
//     let b =  await new Promise(resolve => setTimeout(resolve, 2000))
//     console.log("4", b)
//     return 10; 
// }

// console.log(1)
// let x = callme() ; // 3s
// console.log(2, x)

// setTimeout(() => {
//     console.log(x) // {fullfilled, 10}
// }, 4000)

async function callme(){
    console.log(1)
    let a = await new Promise((resolve) => {
        console.log(2)
        // resolve(3);
    })
    console.log(a, 4)
    let b = await new Promise(resolve => {
        console.log(5)
        setTimeout(() => {
            resolve(20)
        }, 2000)
    })
    console.log(b  + a);
    // return undefined ;
}

console.log(0)
let x = callme();
console.log(9)
console.log(x) // {pending}
x.then((data) => {
    // data = undefined
    console.log(data)
})

// 0, 1, 2, 9,Promise<Pending>,3 _ 4, 5, 23, undefined  
