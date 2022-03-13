let btn = document.querySelector("button");
let todolist = document.querySelector('div.todos');
let input = document.querySelector('input');

let count = 0;

btn.addEventListener("click", function (e) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = input.value;
    paragraph.setAttribute("key", count);
    todolist.appendChild(paragraph)

    input.value = "";
    count += 1;

    document.querySelector(`p[key="${count-1}"]`).addEventListener("click", function(e){
        let todolist = document.querySelector('div.todos');
        todolist.removeChild(this);
    })
})