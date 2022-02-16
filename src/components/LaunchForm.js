import { useState } from 'react'

const LaunchForm = ({ addLaunch }) => {
  const[name, setName] = useState('')
  const[dateTime, setDateTime] = useState('')
  const[link, setLink] = useState('')
  const[info, setInfo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    let offset = new Date(Date.now()).getTimezoneOffset() * 60000
    let projectSeconds = new Date(dateTime).getTime() + offset


    let data = {
      name: name,
      dateTime : projectSeconds,
      link: link,
      info: info
    }

    addLaunch(data)

    setName('')
    setDateTime('')
    setLink('')
    setInfo('')
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div>
            <label >Project Name</label>
            <br />
            <input type="text" placeholder='Add Project Name' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label > Date / Time</label>
            <br />
            <input type="datetime-local" id="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Link</label>
          <br />
          <input type="text" id='link' placeholder="Add Link To Project" value={link} onChange={(e) => setLink(e.target.value)}/>
        </div>
        <div>
          <label htmlFor=""> Info </label>
          <br />
          <textarea name="Info" id="" cols="30" rows="10" placeholder='Add info about the project' value={info} onChange={(e) => setInfo(e.target.value)}></textarea>
        </div>

        <input type="submit" value='Add Launch' className="btn btn-block"/>
    </form>
  )
}

export default LaunchForm