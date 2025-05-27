import React from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import calendarData from "../../public/data/calenderData";
import CalendarDay from "./CalenderDay";
import doctorSlots from "../../public/data/doctorSlots";
import AppointmentDetails from "./AppointmentDetails";

const CalenderView = () => {
	return (
		<div>
			<div className="calenderHeader">
				<h6>October 2021</h6>
				<h6>
					<FaLongArrowAltLeft />
					<FaLongArrowAltRight />
				</h6>
			</div>

			<div className="calenderContainer">
				{calendarData.map((item, index) => (
					<CalendarDay
						key={index}
						day={item.day}
						date={item.date}
						times={item.times}
						doctorSlots={doctorSlots}
					/>
				))}
			</div>

			<AppointmentDetails />
		</div>
	);
};

export default CalenderView;
