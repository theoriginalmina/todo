const express = require("express");

const router = express.Router();

const {
	createTodo,
	updateTodo,
	deleteTodo,
	getTodo,
	getAllTodo,
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
 * @access private
 */

router.delete("/:todoId", deleteTodo);

/**
 * @route GET api/todo/:userId/:todoId
 * @description Get to do information for specific user
 * @access private
 */

router.get("/:userId/:todoId", getTodo);

/**
 * @route GET api/todo/:userId
 * @description Get all to do for specific user.
 * @access private
 */

router.get("/:userId", getAllTodo);

module.exports = router;
