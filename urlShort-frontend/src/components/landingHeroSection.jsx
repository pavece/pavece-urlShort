import React from "react";
import { Link } from "react-router-dom";

const LandingHeroSection = () => {
	return (
		<div className="hero-section">
			<div className="hero-info">
				<div className="hero-text">
					<h1>The no account url shortener</h1>
					<p>Shorten your links fast without any account neded</p>
				</div>
				<div className="hero-btn">
					<Link to="/app">
						<button>Go to your links</button>
					</Link>
				</div>
			</div>
			<div className="hero-ilu-container">
				<img src="hero-ilu.svg" alt="" />
			</div>
		</div>
	);
};

export default LandingHeroSection;
