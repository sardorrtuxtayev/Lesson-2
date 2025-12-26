let fs = require("node:fs");
let todos = fs.readFileSync("db/todos.json", "utf-8");
todos = JSON.parse(todos);

console.table(todos)