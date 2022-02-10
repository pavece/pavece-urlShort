import express from "express";
import { Request, Response } from "express";
import { nanoid } from "nanoid";

import urlModel from "../models/urlModel";

const shortUrlRouter = express.Router();

shortUrlRouter.post("/shorten", (req: Request, res: Response) => {
	const id = nanoid();
	const newUrl = new urlModel({
		title: req.body.title,
		desription: req.body.description,
		originalUrl: req.body.original,
		shortUrl: `http://localhost:5000/url/${id}}`,
		identifyer: id,
	});
	newUrl
		.save((err: String) => {
			err ? res.sendStatus(500)
			: res.json({statusMessage: "Url saved in database"})
		})
		
});

export default shortUrlRouter;
