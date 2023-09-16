let button = document.getElementById("btn1")
let input = document.getElementById("txt1")
let list = document.getElementById("list")

button.addEventListener("click", add_goal);

function add_goal() {
    if (input.value.length != 0){
        let goal = input.value ;
        input.value = "";
        addItem(goal)
    }
}

let addItem = (input) => {
    let listItem = document .createElement("li");
    listItem.innerHTML = `${input}<i></i>`;
    list.appendChild(listItem);
    listItem.addEventListener("click", done)
    function done() {
        this.classList.toggle("done");
    }
}