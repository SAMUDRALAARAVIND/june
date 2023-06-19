const boxes = document.getElementsByClassName("box");

for(let i = 0 ; i < boxes.length; i++) {
    let box = boxes[i] ;

    box.addEventListener("dragenter", () => {
        // box.className = "box active-box" // "box"
        console.log("Item entered")
        box.classList.add("active-box") // ""
    })
    box.addEventListener("dragleave", () => {
        console.log("item left")
        box.classList.remove("active-box");
    })
    box.addEventListener("dragover", (e) => e.preventDefault())

    box.addEventListener("drop", (e) => {
        e.preventDefault();
        if(box.id === "COMPLETED"){
            activeDraggedElement.draggable = false ; // "false" => Boolean("false") => true
        }
        console.log(activeDraggedElement)
        box.appendChild(activeDraggedElement);
    });
}