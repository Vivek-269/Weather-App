import React from 'react'
import "./App.css";
import Weather from './Weather'
import video from './video.mp4'

const App = () => {
  return (
    <>
      <div className='bg'>
        <video autoPlay loop muted playsInline >
          <source src={video} />
        </video>
      </div>
      <Weather />
    </>
  )
}

export default App
