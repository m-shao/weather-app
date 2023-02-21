import React from 'react'

import searchIcon from "../images/search-icon.svg"

function Search() {
  return (
    <>
        <div className='flex flex-row gap-3'>
            <button className='h-10 p-0'><img src={searchIcon} alt="Search" /></button>
            <div className='w-52 h-10 rounded-3xl bg-white flex items-center'>
                <h3 className='text-sm text-gray-500 ml-4'>Search Location</h3>
            </div>
        </div>
    </>
  )
}

export default Search