let fs = require("node:fs");
let todos = fs.readFileSync("db/todos.json", "utf-8");
todos = JSON.parse(todos);
let [, , title] = process.argv;
if (!title) {
  throw new Error("Todo title yozish majburiy !!!");
}

let newTodo = {
  id: Date.now(), 
  title: title,
};

todos.push(newTodo);

fs.writeFileSync(
  "db/todos.json",
  JSON.stringify(todos, null, 4)
);
console.log("Todo muvaffaqiyatli qo‘shildi ");
