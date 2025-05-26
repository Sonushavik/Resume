import React from 'react'

const UpcomingScheduleCard = ({schedule}) => {
  return (
    <div className="UpcomingScheduleCard">
                <div className="cardHeader">
                        <div className='specialist'>{schedule.title}</div>
                        <div className='icon'>{schedule.icon}</div>
                </div>
                <div className="cardBody">
                        <div className="doctorName">{schedule.time}</div>
                </div>
        </div>
  )
}

export default UpcomingScheduleCard
