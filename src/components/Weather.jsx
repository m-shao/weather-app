import React from 'react'

import Search from './Search'
import WeekWeather from './WeekWeather'

import fewClouds from '../images/few-clouds-m.svg'

function Weather() {
  return (
    <div className='w-4/5 h-3/4 bg-zinc-900 rounded-3xl p-12 flex flex-col justify-between'>
        <div className="w-full flex justify-between">
            <div>
                <h1 className='text-4xl font-bold'>Whitby, ON</h1>
                <h2 className='text-lg'>Canada</h2>
            </div>
            <Search/>
        </div>
        <div className='w-full flex h-1/2 items-center justtify-center gap-14'>
            <div>
                <h1 className='text-7xl'>20°C</h1>
                <h2 className='text-3xl'>Overcast</h2>
            </div>
            <img className='h-full' src={fewClouds} alt="current weather" />
            <div className='ml-20'>
                <ul>

                    <li className='text-3xl mb-6'>Wind Speed: 57m/s</li>
                    <li className='text-3xl mb-6'>Precipitation: 26%</li>
                    <li className='text-3xl mb-6'>Humidity: 96%</li>
                    <li className='text-3xl mb-6'>Pressure: 100P</li>
                    <li className='text-3xl mb-6'>Feels Like: 18°C</li>
                </ul>
            </div>
        </div>
        <WeekWeather/>
    </div>
  )
}

export default Weather