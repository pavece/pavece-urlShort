const localRead = () => {
	return JSON.parse(localStorage.getItem("urls"));
};

const localCreate = () => {
	localRead() ? null : localStorage.setItem("urls", JSON.stringify([]));
};

const localAdd = element => {
	const elements = localRead();
	elements.push(element);
	localStorage.setItem("urls", JSON.stringify(elements));
};

const localDeleteById = id => {
	const elements = localRead();

	if (elements.find(e => e.id === id)) {
		elements.splice(elements.findIndex(e => e.id === id), 1);
	} else {
		return;
	}

	localStorage.setItem("urls", JSON.stringify(elements));
};

export { localAdd, localCreate, localRead, localDeleteById };
