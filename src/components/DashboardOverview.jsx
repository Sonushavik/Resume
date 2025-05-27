import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

const DashboardOverview = () => {
	return (
		<div className="dashboardOverviewContainer">
			<AnatomySection />
			<HealthStatusCards />
		</div>
	);
};

export default DashboardOverview;
