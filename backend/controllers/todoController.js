const Todo = require("../models/Todo");  // Changed to require

// Get all todos for a specific user
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching todos" });
  }
};

// Add a new todo
const addTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = await Todo.create({ title, description, user: req.user._id });
    res.json(newTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error adding todo" });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ msg: "Todo deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error deleting todo" });
  }
};

// Toggle todo completion
const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error toggling todo" });
  }
};

module.exports = { getTodos, addTodo, deleteTodo, toggleTodo };  // Export functions
