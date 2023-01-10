const express = require("express");

const router = express.Router();

const {
	createTodo,
	updateTodo,
	deleteTodo,
	getTodo,
} = require("../controllers/todo");

/**
 * @route POST api/todo/:userId
 * @description Add a new TODO
 * @access private
 */

router.post("/:userId", createTodo);

/**
 * @route PUT api/todo/:userId/:todoId
 * @description Update TODO
 * @access private
 */

router.put("/:userId/:todoId", updateTodo);

/**
 * @route DELETE api/todo/:todoId
 * @description delete todo
 * @access public
 */

router.delete("/:todoId", deleteTodo);

/**
 * @route GET api/todo/:userId/:todoId
 * @description Get to do information for specific user
 * @access public
 */

router.get("/:userId/:todoId", getTodo);

module.exports = router;
