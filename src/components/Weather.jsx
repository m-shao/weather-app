import Search from './Search'
import WeekWeather from './WeekWeather'

import { useWeather } from '../context/WeatherContext'

import { weatherConditionCodes, weatherImages } from '../data/weatherConditions'

function Weather() {
    const weather = useWeather()
    if(weather.error){
        //do something   
    }
    const location = weather?.location
    const current = weather?.current
    const condition = current?.condition

    const weatherCode = weatherConditionCodes[condition?.code]
    const weatherIcon = weatherImages[weatherCode]

    return (
        <div className='w-4/5 h-3/4 bg-gray-100 dark:bg-zinc-900 rounded-3xl p-12 flex flex-col justify-between box-border'>
            <div className="w-full flex justify-between">
                <div>
                    <h1 className='text-4xl font-bold'>{location?.name}</h1>
                    <h2 className='text-lg'>{location?.country}</h2>
                </div>
                <Search/>
            </div>
            <div className='w-full flex h-2/5 items-center justtify-center gap-14'>
                <div>
                    <h1 className='text-7xl'>{current?.temp_c}°C</h1>
                    <h2 className='text-3xl'>{condition?.text}</h2>
                </div>
                <img className={'h-full dark:brightness-100 ' + (weatherCode === "snow" ? "brightness-50": "brightness-100")} src={weatherIcon} alt="current weather" />
                <div className='ml-20'>
                    <ul>
                        <li className='text-2xl mb-6'>Wind Speed: {current?.wind_kph} km/h</li>
                        <li className='text-2xl mb-6'>Precipitation: 1.4mm</li>
                        <li className='text-2xl mb-6'>Humidity: {current?.humidity}%</li>
                        <li className='text-2xl mb-6'>Pressure: {current?.pressure_in}mb</li>
                        <li className='text-2xl mb-6'>Feels Like: {current?.feelslike_c}°C</li>
                    </ul>
                </div>
            </div>
            <WeekWeather/>
        </div>
    )
}

export default Weather