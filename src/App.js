import React from 'react'
import "./App.css";
import Weather from './Weather'

const App = () => {
  return (
    <>
    <div className='bg'>
      <video autoPlay loop muted playsInline >
        <source src="./WeatherIMG/video.mp4"/>
      </video>
    </div>
    <Weather/>
    </>
  )
}

export default App
