class Task {
    constructor(content, id=0, completed=false, name = "") {
        this.content = content;
        this.id = id;
        this.completed = completed;
        this.name = name;
        this.display = true;
    }
}

//OUTPUT TASKS' FIELD

function output(x) {
    if (x.display == true) {
        //create a div for the individual task and set attributes
        let task = document.createElement('div');
        task.setAttribute("id", x.id)
        console.log(x.id);
        console.log(toDoList);
        //create p to store text
        let tasktext = document.createElement('p');

        //create a button and set its attributes
        let butt = document.createElement('input');
        butt.setAttribute("class", "checker");
        butt.setAttribute("type", "checkbox");
        butt.setAttribute("onclick", "strikethrough(" + x.id + ")");
        
        //create delete button
        let delbutt = document.createElement("p");
        delbutt.setAttribute("class", "trash");
        delbutt.setAttribute("onclick", "trashTask(" + x.id + ")");
        delbutt.textContent = "X";

        //set text of item on screen
        tasktext.innerHTML = x.content;
        //append items to div
        task.appendChild(tasktext)
        task.appendChild(butt);
        task.appendChild(delbutt);
        
        //if task completed, check box automatically
        if (x.completed == true) {
            butt.checked = true;
            tasktext.setAttribute("style", "text-decoration: line-through;");
        }

        //append item to screen
        document.querySelector('section.tasks').appendChild(task);
        }
        updateCounter();
}


//TAKE TASKS AND OUTPUT THEM 
function addTask() {
    var newTask = document.getElementById("inputbox").value;
    if (newTask != "") {
        let y = new Task(newTask);
        y.name = "task-item" + toDoList.length;
        y.id = toDoList.length;
        toDoList.push(y);
        output(y);
    }
}

//COMPLE TASK
function strikethrough(x) {
    let doc = document.getElementById(x);
    if (toDoList[x].completed == false) {
        doc.childNodes[0].setAttribute("style", "text-decoration: line-through;"); 
        toDoList[x].completed = true;
    }
    else {
        doc.childNodes[0].setAttribute("style", "text-decoration: none;"); 
        toDoList[x].completed = false;
    }
    updateCounter();    
}

//SHOW TASKS COMPLETED
function completed() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == true) {
            output(toDoList[i]);
        }
}
}

//SHOW ACTIVE TASKS
function active() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == false) {
            output(toDoList[i]);
        }
    }
}
//SHOW ALL TASKS
function all() {
    removeAllChildNodes(box);
    for (let i = 0; i < toDoList.length; i++) {
        output(toDoList[i]);
        }
}

//CLEAR LIST OF TASKS
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function updateCounter(){
    let counter = 0;
    for (let i = 0; i < toDoList.length; i++) {
        if (toDoList[i].completed == false) {
            counter++;
        }
        let left = document.getElementById("classification");
        left.innerHTML = counter +" tasks left";
    }
}
//REMOVE TASKS
function trashTask(x){
    removeAllChildNodes(box);
        toDoList[x].completed = false;
        toDoList[x].display = false;
        for (let i = 0; i < toDoList.length; i++) {
            output(toDoList[i]);
        }
}


//ON LOAD
let box = document.querySelector('section.tasks');

let exercise = new Task("Write your tasks!");
const toDoList = [exercise];

for (let i = 0; i < toDoList.length; i++) {
    output(toDoList[i]);
}
updateCounter();