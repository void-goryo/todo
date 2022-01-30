function getTodos() {
    //Array of tasks
    var todos = new Array;
    //pull task
    var todosStr = localStorage.getItem('todo');
    //if input is not null, JSON.parse will send data to the browser
    //to make a new task
    if (todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}

//this'll add the inputed task to the getTodos function
function add() {
    //this takes the inputed task and creates a variable
    var task = document.getElementById('task').value;

    var todos = getTodos();
    //this'll add a new task at the end of the array
    todos.push(task);
    //converts task input to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}

//keeps task displayed in the screen
function show() {
    var todos = getTodos();
    var buttons = document.getElementsByClassName('remove');
    //this sets up each task as an unordered list
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++){
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + 
            '" onclick="remove(' + i + ')">x</button></li>';
    };

    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };

    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
}

function remove(pos) {
    var item = pos
    var todos = getTodos();
    todos.splice(item, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false
}
