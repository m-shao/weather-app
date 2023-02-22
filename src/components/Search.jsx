import React, {useState, useEffect, useRef} from 'react'

import searchIcon from "../images/search-icon.svg"

function Search({ onJsonData }) {
  
  const [location, setLocation] = useState('Whitby Ontario');
  const locationRef = useRef("")
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    console.log(weather)
  }, [weather])

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=09cb9c8e29964a0fb2d235905232102&q=${location}`);
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setWeather(err)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setLocation(locationRef.current.value)
    fetchWeather()
  }


  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-row gap-3'>
        <button className='h-10 p-0' type='submit'>
          <img className='h-8' src={searchIcon} alt="Search" />
        </button>
        <input
          className='w-52 h-10 p-4 rounded-3xl bg-white flex items-center text-sm text-gray-500'
          type="text"
          placeholder="Search Location" 
          ref={locationRef}/> 
      </form>
    </>
  )
}

export default Search