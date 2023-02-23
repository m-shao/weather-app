import React from 'react'

import { useWeather } from '../context/WeatherContext'
import { weatherConditionCodes, weatherImages } from '../data/weatherConditions'
import { weekdays } from '../data/constants'

import clearDay from '../images/sunny.svg'

function WeekWeather() {

    const weather = useWeather()
    const forecast = weather?.forecast
    // let weatherIcon = weatherImages[weatherConditionCodes.forecast?.forecastday[index]?.condition?.text]
    let weatherIcon = null

    return (
        <>
            <div className='w-full flex justify-center mb-6'>
                <ul className='flex flex-row h-20 gap-10'>
                    {weekdays.map((weekday, index) => 
                        <li className='flex flex-col items-center' key={weekday.id}>
                            <h3 className='text-lg'>{weekday.value}</h3>
                            <img className='h-4/5' src={weatherImages[weatherConditionCodes[forecast?.forecastday[index]?.day?.condition?.code]]} alt="Weather" />
                            <h3>{forecast?.forecastday[index]?.day?.mintemp_c}/{forecast?.forecastday[index]?.day?.maxtemp_c}</h3>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default WeekWeather