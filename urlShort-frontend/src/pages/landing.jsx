import React from "react";
import Nav from "../components/nav";
import LandingHeroSection from "../components/landingHeroSection";
import LandingFooter from "../components/landingFooter";
export const Landing = () => {
	return (
		<div>
			<Nav />
			<LandingHeroSection />
			<LandingFooter />
		</div>
	);
};
