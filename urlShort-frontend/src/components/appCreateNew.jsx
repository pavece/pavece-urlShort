import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { localAdd } from "../utils/handleLocalStorage";

function AppCreateNew(props) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);

	const fetchData = async () => {
		try {
			console.log(userData);
			setLoading(true);
			const axiosData = await axios.post("http://localhost:5000/api/shorten", {
				original: userData,
			});
			setData(axiosData.data);
			localAdd(axiosData.data);
			setLoading(false);
			props.onUrlAdd(axiosData.data)

		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	return (
		<div className="create-new-conteiner">
			<h1>New URL</h1>
			<p>Create a new element and share it with anyone</p>
			<form action="">
				<input
					type="text"
					name=""
					id=""
					placeholder="url"
					onChange={e => {
						setUserData(e.target.value);
					}}
				/>
			</form>
			<button onClick={fetchData}>Create</button>
		</div>
	);
}

export default AppCreateNew;
