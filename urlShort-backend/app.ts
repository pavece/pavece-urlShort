import express from "express";
import shortUrlRouter from "./controllers/shortUrl";
import redirectUrlRouter from "./controllers/redirectUrl";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());

//database connection
mongoose.connect(
	`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.bjvne.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
	err => {
		err ? console.log(err) : console.log("Connected to database");
	}
);

app.use("/api", shortUrlRouter);
app.use("/url", redirectUrlRouter);

app.listen(process.env.PORT, () => {
	console.log(`listening in ${process.env.PORT}`);
});
