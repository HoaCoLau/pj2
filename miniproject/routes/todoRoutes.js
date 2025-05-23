const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Định nghĩa các route
router.get('/todos', todoController.getTodos);
router.get('/todos/:id', todoController.getTodoById);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;