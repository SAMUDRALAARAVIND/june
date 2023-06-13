/*
    1.Block and Context scope.
    2.String methods
    3.destructuring

    3.1. spread operator
    4.higher order functions.
    5.assignments
*/

/*

function callme(list){
    // list = #300 
    console.log(list)
    list[0] = 100 ; // #300 i am manipulating
    console.log(list) // 
}
let x = {friends: [3, 4, 5]}

    x: #200 = {friends: #300}

    #300 = [3, 4, 5]

callme(x.friends)

console.log(x.friends) // [100, 4, 5]
*/

/*
    const final 

    1. let and const declared variables are block scoped, context scoped
        if(){}, else {}, for(){}, while(){}, do{}while; switch(){}, 

        function(){} => this is not a block but a context


    2. var declared variables are context scoped(not block scoped)
*/



// console.log(a, y)
// if(true){
//     var a = 20; 
//     if(false){
//         let x = 12 ;
//         var y = 120 ;
//     }
// }
// console.log(a , y)

/*
    function callme() {
        console.log(x)
        let a = 20 ;
        if(true){
            var x = 200 ;
            let y = 100 ;
            console.log(a + b + x);
        }
    }
    let b = 25 ;
    callme();
    console.log(x) 
*/

// let str = "aravind" ;
// r = ascii code = 
// strings in js are follows zero based indexing
// strings in js are immutable


// str[0] = "X" ;
// console.log(str)

// console.log( str.charAt(100) === '' );

// console.log(str.charAt(10), str[10])

// console.log(str.charCodeAt(5))
// [start, end)
// let slicedString = str.slice(2, 6)
// console.log(slicedString)

// splice

// let str1 = "abc@mn@o@hijk";
// ["abc", "mn", "o", "hijk"]

// let fragments = str1.split("@")
// console.log(fragments)

// let sentence = "Welcome to the Full Stack Web Development Course at"

// let words = sentence.split(" ")
// console.log(words.length)

// let str3 = "  jjs  jsis  iois "
// let trimmedString = str3.trim();
// console.log({trimmedString})

// let a = 20, b = 30, c = 40 ;
// let [a, b, c] = [20, 30, 40] ;
// console.log(a, b ,c)
// // [](Array), {}(object)

// let [x, y] = ["aravind", () => {
//     console.log("Inside function")
// }]

// console.log(typeof x , x)

// console.log(typeof y, y)

// let user = {name: 'aravind', age: 22}

// let name = user.name , age = user.age ;

// let {name:fullname, age: myAge, x} = {name: 'aravind', age: 22}

// console.log(name, fullname, myAge, x)

// let x = 20 ;
// let y = 10 ;
// console.log({x, y}) //{ x: 20, y: 10}

/// spread operator ( ... )

// let a1 = [3, 4, 6] // #400

// let a2 = [...a1] // #300 , [3, 4, 6]
// // [8, 12, 3, 4, 6 ,19]
// console.log(a2, a1, a1 == a2)

// let s1 = "abc" ;

// let s2 = [...s1]

// console.log(s2)

// let obj1 = {x: 1, y: 2} ;

// let obj2 = {a: 10, ...{x:1, y:2} ,b: 20}
// // {a: 10, x: 1, y: 2, b: 20}
// let arr2 = [10, ...[9, 2, 4], 200]
// [10, 9, 2, 4, 200]
/*
    {
        a: 10,
        obj1: {x: 1, y: 2},
        b: 20
    }
*/
// console.log(obj2)


// Higher order functions => functions which returns/takes function as values

// callme => higher order function
// function callme(){
//     return () => {
//         console.log("Returned function")
//     }
// }

// callme2 => higher order function
// function callme2(x){
//     x();
// }

// callme2(() => {});

// callback function => The function which is passed as an argument to some another function is called as callback function .

// parent => higher order function
// function parent(child) {
//     child();
// }

// parent(function(){ // callback function
//     console.log("Inside child function")
// })


// function forEach(callback) {
//     // callback => parameter
//     // callback = x
//     for(let i = 0; i < arr.length; i++) {
//         // i = 0 , i = 1
//         callback(arr[i], i, arr);
//     }
// }

// function x(element, index, list){
//     console.log(element, index)
// }

// forEach(x)

// let result = arr.forEach(function(element, index, list){
//     console.log(element + index)
// })

// console.log(result)


// The higher order funtion available in arrays are 
/*
    1. forEach (doesn't return anythging)
    2. map (returns another array of same length)
    3. filter
    4. reduce
*/

// let result1 = arr.forEach(function(element, index, list){
//     console.log(element , index, list);
// })
// console.log(result1)

// let result2 = arr.map(function(element, index, list){
//     console.log(element , index, list);
//     return element + index ;
// })

// let result = arr.filter(function(element, index, list) {
//     return (element % 2 === 0) ;
// })

// function filter(callback) {
//     let aggregatedArray = [] ;
//     for(let i = 0 ; i < arr.length ; i++) {
//         callback(arr[i], i, arr) && aggregatedArray.push(arr[i])
//     }
//     return aggregatedArray; 
// }

// console.log(filter((element, index) =>  index%2 === 0 ))

// console.log(result) // result = [ 6, 8]

/*

let arr = [5, 6]

function reduce(callback, intialValue) {
    let index = intialValue !== undefined ? 0 : 1 ;
    let aggregatedValue = intialValue ? intialValue : arr[0] ;
    for(let i = index; i < arr.length ; i++){
        aggregatedValue = callback(aggregatedValue, arr[i], i, list)
    }
    return aggregatedValue ;
}

let result = arr.reduce(function(previousValue, element, index) {
    // console.log(previousValue, element, index)
    console.log(previousValue, element, index)
    // 5, 6, 1

    return element + previousValue ;


    // 10, 5, 0
    // undefined, 6, 1



    // 10, 5, 0
    // 10 + 5 = 15

    // 15, 6, 1
    // 15 + 6 = 21
    // return previousValue + element ;
}) ;

console.log(result) //  undefined

*/




// function twoSum(arr, target, index) {

// }

// function threeSum(arr, target) {
//     // target = 2
//     // write your code here

//     for(let i = 0 ; i < arr.length ; i++){
//         target = target - arr[i] 
//         // TODO: figure of two elements whose sum is target 
//         target = target + arr[i] 
//     }
    
//         [-1, 2, 1, -4]
//              i
//       a + b + 2 = target => a + b = 2 - 2 ; => a + b = 0
    
//         a + b = sum - c
//     }
    
    
// let arr = [ 5, 2, 10, 1]

// arr.sort((a, b) => a > b) ;

// console.log(arr)

// "az", "ax" => "ax" , "az"
// console.log("az" < "ax")

let arr = [["ab", "A"] , ["ax", "S"], ["am", "C"]]

arr.sort((a, b) => {
    return a[0] > b[0]  ? 1 : -1; 
}) ;

console.log(arr)

/*
    let arr = [["Vipul", "A"] , ["Jaspreet", "S"], ["aravind", "C"]]

    arr.sort((a, b) => {
        let leftLower = a[0].toLowerCase();
        let rightLower = b[0].toLowerCase();
        return leftLower > rightLower ? 1 : -1; 
    }) ;

    console.log(arr)
*/

// console.log("a" > "A")