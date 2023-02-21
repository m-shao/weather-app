import React from 'react'

import Search from './Search'

import fewClouds from '../images/few-clouds-m.png'

function Weather() {
  return (
    <div className='w-4/5 h-3/4 bg-zinc-900 rounded-3xl p-12 flex flex-col'>
        <div className="w-full flex justify-between">
            <div>
                <h1 className='text-4xl font-bold'>Whitby, ON</h1>
                <h2 className='text-lg'>Canada</h2>
            </div>
            <Search/>
        </div>
        <div className='w-full flex h-1/2 items-center gap-8'>
            <div>
                <h1 className='text-7xl'>20°C</h1>
                <h2 className='text-3xl'>Overcast</h2>
            </div>
            <img className='h-full' src={fewClouds} alt="current weather" />
        </div>

    </div>
  )
}

export default Weather