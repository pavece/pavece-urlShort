import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { localAdd } from "../utils/handleLocalStorage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppCreateNew(props) {
	const [loading, setLoading] = useState(false);
	const [userData, setUserData] = useState(null);

	const fetchData = async e => {
		e.preventDefault();
		try {
			setLoading(true);
			if (userData.startsWith("http")) {
				const axiosData = await axios.post(
					"http://localhost:5000/api/shorten",
					{
						original: userData,
					}
				);

				localAdd(axiosData.data);
				setLoading(false);
				props.onUrlAdd(axiosData.data);
			} else {
				setLoading(false);
				toast.warning("Error");
			}
		} catch (error) {
			setLoading(false);
			toast.error("Something went wrong");
			console.log(error);
		}
	};

	return (
		<div className="create-new-conteiner">
			<h1>New URL</h1>
			<p>Create a new element and share it with anyone</p>
			<form onSubmit={e => fetchData(e)}>
				<input
					type="text"
					name=""
					id=""
					placeholder="url"
					onChange={e => {
						setUserData(e.target.value);
					}}
					className="url-input"
				/>
				{loading ? (
					<button className="loading-btn">Creating</button>
				) : (
					<button type="submit">Create</button>
				)}
			</form>

			<ToastContainer
				position="top-right"
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
