// let user = {
//     email: 'aravind@gmail.com',
//     password: true
// }
// to create a key 
// to update a key's value 
// to delete a key,value pair
// let x = "password" ;
// user["password"]
// console.log(user.password) // undefined
// undefined | not defined
// let a ;
// console.log(a.abc) // undefined
// arr = []
// console.log(user.abc.xyz) // undefined

// mobile
// device details => processor, camera, ram, storage, battery 
// let product = {
//     name: 'Redmi',
//     model: '8 Pro',
//     price: 15000,
//     details: {
//         processor: 'snapdragon 780',
//         ram: '6GB',
//         camera: '16MP',
//         storage: '128GB',
//         battery: '4500mAh'
//     },
//     colors: [
//         "black",
//         "white",
//         "gray"
//     ],
//     available: false
// }


// if(product.available){
//     console.log("Product available")
// }
// else {
//     console.log("Not available")
// }

// {key: value}, value => value can be of any data type 

// let x = false ;
// + => 2 + 4 => binary
// ++ => unary x++, ++x
// oparand1 ? oparand2(if) : oparand3(else)
// console.log(2 + 4)
// let result = x ? 2 : 4
// console.log(result)

// let result = x ? console.log("inside if") : console.log("Inside else ")
// console.log(result)
// if(x){
//     console.log("inside if")
// }
// else {
//     console.log("inside else")
// }

// let x = '' ;
// x ? console.log("inside if") : console.log("inside else")

// iterate 

// let user = {
//     username: 'aravind',
//     password: 123
// }
// let arr = [3, 4, 5, 6] 
/*
    [3, 4, 5, 6] 
     0  1  2  3
*/

// for of loop iterates on the values of data structure 
// for in  loop iterates on the keys ..


// for(let x of arr) {
//     console.log(x)
// }

// for(let x in arr) {
//     console.log(x , arr[x])
// }


// for(let i = 1; i <= 2 ; i++) {
//     console.log(i, arr[i])
// }


// let obj = {
//     "123name": 'aravind',
//     "password": '124',
//     123: true
// }
// console.log(obj["123name"])
// Number, Boolean, Object
// x = "name"
// obj[x] => obj["name"]
// "name", "password"
// for(let x in obj) {
//     // x = "name" , obj[x] => obj["name"]
//     // x = "password" obj[x] => obj["password"]
//     console.log(x, obj[x])
// }
// let ar = [3, 4, 5]
// //        0  1  2
// for(let x in ar){
//     console.log(x)
// }
// let ob = {a: 1, b: false, c: "x"}
// for(let x in ob){
//     // x = "a", x = "b" , x = "c"
//     // obj["a"]
//     console.log(x, ob.x, ob[x])
// }



// let a = "aravind" ;
// let arr = [
//     23 ,
//     false ,
//     undefined,
//     true,
//     a,
//     {
//         a: 10,
//         b: 20
//     }
// ]
// console.log(arr[4])
// arr[5]["aravind"]
// console.log(arr[5][a])
// for(let i of arr){
//     console.log(i) // 
// }


