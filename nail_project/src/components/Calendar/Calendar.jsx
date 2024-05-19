import React from 'react'
import MonitorCalendar from './MonitorCalendar.jsx'



function Calendar({startDay}) {
  return (
    <div>
      <MonitorCalendar startDay={startDay} />
    </div>
  )
}

export default Calendar
