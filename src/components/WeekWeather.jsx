import React from 'react'

import clearDay from '../images/sunny.svg'

function WeekWeather() {
  return (
    <>
        <div className='w-full flex justify-center'>
            <ul className='flex flex-row h-20 gap-10'>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Mon</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Tue</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Wed</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Thu</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Fri</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Sat</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
                <li className='flex flex-col items-center'>
                    <h3 className='text-lg'>Sun</h3>
                    <img className='h-full' src={clearDay} alt="" />
                </li>
            </ul>
        </div>
    </>
  )
}

export default WeekWeather