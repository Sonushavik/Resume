import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Notification from './Notification'
import ProfileAvtar from './ProfileAvtar'
import AddButtonIcon from './AddButtonIcon'

const Header = () => {
  return (
        <>
    <div className='headerBox'>
      <div className="logoContainer"><Logo/></div>
      <div className="utilityContainer" >
        <SearchBar/>
        <Notification/>
        </div>
      <div className="headerProfile">
        <ProfileAvtar/>
        <AddButtonIcon/>
      </div>
    </div>
    </>
  )
} 

export default Header
