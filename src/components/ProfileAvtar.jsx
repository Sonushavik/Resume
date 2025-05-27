import React from 'react'
import profilePic from '/assets/boy.png' 

const ProfileAvtar = () => {
  return (
    <div className='profileAvtarBox'>
      <img src={profilePic} alt="profil pic" className='profilePic'/>
    </div>
  )
}

export default ProfileAvtar

