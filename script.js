const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement("li");
  item.className = "todo-item";

  const text = document.createElement("span");
  text.className = "todo-item__text";
  text.textContent = task;

  const button = document.createElement("button");
  button.className = "todo-item__delete";
  button.type = "button";
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    item.remove();
  });

  item.append(text, button);
  list.appendChild(item);

  form.reset();
  input.focus();
});
