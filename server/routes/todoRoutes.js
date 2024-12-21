// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
const authenticate = require('../middleware/auth');

// Create a new todo
router.post('/', authenticate, async (req, res) => {
    try {
        const todo = new Todo({ ...req.body, userId: req.user.id });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        console.error('Error in POST /todos:', error);
        res.status(400).json({ error: error.message });
    }
});

// Get all todos for the authenticated user
router.get('/', authenticate, async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.user.id });
        res.json(todos);
    } catch (error) {
        console.error('Error in GET /todos:', error);
        res.status(500).json({ error: error.message });
    }
});

// Update a todo
router.put('/:id', authenticate, async (req, res) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        res.json(todo);
    } catch (error) {
        console.error('Error in PUT /todos/:id:', error);
        res.status(400).json({ error: error.message });
    }
});

// Delete a todo
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error in DELETE /todos/:id:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;