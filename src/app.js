// Query the DOM elements
const btnEl = document.querySelector('button')
const inputEl = document.querySelector('input')
const listEl = document.querySelector('ul');

function addTodo(){
    const inputValue = inputEl.value;
    const listTodo = document.createElement('li');

    listTodo.textContent = inputValue;
    listEl.appendChild(listTodo);

    // Clear the input element 
    inputEl.value = '';
}

// Event listeners
btnEl.addEventListener('click', addTodo)