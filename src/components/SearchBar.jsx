import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {

  return (
    <>
        <div className='searchBarContainer'>
        <span className="searchButton"><CiSearch /></span>
        <input type="text" placeholder="Search" className="searchInput" />
        </div>
    </>
  )
}

export default SearchBar
