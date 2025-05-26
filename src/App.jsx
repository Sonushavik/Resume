import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/MainDashboard";

function App() {
	return (
		<>
			<div className="appContainer">
				<div className="headerContainer">
					<Header />
				</div>
				<div className="bodyContainer">
					<div className="sidebarContainer">
						<Sidebar />
					</div>
					<div className="dashboardContainer">
						<DashboardMainContent />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
