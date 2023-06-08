// arrays and objects
// Object literals

/*
    user information 

    username:
    fullname: {
        firstName:
        lastName: 
    },
    email: 
    password: 
*/
// class User {
//     static class FullName {

//     }
//     public User(){
//         String username,
//         String email
//         String password;
//         FullName String 
//     }
// }

// User user1 = new User()

// let user = [3, 4, 5, 8]  ;
// // 1) Arrays will be stored in the memory in a contiguous block
// // 2) zero based indexed
// // 100 byte memory => 0 - 99
// // ArrayList<> arr = new ArrayList<>();
// // console.log(user[2] + user[3])
// let arr = [2, true, undefined, "aravind", [1, 2, 3]]
// // intial length => 5
// arr[10] = 78; 
// // updated length => 11
// // console.log(arr)

// console.log(2, 4, "aravind")

//         4,  1/8 bytes 
// 4bytes + 1bit + 7bytes = 11bytes 1bit
// let arr = [4, true , "aravind"] 
// [4, true , "aravind"] => [4, 28 , "aravind"] 
// arr[1] = 28 ;
// console.log(arr)
// arr.push(9);
// // push will add an element at the last 
// // [4, true , "aravind", 9] 
// console.log(arr)
// arr.unshift(90) 
// // unshift will add the element at the front
// // [90, 4, true , "aravind", 9 ]
// console.log(arr)
// arr.shift();
// // shift will remove the element at the front 
// console.log(arr)// [ 4, true , "aravind", 9 ]
// arr.pop();
// // pop will remove the element at the last 
// console.log(arr) // [4, true , "aravind"]

// slice
// let arr = [5, 3, 10]
// // 
// let segment = arr.slice(1) 
// /*  
//             #300  #304  #308
//     arr =     [5,   3,   10] => [5,   3,   10]
//     segment = [3,  10] => [3, 99]
//               #200 #204
// */
// segment[1] = 99 ;
// console.log(arr)
// console.log(segment)

// splice => used to delete and add the elements

// let arr = [7, 3, 9, 10, 34]

// // splice(startIndex, deleteCount)
// arr.splice(2, 0, false, 88, 99)

// // [7, 3, false, 88, 99, 9, 10, 34] => 
// // when inserted a value at index i , the element at that index will slide rightside and the new element will be taking the position i

// //[7, 3, 9, 10, 34] => [7, 3, false, 88, 99, 34]

// // [7, 3, 9, 10, 34] => [7, 3, false, 88, 99, 10, 34]
// console.log(arr)

// let arr = [5, 3 ]
// console.log(typeof arr)

// Object literals

// let a = 20 ;

/*
    for login
    email, password

    aravind@gmail.com => string
    dujsdhee923e2 => string
*/

// 1
// let email = "aravind@gmail.com";
// let password = "dujsdhee923e2";

// 2

let user = ["aravind@gmail.com", "dujsdhee923e2"]
console.log(user.length)
//                  0                  1
// console.log(user[0])
// 3.  Objects in js will have the data in key value pair format

let userObject = {
    email: "aravind@gmail.com",
    password: 'dujsdhee923e2'
}
// . notation to access the properties of an object 
// indexing notation
// console.log(userObject.email)
// console.log(userObject['password'])
// class User {
//     public User(a, b) {
//         this.name = a ;
//         this.password = b ;
//     }
//     String email ;
//     String password ;
// }

// User user  = new User("")

// user.email

// aravind's phone
// let a = "aravind's phone"
// let b = 'aravind\'s phone'