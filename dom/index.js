// let divNode = {
//     tagName: "div",
//     className: "b",
//     id: "parent",
//     style: {
//         color: 'red',
//         backgroundColor: 'blue'
//     },
//     children: [
//         {
//             tagName: 'div',
//             id: 'child',
//             innerText: 'abc',
//             children: []
//         },
//         {
//             tagName: 'p',
//             innerText: 'Some para',
//             children: []
//         },
//         {
//             tagName: 'button',
//             innerText: 'Button',
//             children: [],
//             disabled: true
//         }
//     ]
// }

// divNode = #100
// divNode.style = #200
// divNode.children = #300 = [#500, #600, #700]

// DOM => document object model

let para = {
    innerText: "Simple paragraph"
};

para.innerText = "aravind"

// let para = #400 ;

/**
 * 1. Create a node using js
 * 2. Update / manipulate an existing node 
 * 3. Deletion of a node.
 */

/*
WEB API 

document (object) 
*/



// let obj = {
//     x: 10,
//     y: 20,
//     callme: function(){
//         console.log("inside function")
//     }x
// }

// obj.callme();


// let htmlNode = document.getElementById("abc") ;
// console.log(htmlNode.innerText.length) 

// htmlNode.innerText = "aravind" ;

// console.log(htmlNode.className)
// htmlNode.className = "" ;


// htmlNode.remove();

// Events 
/*
    (mouse click) clicking on an element is an event 
    scrolling 
    dragging
    pressing on a keyboard's key
    swiping 
    selecting 
    changing input
    mouse hover 
    mouse un hover ...
*/
// const paraElement  = document.getElementById("abc");

// function changeText() {
//    paraElement.className =  paraElement.className === "danger" ? "success" : "danger"
// }

// function doubleClick() { 
//     console.log("Double clicked")
// }


// Contact number search problem 


let input = "368" ;
// "3 6 8" 
//        i

// "d" => "dm" => "dmt"
// "e" => "em" => "emu"
// "d" => ["dm", "dn", "do"]
// "e" => ["em" , "en", "eo"]
// "f" => ["fm", "fn", "fo"]
let table = {
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "xyz"
}

let solutions = [] ;

function solve(currentIndex, calculatedString) {
    if(input.length <= currentIndex){
        solutions.push(calculatedString);
        return;
    }
    // currentIndex = 2, calculatedString = "dm"
    let currentChar = input[currentIndex] // "3"
    // table["3"] = "def"
    for(let i = 0 ; i < table[currentChar].length; i++) {
        // "def" 
        solve(currentIndex + 1, calculatedString + table[currentChar][i] )
        // solve(0 + 1, "" + "d")
    }
}

solve(0, "")

console.log(solutions)

let obj = {
    ...(true && {a: 2})
}
console.log(obj)