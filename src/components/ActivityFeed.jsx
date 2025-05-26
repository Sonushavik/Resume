import React from 'react'
import barChart from '/assets/activity_bar_chart.png'
const ActivityFeed = () => {
  return (
    <div className='activityFeedContainer'>
      <div className="activityfeedHeader">
        <h4>Activity</h4>
        <h6 style={{opacity: "0.8"}}>3 appointment on this week</h6>
      </div>
      <div className="activityBarChart">
        <img src={barChart} alt="activity feed bar chart" />
      </div>
    </div>
  )
}

export default ActivityFeed
