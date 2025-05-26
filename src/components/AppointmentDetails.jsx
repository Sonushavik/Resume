import React from 'react'
import AppointmentCard from './AppointmentCard'
import doctorSlots from '../../public/data/doctorSlots'


const AppointmentDetails = () => {
  return (
    <div className='appointmentDetailsContainer'>
        {
                doctorSlots.map((slot, index) => (
                <AppointmentCard key={index} doctor={slot.doctor} />
                ))
        }
    </div>
  )
}

export default AppointmentDetails
