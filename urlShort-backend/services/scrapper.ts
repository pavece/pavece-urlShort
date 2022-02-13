import puppeteer from "puppeteer";

let browser;
let page: any;

const start = async () => {
	browser = await puppeteer.launch({ headless: true });
	page = await browser.newPage();
	console.log("Scrapper instance created");
};

const getData = async (url: string) => {
	await page.goto(url); 

	let description;

	try {
		description = await page.$eval(
			"head > meta[name='description']",
			(element: any) => element.content
		);
	} catch (error) {
		description = "no description";
	}

	let data = {
		title: await page.title(),
		desription: description,
	};

	return data;
};

export { start, getData };
