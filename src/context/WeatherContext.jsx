import React, { useContext, useState } from 'react';

const WeatherContext = React.createContext();
const WeatherUpdateContext = React.createContext();

export function useWeather() {
  return useContext(WeatherContext);
}

export function useWeatherUpdate(newScience) {
  return useContext(WeatherUpdateContext);
}

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);

  function changeWeather(data) {
    setWeather((weather) => data);
  }

  return (
    <WeatherContext.Provider value={weather}>
      <WeatherUpdateContext.Provider value={changeWeather}>
        {children}
      </WeatherUpdateContext.Provider>
    </WeatherContext.Provider>
  );
}
