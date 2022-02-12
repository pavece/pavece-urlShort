import React from "react";

const LandingHeroSection = () => {
	return (
		<div className="hero-section">
			<div className="hero-info">
				<div className="hero-text">
					<h1>The no account url shortner</h1>
					<p>Shorten your links fast without any account neded</p>
				</div>
				<div className="hero-btn">
					<button>Go to your links</button>
				</div>
			</div>
			<div className="hero-ilu-container">
				<img src="hero-ilu.svg" alt="" />
			</div>
		</div>
	);
};

export default LandingHeroSection;
