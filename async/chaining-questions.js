
/*
Question 1: 
let prom1 = new Promise((resolve) => {
    resolve({name: "Vipul singh"})
})

let x = prom1.then((data) => {
    console.log(data) // {name: "Vipul singh"}
    console.log(data.x.y)// throw new Error();
    // x => {rejected, Error}
    return {name: "Vijay"}
})

x.then((data) => {
    console.log(data) // will not be executed
})

let y = x.catch((data) => {
    console.log(data) //  Error
    return {name: "Diptendu"}  // y => {fullfilled, {name:"Diptendu"}}
})

y.then((data) => {
    console.log(data) // data => {name: "Diptendu"}
})
*/

let prom = new Promise((resolve, reject) => {
    resolve("a")
})

prom.then((data) => {
    console.log(data)
    return data + "c" ; // "ac"
})
.then((data) => { // data = "ac"
    console.log(data) // "ac"
    // return undefined;
})
.then((data) => { // data = undefined
    console.log(data.a) // undefined.a Error
    return {name: "aravind"}
})
.catch((data) => {
    console.log(data) // data => Error
    return {name: "something"} // 
})
.then((data) => {
    console.log(data) // {name: "something"}
    return {...data, age: 22}
})
.finally(() => {
    console.log("finally")
})


