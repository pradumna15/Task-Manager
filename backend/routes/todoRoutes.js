const express = require("express");  // Changed to require
const { getTodos, addTodo, deleteTodo, toggleTodo } = require("../controllers/todoController");  // Changed to require
const authMiddleware = require("../middleware/authMiddleware");  // Changed to require

const router = express.Router();

router.use(authMiddleware);

router.get("/", getTodos);
router.post("/", addTodo);
router.delete("/:id", deleteTodo);
router.patch("/:id/toggle", toggleTodo);

module.exports = router;  // Export the router
