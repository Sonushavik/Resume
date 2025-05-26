import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";   
import { IoIosAddCircle } from "react-icons/io";
import { FcStatistics } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";



const Sidebar = () => {
  return (
    <>
    <div className='sidebarBox'>
      <h5>General</h5>
      <ul className='sidebarList'>
        <li><span><MdDashboard /></span>Dashboard</li>
        <li><span><FaHistory/></span> History</li>
        <li><span><FaUser/></span>Profile</li>
        <li><span><FaCalendarAlt/></span>Calender</li>
        <li><span><IoIosAddCircle/></span>Appointments</li>
        <li><span><FcStatistics/></span>Statistics</li>
        </ul>
        <h5>Tools</h5>
        <ul className='sidebarList'>
          <li><span><IoChatbubbleEllipsesOutline /></span>Chat</li>
          <li><span><IoCall /></span>Support</li>
        </ul>

        <div className="setting">
          <li><span><CiSettings/></span>setting</li>
        </div>
    </div>
    </>
  )
}

export default Sidebar
