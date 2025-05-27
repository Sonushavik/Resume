import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { FaArrowRightLong } from "react-icons/fa6";

const HealthStatusCards = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/data/healthStatusData.json")
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				console.log(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<div className="healthStatusCardContainer">
			{data.map((data, index) => {
				return <Cards key={index} data={data} />;
			})}
			<p className="detailsBtn">
				Details
				<span>
					<FaArrowRightLong />
				</span>
			</p>
		</div>
	);
};

export default HealthStatusCards;
