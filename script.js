let tasks = ["do homework",];
tasks.push(...JSON.parse(localStorage.getItem("tasks") || "[]"));

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const placeholders = [
  "do homework...",
  "be productive...",
  "doomscroll to infinity...",
  "lock in...",
  "touch grass...",
  "code...",
  "are you coming from lunch?",
  "i could not care less what you need to do, but you should do it...",
  "hack yeah"
]



input.placeholder = placeholders[Math.floor(Math.random() * placeholders.length)]


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
    index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });

  
  item.append(text, button);
  list.appendChild(item);
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  form.reset();
  input.focus();
  document.getElementById("todo-input").value = "";
});

for (const task of tasks) {
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
}
