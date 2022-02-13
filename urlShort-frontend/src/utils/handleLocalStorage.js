const localRead = () => {
	return JSON.parse(localStorage.getItem("urls"));
};

const localCreate = () => {
	localRead()
		? null
		: localStorage.setItem(
				"urls",
				JSON.stringify([
					{
						url: "http://localhost:5000/url/TOKpgIKCk03URB1kX5c2J",
						originalUrl: "http://pavece.com",
						siteData: {
							desription: "Pavece developer, personal page and portfolio",
							title: "Pavece developer",
						},
					},
				])
		  );
};

const localAdd = element => {
	const elements = localRead();
	elements.push(element);
	localStorage.setItem("urls", JSON.stringify(elements));
};

const localDeleteById = id => {
	const elements = localRead();
	let newElements = elements;

	if (elements.find(e => e.name === id)) {
		elements.splice(elements.findIndex(e => e.name === id));
	} else {
		return;
	}

	localStorage.setItem("urls", JSON.stringify(elements));
};

export { localAdd, localCreate, localRead, localDeleteById };
