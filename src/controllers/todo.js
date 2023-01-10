const Todo = require("../models/todo");

exports.createTodo = (req, res) => {
	const { userId } = req.params;
	const { title, description } = req.body;
	const todo = { userId, title, description };

	Todo.create(todo)
		.then((data) => {
			res.json({ message: "todo added successfully", data });
		})
		.catch((err) =>
			res.status(400).json({
				message: "unable to add new todo",
				error: err.message,
			})
		);
};

exports.updateTodo = (req, res) => {
	const { userId } = req.params;
	const { todoId } = req.params;
	const { title, description } = req.body;

	Todo.findOneAndUpdate(
		{ userId, _id: todoId },
		{
			title,
			description,
		}
	)
		.then((todo) => {
			return res.json({ message: "updated successfully", todo });
		})
		.catch((err) =>
			res
				.status(400)
				.json({ error: "unable to update todo", message: err.message })
		);
};

exports.deleteTodo = (req, res) => {
	const { todoId } = req.params;
	Todo.findByIdAndRemove(todoId)
		.then((data) => {
			res.json({ message: "todo deleted successfully", data });
		})
		.catch((err) => {
			res.status(404).json({
				error: "book not found",
				message: err.message,
			});
		});
};

exports.getTodo = (req, res) => {
	const { userId, todoId } = req.params;

	Todo.findOne({ userId, _id: todoId })
		.then((todo) => {
			return res.json(todo);
		})
		.catch((err) => {
			return res
				.status(404)
				.json({ error: "book not found", message: err.message });
		});
};

exports.getAllTodo = (req, res) => {
	const { userId } = req.params;

	Todo.find({ userId })
		.then((todos) => {
			if (todos.length === 0) {
				return res.status(404).json({
					message: "No todos were found",
				});
			}
			return res.json(todos);
		})
		.catch((err) => {
			return res.status(404).json({ message: err.message });
		});
};
