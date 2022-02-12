import React from "react";
import LandingFeautre from "./ladingFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faGaugeHigh, faShield } from "@fortawesome/free-solid-svg-icons";

function LandingFeaturesSection() {
	return (
		<div className="features-container">
			<LandingFeautre icon="" text="Easy">
				<FontAwesomeIcon icon={faPerson} />
			</LandingFeautre>
			<LandingFeautre icon="" text="Fast">
				<FontAwesomeIcon icon={faGaugeHigh} />
			</LandingFeautre>
			<LandingFeautre icon="" text="Secure">
				<FontAwesomeIcon icon={faShield} />
			</LandingFeautre>
		</div>
	);
}

export default LandingFeaturesSection;
