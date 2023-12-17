// document.title='Dom Learn with boss '

// Get Element Id 

// let headerElements=document.getElementById('header');
// // headerElements.innerText='change';
// // headerElements.textContent='To_Apps'

// headerElements.style.color='green';
// headerElements.style.fontSize='50px'

// let items=document.getElementsByClassName('item')

// for(let i=0; i<=items.length;i++){
//     items[i].style.color='red';
// }

// Get Element Tag

// let test=document.getElementsByTagName('h1');
// console.log(test);


// Get quarry slector.

// let checker=document.querySelector('h1');

// console.log(checker.style.color='red');


// const parent=document.querySelector('#items');

// const children=parent.children;

// console.log(children[2]);


// const divElement=document.createElement('div')
// divElement.className='red';
// divElement.setAttribute('id','red');
// divElement.setAttribute('tittle','new div');

// const container=document.querySelector('.todo-list')
// const h2Element=container.querySelector('h2');

// container.insertBefore(divElement,h2Element);

// Event lisenr

// const headerElements=document.querySelector('#header');

// headerElements.addEventListener('click',(event)=>{
//     console.log(event);
// });


// Selector all varible 

let newTask=document.querySelector('#new-task');
let form=document.querySelector('form');
let todoUl=document.querySelector('.items');
let completeUI=document.querySelector('.complete-list');

// Function 

let createTask=function(task){
    let listItem=document.createElement('li');
    let checkBox=document.createElement('input');
    let label=document.createElement('label');
    label.innerText=task;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask=function(event){

    event.preventdefault();

    let listItem=createTask(newTask,value);
    todoUl.appendChild(listItem);
    newTask.value="";

    // BindIteams the all incpmplete task

    bindInCompeleteItems(listItem,completeTask);

}


let completeTask=function(){

    let listItem=this.parentNode;
    let deleteBtn=document.createElement('button');
    deleteBtn.innerText='Delete';
    deleteBtn.classList='delete';
    listItem.appendChild(deleteBtn);
    let checkBox=listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUI.appendChild('listItem');

    bindCompeleteItems(listItem,deleteTask);
}

let bindCompeleteItems=function(){
    
}




let bindInCompeleteItems=function(taskItems,checkBoxClick){

    let checkBox=taskItems.querySelector('input[type="checkBox"]');
    checkBox.onChange=checkBoxClick;
}





