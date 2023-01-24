const prompt = require('prompt-sync')({sigint: true});

// create an empty array
var todo = [];

while(true){
  console.log('Select an action: \n [1] View todo list \n [2] Create new todo \n [3] Edit existing todo \n [4] Delete existing todo \n [5] Exit app');
  var action = prompt();
  console.clear();
  
  if(parseInt(action) == 1){
    if(todo.length < 1){
      console.log('Todo list is empty');
    }else{
      console.log(`you have ${todo.length} todos`, todo);
    }
  }
  else if(parseInt(action) == 2){
    // push an element into array (create)
    const new_todo = prompt('? Enter new todo ');
    todo.unshift(new_todo);
    console.log(todo);
  }
  else if(parseInt(action) == 3){
    // use index of that array to edit
    console.log(todo);
    const todo_index = prompt('? Enter the index of the todo item you wish to edit ');
    const todo_int = parseInt(todo_index);
    if(todo_int > todo.length){
      console.log('Todo does not exist');
    }else{
      const edit_todo = prompt(`Update todo index ${todo_int} `);
      todo[todo_int] = edit_todo;
      console.log(todo);
    }
  }
  else if(parseInt(action) == 4){
    // use index of that array to delete
    console.log(todo);
    const todo_index = prompt('? Enter the index of the todo item you wish to delete ');
    const todo_int = parseInt(todo_index);
    if(todo_int > todo.length){
      console.log('Todo does not exist');
    }else{
      todo.splice(todo_int, 1);
      console.log(todo);
    }
  }else{
    // console.clear();
    process.exit();
  }
}