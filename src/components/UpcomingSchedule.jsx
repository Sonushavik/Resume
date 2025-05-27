import React from "react";
import UpcomingScheduleCard from "./UpcomingScheduleCard";
import upcomingSchedule from "../../public/data/upcomingDoctorSchedule";

const UpcomingSchedule = () => {
	return (
		<div className="upcomingScheduleContainer">
			<p>The Upcoming Schedule</p>
			{upcomingSchedule.map((daySchedule, index) => (
				<div className="daySchedule">
					<span style={{ opacity: "0.8" }}>On {daySchedule.day}</span>
					<div className="scheduleCards">
						{daySchedule.schedules.map((schedule, index) => (
							<UpcomingScheduleCard key={index} schedule={schedule} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default UpcomingSchedule;
