const todos = require('../models/todoModel');

// Lấy danh sách tất cả các todo
exports.getTodos = (req, res) => {
    res.json(todos);
};

// Lấy một todo theo ID
exports.getTodoById = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
};

// Tạo một todo mới
exports.createTodo = (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed || false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// Cập nhật một todo
exports.updateTodo = (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
};

// Xóa một todo
exports.deleteTodo = (req, res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Todo not found" });

    todos.splice(index, 1);
    res.status(204).send();
};