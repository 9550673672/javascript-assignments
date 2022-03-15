todo_fetch()
let completed_part = document.querySelector('button');
let pending_part = document.querySelector('button');

//add eventlistener to the buttons

document.getElementsById('completed_Todo').addEventListener('click',show_completed);
document.getElementsById('pending_Todo').addEventListener('click',show_pending);

function todo_fetch(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())

    //.then(json => console.log(json))
    //separating completed and pending list
    .then(data =>{

        for(let i=0; i<data.length;i++){
            if(data[i].completed===true){
                completed.push(data[i].title)
            }else{
                pending.push(data[i].title)
            }
        }    
    })
}
  //writing function to the eventlistener
function show_completed() {
    for(let i=0;i<completed.length;i++){
        tag=document.creatElement('li')
        tag.innerHTML=completed[i];
        completed_part.appendchild(tag);
    }
}
function show_pending() {
    for(let i=0;i<pending.length;i++){
         tag=document.creatElement('li')
         tag.innerHTML=pending[i];
         pending_part.appendchild(tag);
    }
}