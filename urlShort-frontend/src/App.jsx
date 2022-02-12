import "./styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing";
import UserPage from "./pages/userPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/app" element={<UserPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
