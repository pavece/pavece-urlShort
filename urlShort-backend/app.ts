import express from "express";
import shortUrlRouter from "./controllers/shortUrl";
import redirectUrlRouter from "./controllers/redirectUrl";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

import * as scrapper from "./services/scrapper";


const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


app.use(express.json());
app.use(cors(options));

//database connection
mongoose.connect(
	`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.bjvne.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
	err => {
		err ? console.log(err) : console.log("Connected to database");
	}
);

app.use("/api", shortUrlRouter);
app.use("/url", redirectUrlRouter);

scrapper.start();

app.listen(process.env.PORT, () => {
	console.log(`listening in ${process.env.PORT}`);
});
