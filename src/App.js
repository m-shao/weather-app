import { useState } from 'react'
import { WeatherProvider } from './context/WeatherContext'

import Weather from "./components/Weather"

import sun from './images/sun.svg'
import moon from './images/moon.svg'
//test commit comment
function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark"))
  return (
    <div className={"App " + (dark === "1"? "dark" : "")}>
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center flex-col gap-6 text-black bg-gray-300 dark:text-white dark:bg-zinc-800">
        <h1 className="text-5xl font-bold">Weather Forecast</h1>
        <WeatherProvider>
          <Weather/>
        </WeatherProvider>
      </div>
      <button className="p-0 m-0" onClick={() => {
        let value = null
        localStorage.getItem("dark") === "1"? value="0": value="1"
        localStorage.setItem("dark", value)
        setDark(value)
      }}>
        <div className="w-16 h-16 fixed right-8 bottom-8 rounded-3xl bg-gray-100 dark:bg-zinc-900 flex justify-center items-center">
          <img className="w-1/2 dark:invert" src={dark === "1"? moon : sun} alt="" />
        </div>
      </button>
    </div>
  )
}

export default App;
