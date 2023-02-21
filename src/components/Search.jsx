import React from 'react'

import searchIcon from "../images/search-icon.svg"

function Search() {
  return (
    <>
        <div className='flex flex-row gap-3'>
            <button className='h-10 p-0'>
              <img className='h-8' src={searchIcon} alt="Search" />
            </button>
            <input
              className='w-52 h-10 p-4 rounded-3xl bg-white flex items-center text-sm text-gray-500'
              type="text"
              id="search"
              placeholder="Search something.." /> 
        </div>
    </>
  )
}

export default Search