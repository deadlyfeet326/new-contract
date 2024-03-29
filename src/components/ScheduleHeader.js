import PropTypes from 'prop-types'
import Button from './Button'

const ScheduleHeader = ({ title, onAdd, showAdd}) => {


  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color ={showAdd ? 'red' : 'green'} text ={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

ScheduleHeader.defaultProps = {
    title : 'Schedule'
}



export default ScheduleHeader