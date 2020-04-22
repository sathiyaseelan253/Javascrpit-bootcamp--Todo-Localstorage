//create variables form,todoList,button and input to target form and unordered list button and input field elements
var form=document.querySelector('form');
var todoList=document.querySelector('ul');
var button=document.querySelector('#clear');
var input=document.querySelector('#user-todo');

// Declare variable `todosArray` to hold our todos.
    // We want to ask if there are already `todos` in localStorage. If so, then we will get
    // those `todos` using JSON.parse. If local storage does not have any `todos` then we will
    // set our `todosArray` to an empty array.
var todosArray=localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];

// use localStorage setItem() method to set `todos` to a string with `JSON.stringify()`
      // JSON.stringify() if used because localStorage works with strings. This is how
      // we sent data to localStorage.
      localStorage.setItem('todos',JSON.stringify(todosArray));

      // Declare a variable `storage` that contains all the information in localStorage.
      // We will assign to `storage` JSON.parse() method that converts strings from local
      // storage into data we can access with JavaScript.
      // When receiving data from a web server, the data is always a string.
      //Parse the data with JSON.parse(), and the data becomes a JavaScript object.
      var storage=JSON.parse(localStorage.getItem('todos'));


//attach eventlisterner with form variable to capture user input while submitting the value
form.addEventListener('submit',function(event){
    //to prevent the page from refreashing
    event.preventDefault();
    todosArray.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todosArray));
    TodoMaker(input.value);
    input.value='';    
});

//function to create li with user input and add it to ul elements
var TodoMaker=function(text){
        var todo=document.createElement('li');
        todo.textContent=text;
        todoList.appendChild(todo);
}
for(var i=0;i<storage.length;i++){
    TodoMaker(storage[i]);
}

//function to remove all the todos(li elements) when 'clear all' button is pressed
button.addEventListener('click',function(event){
    localStorage.clear();
  while(todoList.firstChild){
            todoList.removeChild(todoList.firstChild);
        }
});