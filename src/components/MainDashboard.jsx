import React from "react";
import DashboardOverview from "./DashboardOverview";
import ActivityFeed from "./ActivityFeed";
import { FaAngleDown } from "react-icons/fa";
import CalenderView from "./CalenderView";
import UpcomingSchedule from "./UpcomingSchedule";

const DashboardMainContent = () => {
	return (
		<div>
			<div className="dashboardBox">
				<div className="dbox">
					<div className="dashboardHeader">
						<h2>Dashboard</h2>
						<h5>
							This week{" "}
							<span>
								<FaAngleDown />
							</span>
						</h5>
					</div>
					<DashboardOverview />
					<ActivityFeed />
				</div>
				<div className="dbox">
					<CalenderView />
					<UpcomingSchedule />
				</div>
			</div>
		</div>
	);
};

export default DashboardMainContent;
