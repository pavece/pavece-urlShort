import express from "express";
import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';

const shortUrlRouter = express.Router();

shortUrlRouter.post("/shorten", (req: Request, res: Response) => {
	res.json({ message: req.body.url + uuidv4() });
});

export default shortUrlRouter;
