import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
	title: { type: String, trim: true },
	description: { type: String, trim: true },
	originalUrl: { type: String, trim: true, required: true },
	shortUrl: { type: String, trim: true, required: true },
	identifyer: { type: String, trim: true, required: true },
});

const urlModel = mongoose.model("urls", urlSchema);

export default urlModel;
