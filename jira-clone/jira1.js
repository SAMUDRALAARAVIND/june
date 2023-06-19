const createIssueButton  = document.getElementById("create-issue"); 
const box = document.getElementsByClassName("box")[0] ;
/*

    TODO , IN_PROGRESS, COMPLETED

    Data management: 
    {
        taskName: "taks_name",
        status: "TODO",
        description: "sjdkdfk", 
        assignee: "Aravind"
    }
*/

const statusMapping = {
    COMPLETED: 'Completed',
    IN_PROGRESS: 'In Progress',
    TODO: 'To Do'
}

const items = [
    
]

const newModal = document.createElement("div");
newModal.id = "modal" ;
newModal.className = "modal" ;
newModal.innerHTML = `<div class="modal-body">
                            <form>
                                <span class="material-icons close" onclick="closeModal()">close</span>
                                <p style="color: #182A4D; font-size: 20px">Add Task</p>
                                <input required type="text" name="taskName" placeholder="Task Name">
                                <textarea required type="text" rows="3" style="resize: none;" name="description" placeholder="description"></textarea>
                                <input required type="text" name="assignee" placeholder="Asignee">
                                <select name="status">
                                    <option value="TODO">TO DO</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="COMPLETED">Completed</option>
                                </select>
                                <button type="submit">Create</button>
                            </form>
                        </div>`

function closeModal() {
    newModal.remove();
}

function addNewTask(task) {
    /*
        <div class="card">
            <p class="task-name">Task Name</p>
            <p class="description">Some random description</p>
            <div class="status-container">
                <p data-short-name="SA" class="assignee">Aravind</p>
                <p class="status">In Progress</p>
            </div>
        </div>
    */

    const card = document.createElement("div");
    card.className = "card" ;
    card.addEventListener("dragstart", () => {
        activeDraggedElement = card ;
        activeDraggedElement.style.visibility = "hidden" ;
    })

    task.status !== 'COMPLETED' && (card.draggable = "true") ;
    
    const words = task.assignee.split(" ");
    let nickName = words[0][0].toUpperCase() ;
    if(words.length > 1) {
        nickName += words[words.length - 1][0].toUpperCase();
    }
    
    card.innerHTML = `
        <p class="task-name">${task.taskName}</p>
        <p class="description">${task.description}</p>
        <div class="status-container">
            <p data-short-name="${nickName}" class="assignee">${task.assignee}</p>
            <p class="status">${statusMapping[task.status]}</p>
        </div>`;
    const box = document.getElementById(task.status)
    box.appendChild(card);
}

function onSubmitForm(event){
    event.preventDefault();
    const formElement = event.target ;
    const userData = {
        taskName: formElement["taskName"].value.trim(),
        assignee: formElement["assignee"].value.trim(),
        status: formElement["status"].value,
        description: formElement["description"].value.trim()
    }
    closeModal();
    addNewTask(userData);
}
// onSubmitForm = #400
createIssueButton.addEventListener("click" , () => {
    document.body.appendChild(newModal);
    const form = document.querySelector(".modal form") ;
    form.removeEventListener("submit", onSubmitForm);
    form.addEventListener("submit", onSubmitForm)
})

// button.addEventListener("click", () => {
//     console.log("called")
// })

// button.addEventListener("click", () => {
//     console.log("called")
// })