let fs = require("node:fs");

let todos = fs.readFileSync("db/todos.json", "utf-8");
todos = JSON.parse(todos);

let [, , deleteTodoId] = process.argv;

if (deleteTodoId) {
  let checkTodo = todos.some(
    (todo) => todo.id == deleteTodoId
  );

  if (checkTodo) {
    todos = todos.filter(
      (todo) => todo.id != deleteTodoId
    );

    fs.writeFileSync(
      "db/todos.json",
      JSON.stringify(todos, null, 4)
    );

    console.log("Muvaffaqiyatli o‘chirildi");
  } else {
    throw new Error("Bunday todo mavjud emas");
  }
} else {
  throw new Error("ID yozish majburiy !!!!!");
}