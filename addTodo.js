let fs = require("node:fs");

let [, , title, narx] = process.argv;

let todos = fs.readFileSync("db/todos.json", "utf-8");
todos = JSON.parse(todos);

if (title) {
    let newTodo = {
        id: todos.length ? todos.at(-1).id + 1 : 1,
        title
    };

    todos.push(newTodo);

    fs.writeFileSync("db/todos.json", JSON.stringify(todos, null, 4));
} else {
    console.log("Title mavjud emas");
}
