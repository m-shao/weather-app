import { useState, useEffect } from 'react'
import Weather from "./components/Weather"

function App() {
  
  return (
    <div className="App">
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center flex-col gap-6 bg-zinc-800">
        <h1 className="text-5xl font-bold">Weather Forecast</h1>
        <Weather/>
      </div>
    </div>
  );
}

export default App;
