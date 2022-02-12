import React from "react";
import { Link } from "react-router-dom";

function LandingFooter() {
	return (
		<footer className="landing-footer">
			<div className="footer-initial-container">
				<img src="urlShortLogoBlack.svg" alt="" />
				<Link to="/app">
					<p>Start now</p>
				</Link>
			</div>
			<div>
				<p>(C)Pavece</p>
			</div>
		</footer>
	);
}

export default LandingFooter;
