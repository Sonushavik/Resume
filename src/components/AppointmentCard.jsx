import React from "react";

const AppointmentCard = ({ doctor }) => {
	return (
		<div className="appointmentDetailsCard">
			<div className="cardHeader">
				<div className="specialist">{doctor.specialization}</div>
				<div className="icon">{doctor.icon}</div>
			</div>
			<div className="cardBody">
				<div className="doctorTime">{doctor.duration}</div>
				<div className="doctorName">{doctor.name}</div>
			</div>
		</div>
	);
};

export default AppointmentCard;
