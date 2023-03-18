import React, { useState } from 'react'
import moment from 'moment/moment';

export default function Clock() {
    let time=new Date().toLocaleTimeString();
    const [currTime,setcurrTime]=useState(time);
    const updateTime=()=>{
        time=new Date().toLocaleTimeString();
        setcurrTime(time);
       };
       setInterval(updateTime,1000)
  return (
    <div className='clock'>
      <h1>{currTime}</h1>
      <h4>{moment().format('dddd, Do MMM YY')}</h4>
    </div>
  )
}