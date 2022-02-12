import React from "react";
import Nav from "../components/nav";
import LandingHeroSection from "../components/landingHeroSection";
import LandingFeaturesSection from "../components/landingFeaturesSection";
import LandingFooter from "../components/landingFooter";
export const Landing = () => {
	return (
		<div>
			<Nav />
			<LandingHeroSection />
			<LandingFeaturesSection />
			<LandingFooter />
		</div>
	);
};
