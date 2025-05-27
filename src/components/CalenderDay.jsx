import React from "react";

const CalendarDay = ({ day, date, times, doctorSlots }) => {
	return (
		<div className="calenderPerdayDetails">
			<div className="calenderDay">{day}</div>
			<div className="calenderDate">{date}</div>
			{times.map((time, index) => {
				const isDoctorAvailable = doctorSlots.some(
					(slot) => slot.time === time && slot.date === date && slot.day === day
				);
				return (
					<div
						key={index}
						className={`calenderTime ${isDoctorAvailable ? "available" : ""}`}
					>
						{time}
					</div>
				);
			})}
		</div>
	);
};

export default CalendarDay;
