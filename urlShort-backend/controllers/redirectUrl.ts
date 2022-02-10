import express from "express";
import { Request, Response } from "express";
const redirectUrlRouter = express.Router();
import urlModel from "../models/urlModel";

redirectUrlRouter.get("/:id", (req: Request, res: Response) => {
	const id: String = req.params.id;
	urlModel.find({ identifyer: id }, (err: String, result: any) => {
		err ? res.sendStatus(404) : res.redirect(result[0].originalUrl);
	});
});

export default redirectUrlRouter;
