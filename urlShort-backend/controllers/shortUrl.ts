import express from "express";
import { Request, Response } from "express";
import { nanoid } from "nanoid";
import * as scrapper from "../services/scrapper";

import urlModel from "../models/urlModel";

const shortUrlRouter = express.Router();

shortUrlRouter.post("/shorten", async (req: Request, res: Response) => {
	const id = nanoid();
	const siteData = await scrapper.getData(req.body.original);

	const newUrl = new urlModel({
		title: req.body.title,
		desription: req.body.description,
		originalUrl: req.body.original,
		shortUrl: `http://localhost:5000/url/${id}}`,
		identifyer: id,
		siteData,
	});
	newUrl.save((err: String) => {
		err
			? res.sendStatus(500)
			: res.json({
					url: `http://localhost:5000/url/${id}}`,
					description: req.body.description,
					originalUrl: req.body.original,
					siteData,
			  });
	});
});

export default shortUrlRouter;
