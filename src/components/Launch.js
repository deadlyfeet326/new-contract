import React from 'react'
import Button from './Button'

const Launch = ( {launch, deleteLaunch } ) => {
  let seconds = launch.dateTime
  let offset = new Date(Date.now()).getTimezoneOffset() * 60000
  let dateSeconds = seconds - offset
  let date = new Date(dateSeconds)


  return (
    <div className='contract' >
        <h3>{launch.name} <Button color="red" text="X" onClick={() => deleteLaunch(launch.name)}/> </h3>
        <p> {date.toLocaleString('en-US', { month: "short", day: "numeric", year: "numeric", hour:'2-digit', minute: '2-digit'} )} </p>
        <a href= {launch.link} target="_blank"> LINK </a>
    </div>
  )
}

export default Launch