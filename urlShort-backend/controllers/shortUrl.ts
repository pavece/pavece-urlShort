import express from "express";
import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { v4 as uuidv4 } from "uuid";
import * as scrapper from "../services/scrapper";

import urlModel from "../models/urlModel";

const shortUrlRouter = express.Router();

shortUrlRouter.post("/shorten", async (req: Request, res: Response) => {
	const id = nanoid();

	//generating database id so i don't need to retrive the data after uploading to get mongo ID and i can use it in order to delete elements
	const databaseId = uuidv4();
	
	const siteData = await scrapper.getData(req.body.original);

	const newUrl = new urlModel({
		title: siteData.title,
		desription: siteData.desription,
		originalUrl: req.body.original,
		shortUrl: `http://localhost:5000/url/${id}}`,
		identifyer: databaseId,
	});
	newUrl.save((err: String) => {
		err
			? res.sendStatus(500)
			: res.json({
					url: `http://localhost:5000/url/${id}`,
					originalUrl: req.body.original,
					id: databaseId,
					siteData,
			  });
	});
});

export default shortUrlRouter;
