import puppeteer from "puppeteer";

let browser;
let page: any;

const start = async () => {
	browser = await puppeteer.launch({ headless: true });
	page = await browser.newPage();
	console.log("Scrapper instance created");
};

const getData = async (url: string) => {
	let scrapperError = null;

	try {
		await page.goto(url);
	} catch (err) {
		console.log(`Couldn't resolve ${url}`);
		scrapperError = "`Couldn't resolve ${url}`";
	}

	let description;
	let title = await page.title();

	try {
		description = await page.$eval(
			"head > meta[name='description']",
			(element: any) => element.content
		);
	} catch (error) {
		description = "no description";
	}

	let data = {
		title: title ? title : "Untitled",
		desription: description,
		error: scrapperError,
	};

	return data;
};

export { start, getData };
