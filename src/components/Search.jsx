import React, {useState, useEffect, useRef} from 'react'

import { useWeatherUpdate } from '../context/WeatherContext';

import searchIcon from "../images/search-icon.svg"

function Search() {

  const locationRef = useRef("")
  const [location, setLocation] = useState('Whitby Ontario');
  const updateWeather = useWeatherUpdate()
  useEffect(() => {
    const fetchWeather = async (apiMode) => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/${apiMode}.json?key=09cb9c8e29964a0fb2d235905232102&q=${location}&days=7&forecastday=1&hour=24`)
        const data = await response.json()
        updateWeather(data)
      } catch (err) {
        updateWeather(null)
      }
    }
    fetchWeather("forecast")
    
  }, [location])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(locationRef.current.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-row gap-3'>
        <button className='h-10 p-0' type='submit'>
          <img className={'h-8 brightness-0 dark:brightness-100'} src={searchIcon} alt="Search" />
        </button>
        <input
          className='w-52 h-10 p-4 rounded-3xl bg-white flex items-center text-sm text-gray-500 border border-gray-700 dark:border-none'
          type="text"
          placeholder="Search Location" 
          ref={locationRef}/> 
      </form>
    </>
  )
}

export default Search