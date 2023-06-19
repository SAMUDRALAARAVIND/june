// const parentElement = document.getElementById("parent"); 

// const divElements  = document.getElementsByTagName("div")


// function change() {
//     // const targetElement = divElements[0] ;
    
//     // console.log(targetElement.children)

//     // let firstChildren = targetElement.children[0];

//     // console.log(firstChildren)

//     // firstChildren.children[0].style.color = "red"

//     // testElement.style.color = "red"


// }

// document.getElementsByClassName


// let elements = document.getElementsByClassName("test")
// console.log(elements)


// let elements = document.querySelectorAll("div:first-child")


// console.log(elements)
/*

   elements = 
    [ <div class="test">
                Child element
            <div class="test abc">Test element</div>
        </div>,
        <div class="test abc">Test element</div>
    ]

*/
// console.log(elements[0].children[0] === elements[1])

// const element = document.querySelector(".abc.test")

// console.log(element.parentNode)

/*

<div class="test" id="parent">
    <div class="test abc">Test element</div>
</div>

*/


// const parent = document.querySelector(".test.abc")
// console.log(parent.previousElementSibling)
// console.log(parent.nextElementSibling)


/*
    <div id="parent">
        <p>Para1</p>
        <p id="p">Para2</p>
        <b>Bold1</b>
    </div>
*/

// let element = document.getElementById("p") ;

// console.log(element.nextSibling)
// console.log(element.nextElementSibling);

// console.log(element.previousSibling) ;
// console.log(element.previousElementSibling)


// Creation of a node(HTML ELEMENT)



// tagname => <b>Bold text</b>
// class HTMLCollection {
//     constructor(){

//     }
//     method1(){

//     }
//     method2(){

//     }
// }

// function createElement() {
//     return new HTMLCollection();
// }

// const boldElement = document.createElement("b") ;

// // attach above reference as a child for body element

// boldElement.innerText = "Shiva Saini" ;

const bodyElement = document.body ;


// bodyElement.append(boldElement);

// const div = document.createElement("div");
// div.innerText = "Something" ;
// div.style.color = "red" ;
// bodyElement.append(div);
// const root = document.getElementById("root");
// function addBold(){
//     const bold = document.createElement("b")
//     bold.innerText = "Nihar kumar";

//     const p = document.createElement("p")
//     p.innerText = "Para text";

//     root.appendChild(bold, p);
// }
// const modal = document.getElementById("modal") ;

/*
    <div class="modal">
        <div class="modal-body">
            <input type="text">
            <button onclick="closeModal()">Submit</button>
        </div>
    </div>
*/

// function openModal(){ 
//     const modal = document.createElement("div");
//     modal.className = "modal"; // #100

//     const modalBody = document.createElement("div");
//     modalBody.className = "modal-body";// #300

//     const input = document.createElement("input"); // #200

//     const submitButton = document.createElement("button") ; // #400
//     submitButton.innerText = "submit";
//     submitButton.onclick = closeModal 

//     modalBody.append(input, submitButton);
//     modal.appendChild(modalBody);
//     document.body.append(modal);
    

// }

// function closeModal() {
//     const modal = document.getElementsByClassName("modal")[0];
//     modal.style.display = "none" ;
// }

// function callme(){
//     alert("You clicked the button");
// }

// const button = document.getElementById("btn") ;
// // addEventListener(eventType, callback)
// button.addEventListener("click", callme);
// button.addEventListener("click", () => {
//     console.log("Second click event")
// })

// button.addEventListener("mouseover", () => {
//     console.log("YOu hovered on the button")
// })

// button.addEventListener("mouseleave", () => {
//     console.log("YOu un hovered on the button")
// })


const input = document.getElementsByTagName("input")[0]; 


// input.addEventListener("focus", () => {
//     console.log("focused on the input")
// })
// input.addEventListener("blur", () => {
//     console.log("YOu unfocused on the input")
// })

// input.addEventListener("change", (event) => {
//     const inputElement = event.target ;
//     console.log(inputElement)
//     console.log(inputElement.value)
// })





// function addEventListener(callback){
//     callback({name: "aravind"})
// }

// addEventListener((obj) => {
//     console.log(obj)
// })

let users = [
    "vipul",
    "ajmal",
    "saikumar",
    "amruth",
    "aravind",
    "sandhya",
    "vikram"
]

const resultsContainer = document.getElementById("results");

function search(searchString){
   return users.filter((username) => {
        return username.includes(searchString)
    })
}

input.addEventListener("keyup" , (event) => {
    const searchedValue = event.target.value ;

    let filteredUsers = search(searchedValue) ;

    resultsContainer.innerText = "" ;

    for(let i = 0 ; i < filteredUsers.length; i++){
        const div = document.createElement("div");
        div.innerText = filteredUsers[i]; 
        resultsContainer.appendChild(div);
    }
})