// call by value and callby reference, closures, higher order functions
// let a  = 20 ;
// function callme() {
//     let a = 200 ;

//     let child = () => {
//         console.log(a)
//     }

//     // data type of child function 
//     return child
// }

// let result = callme(); 

// console.log(typeof result)


/*
Variables are devided into two types 

primitive varibles (number, boolean, strings, undefined)

non primitive variables(user defined variables objects, functions, arrays)


actual value , reference(address)

stack(lesser in size compared to HEAP), Heap
*/

// let student  = {
//     name: 'aravind',
//     age: 22,
//     college: 'NITW'
// }

// let student2 = student ;

// student2.name = "Rajesh" ;
// console.log(student.name, student2.name)


// int x = new Obj() ;
// System.out.println(x); // 372893@Obj

/*
    call by value: calling a function by passing value 
    call by reference: calling a function by passing the reference

*/

// function callme(a, b) {
//     a = 50 ;
//     b[1] = "abc" ;
// }

// let x = 90 , y = [1, 2, 3] ;

// callme(x, y);
// // primtive , non primitive (reference type variable)

// console.log(x, y);

/*
call by reference and call by value example: 

function x(x, y, z) {
    // x = 20, y = #120, z = #150
    x++;// x = 21
    y[1] = 100 ;// #120 = [90, 100]
    z.age = 22 // #150.age = 22
    // {x: 1, y: 2} = #400
    z = {x: 1, y: 2};// z = #400
    console.log(x, y, z) // 21, [90, 100], {x: 1, y: 2} 
    // 21, [90, 100] , 34
}
// a = 20, b = #120, c = #150 
let a = 20 , b = [90] , c = {name: 'aravind'}

x(a, b, c);

console.log(a , b , c) // 20, [90, 100], {name: 'aravind'}

*/

// function parent(){
//     let child = (a) => {
//         console.log(a + b)
//     }
//     let a = 20, b = 100 ;

//     return child ;
// }
// let a  = 32 , b = 50 ;
// let result = parent()
// result(a+b);



// let a  = 10; 
// function parent(){
//     let a = 20 ;
//     return function(){
//         console.log(a);
//     }
// }
// a = 30 ;
// let result = parent()
// result();
// let a = 20 ;
// let x = () => {
//     console.log(a)
// }
// function callme(func) {
//     let a = 100 ;
//     func();
// }
// a = 24; 

// callme(x);


// lexical parent of a context(functional context)  `X` means, the context where `X` is actually created .

// Every function will make a closure(links to the variables) with it's lexical parent.


// function callme(a, b = 99){
//     console.log(a, b)
// }
// callme(10, undefined);


let obj = {name: "aravind"}

Object.seal(obj);
obj.name = "SKJKJSLSK"
obj.x = "dfdjfk"
console.log(obj)
