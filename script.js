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

// select elements & assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


// functions
let createTask = function(task) {
   let listItem = document.createElement('li');
   let checkBox = document.createElement('input');
   let label = document.createElement('label');

   label.innerText = task;
   checkBox.type = 'checkbox';

   listItem.appendChild(checkBox);
   listItem.appendChild(label);

   return listItem;
}

let addTask = function(event) {
   event.preventDefault();
   let listItem = createTask(newTask.value);
   todoUl.appendChild(listItem);
   newTask.value = "";
   // bind the new list item to the incomplete list
   bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
   let listItem = this.parentNode;
   let deleteBtn = document.createElement('button');
   deleteBtn.innerText = 'Delete';
   deleteBtn.className = 'delete';
   listItem.appendChild(deleteBtn);

   let checkBox = listItem.querySelector('input[type="checkbox"]');
   checkBox.remove();
   completeUl.appendChild(listItem);
   bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
   let listItem = this.parentNode;
   let ul = listItem.parentNode;
   ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
   let checkBox = taskItem.querySelector('input[type="checkbox"]');
   checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
   let deleteButton = taskItem.querySelector('.delete');
   deleteButton.onclick = deleteButtonClick;
}

for(let i=0; i< todoUl.children.length; i++ ) {
   bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
   bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);
