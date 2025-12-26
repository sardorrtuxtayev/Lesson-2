let fs = require("node:fs");

let todos = fs.readFileSync("db/todos.json", "utf-8");
todos = JSON.parse(todos);

let [, , updateTodoId, newTitle] = process.argv;

if (updateTodoId) {
  let checkTodo = todos.some((todo) => todo.id == updateTodoId);

  if (checkTodo) {
    if (!newTitle) throw new Error("Yangi title yozish majburiy");

    let findTodoIndex = todos.findIndex(
      (todo) => todo.id == updateTodoId
    );

    if (!newTitle) throw new Error("Yangi title yozish majburiy");

let findTodoIndex = todos.findIndex(
  (todo) => todo.id == updateTodoId
);

todos[findTodoIndex] = {
  id: updateTodoId,
  title: newTitle,
};

fs.writeFileSync(
  "db/todos.json",
  JSON.stringify(todos, null, 4)
);

console.log("Todo muvaffaqiyatli yangilandi !!");
  } else {
    throw new Error("Bunday todo mavjud emas");
  }
} else {
  throw new Error("ID yozish majburiy !!!!!");
}