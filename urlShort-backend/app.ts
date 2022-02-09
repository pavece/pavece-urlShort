import express from "express";
import shortUrlRouter from "./controllers/shortUrl";

const app = express();

app.use(express.json());

app.use("/api", shortUrlRouter);

app.listen(5000, () => {
	console.log("listening in 5000");
});
