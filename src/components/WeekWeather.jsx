import React from 'react'

import { useWeather } from '../context/WeatherContext'
import { weatherConditionCodes, weatherImages } from '../data/weatherConditions'
import { weekdays } from '../data/constants'

function WeekWeather() {

    const weather = useWeather()
    const forecast = weather?.forecast
    const forecastDay = forecast?.forecastday

    let curDate = null
    let curDateList = null
    let d = null
    let index = null
    let forecastCode = null

    return (
        <>
            <div className='w-full flex justify-center mb-6'>
                <ul className='flex flex-row h-20 gap-10'>
                    {forecastDay?.map((specDay) => {
                        curDate = specDay?.date
                        curDateList = curDate.split("-")
                        d = new Date(`${curDateList[1]} ${curDateList[2]}, ${curDateList[0]}`)
                        index = d.getDay()
                        forecastCode = forecast?.forecastday[index]?.day?.condition?.code
                        return(
                            <li className='flex flex-col items-center' key={weekdays[index].id}>
                                <h3 className='text-lg'>{weekdays[index].value}</h3>
                                <img className={'h-4/5 dark:brightness-100 ' + 
                                    (weatherConditionCodes[forecastCode] == "snow"? "brightness-50":"brightness-100")} 
                                    src={
                                    weatherImages[weatherConditionCodes[forecastCode]]
                                    } alt="Weather" />
                                <h3>
                                    {forecast?.forecastday[index]?.day?.mintemp_c}/
                                    {forecast?.forecastday[index]?.day?.maxtemp_c}
                                </h3>
                            </li>
                        )})}
                </ul>
            </div>
        </>
    )
}

export default WeekWeather