const form = document.querySelector("form");
const input = document.querySelector("form .input");
const Todo = document.querySelector("ul");
const TodoBtn = document.getElementById("button");
let todoNum = document.querySelector(".number");

form.addEventListener("submit", (e) => {
  // when submit check if input has a value and toggle the button
  if (input.value.length == 0) {
    TodoBtn.disabled = true;
  } else {
    TodoBtn.disabled = true;
  }
  // stops the default behavior of form
  e.preventDefault();
  // create new todo item
  const newItem = document.createElement("li");
  // create delete item icon
  const delIcon = document.createElement("span");
  // keep updating number of todo added
  const numTracker = `Task ${Todo.children.length + 1} :`;

  newItem.innerText = `${numTracker} ${input.value} `;
  Todo.appendChild(newItem);
  todoNum.innerText = `Number of Tasks: ${Todo.children.length}`;
  input.value = "";

  delIcon.innerText = "X";
  delIcon.classList.add("del-icon");
  newItem.append(delIcon);

  delIcon.addEventListener("click", deleteItem);
  function deleteItem() {
    newItem.remove();
    todoNum.innerText = `Number of Tasks: ${Todo.children.length}`;
  }

  // todoTracker.innerText = `item number ${Todo.children.length}`;
});

// check if input has a value and toggle the button
input.addEventListener("input", () => {
  if (input.value.length > 0) {
    TodoBtn.disabled = false;
  } else {
    TodoBtn.disabled = true;
  }
});
