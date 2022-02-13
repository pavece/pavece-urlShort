import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { localAdd } from "../utils/handleLocalStorage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppCreateNew(props) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);

	const fetchData = async () => {
		try {
			console.log(userData);
			setLoading(true);
			if (userData.startsWith("http")) {
				const axiosData = await axios.post(
					"http://localhost:5000/api/shorten",
					{
						original: userData,
					}
				);
				setData(axiosData.data);
				localAdd(axiosData.data);
				setLoading(false);
				props.onUrlAdd(axiosData.data);
			} else {
				console.log("err")
				setLoading(false);
				toast.warning("Error")
			}
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
			{loading ? <p>Loading</p> : <button onClick={fetchData}>Create</button>}
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default AppCreateNew;
