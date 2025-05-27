import React from "react";
import AnatomyImage from "/assets/human-body-frontal-removebg-preview.png";

const AnatomySection = () => {
	return (
		<div className="anatomySectionContainer">
			<img
				src={AnatomyImage}
				alt="a Anatomy body image"
				className="anatomyImage"
			/>
		</div>
	);
};

export default AnatomySection;
