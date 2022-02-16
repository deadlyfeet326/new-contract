import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Launch = ( {launch, deleteLaunch } ) => {
  let seconds = launch.dateTime
  let offset = new Date(Date.now()).getTimezoneOffset() * 60000
  let dateSeconds = seconds - offset
  let date = new Date(dateSeconds)
  const[showNotes, setShowNotes] = useState(false)


  return (
    <div className='contract' >
        <h3>{launch.name} <Button color="red" text="X" onClick={() => deleteLaunch(launch.name)}/> </h3>
        <p> {date.toLocaleString('en-US', { month: "short", day: "numeric", year: "numeric", hour:'2-digit', minute: '2-digit'} )} </p>
        <a href= {launch.link} target="_blank"> LINK </a>
        <br />
        <Button color={showNotes ? "red" : "green"} text = {showNotes ? "x" : "Show Notes"} onClick = {() => setShowNotes(!showNotes)}/>
        { showNotes && <div classForm="launchNotes">{launch.info}</div> }
    </div>
  )
}

export default Launch