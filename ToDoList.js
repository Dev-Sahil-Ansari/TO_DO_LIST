let addTaskBtn = document.querySelector(".add");
let assignTask = document.querySelector(".task-assigning");
let taskShow = document.querySelector(".task-showing-area");
let taskMsg = document.querySelector(".msg");
let taskCompleted = document.querySelector(".taskCompleted");
let deleteTask = document.querySelector(".delete")

let textVar = "";

addTaskBtn.addEventListener("click", () => {
    textVar = assignTask.value;
    
    let checkBoxDiv = document.createElement("div");

    checkBoxDiv.id = "add-Task";
    checkBoxDiv.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
    checkBoxDiv.style.height = "2px";
    checkBoxDiv.style.width = "50vh";
    checkBoxDiv.style.borderRadius = "1vh";

    let checkBox = document.createElement("input");
    let label = document.createElement("label");

    checkBox.name = "Task"
    checkBox.type = "checkbox"
    checkBox.id = "option1"
    checkBox.style.height = "3vh"
    checkBox.style.width = "4vh"

    label.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
    label.style.height = "3vh";
    label.style.width = "15vh";
    label.style.justifyContent = "center";
    label.style.fontStyle= "Arial";
    label.style.gap = "1vh";
    label.style.padding = "0.5vh"

    taskShow.appendChild(checkBox);
    label.htmlFor = checkBox.id;
    label.innerText = textVar;
    taskShow.appendChild(label);

    taskShow.appendChild(checkBoxDiv);

    
    console.log(textVar);
    console.log("your text is stored");

    let count = taskShow.querySelectorAll("input[type='checkbox']").length;
    console.log("Number of tasks:", count);

    taskMsg.innerText = `Number of Tasks : ${count}`

    function updateCompletedCount() {
    let completedCount = taskShow.querySelectorAll("input[type='checkbox']:checked").length;
    taskCompleted.innerText = `Task Completed : ${completedCount}`;
}

checkBox.addEventListener("click", updateCompletedCount);

    const limitTask = () => {
        if (taskShow.querySelectorAll("input[type='checkBox']").length === 6){
            console.log("Limit Reached");
            label.innerText = "---Task Assigning Limit Reached---";
            checkBox.style.height = "0vh"
            checkBox.style.width = "0vh"
            label.style.height = "0vh"
            label.style.width = "0vh"
            document.querySelector(".task-assigning").placeholder = "Limit Reached";
        } else if (taskShow.querySelectorAll("input[type='checkBox']").length > 6) {
                checkBox.remove();
                label.remove();
                checkBoxDiv.remove();
            document.querySelector(".task-assigning").placeholder = "Limit Reached";
        }
    }
    addTaskBtn.addEventListener("click", limitTask());


    deleteTask.addEventListener("click", () => {
        checkBox.remove();
        label.remove();
        checkBoxDiv.remove();
        taskMsg.innerText = `Number of Tasks : 0`
        taskCompleted.innerText = `Task Completed : 0`;
        document.querySelector(".task-assigning").placeholder = "Write the Task";
    })
});

addTaskBtn.addEventListener("click", () => {
    assignTask.value = ""
}) 