require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helemt = require("helmet");

const todo = require("./routes/todo");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helemt());

const port = process.env.PORT || 5001;

app.listen(port, console.log(`Server is running on port ${port}`));

mongoose.set("strictQuery", false);
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("Connected!"))
	.catch((err) => {
		console.log(err);
	});

// routes
app.use("/api/v1/todo", todo);
