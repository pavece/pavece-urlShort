import express, { Request, Response } from "express";
import urlModel from "../models/urlModel";

const deleteRouter = express.Router();

deleteRouter.delete("/delete/:id", (req: Request, res: Response) => {
	const id = req.params.id;
	urlModel.deleteOne({ identifyer: id }, err => {
		err ? res.sendStatus(500) : res.json({ message: "Element deleted" });
	});
});

export default deleteRouter;
