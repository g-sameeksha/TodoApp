const UserIn = document.querySelector("#input-box");
const todoList = document.querySelector("#list_c");


function showList(){
    todoList.innerHTML = localStorage.getItem("todo");
}
showList();


function updateStorage(){
    localStorage.setItem("todo",todoList.innerHTML);
}

function addTask(){
    if (UserIn.value === ""){
        alert("You must write Something");
    }
    else{
        let todoElement = document.createElement("li");
        todoElement.innerHTML = UserIn.value;
        todoList.appendChild(todoElement);
         let span = document.createElement("span")
         span.innerHTML ="\u00d7"
         todoElement.appendChild(span);
        updateStorage();
    }
   UserIn.value="";
}

todoList.addEventListener("click", function(e){
 if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    updateStorage();
 }
 if(e.target.tagName === "SPAN")
    userConfirm = confirm("completed this task?");
    if (userConfirm){
        e.target.parentElement.remove();
        updateStorage();
    }
    
},false);