import React from 'react'
import HeaderCalendar from './HeaderCalendar/HeaderCalendar.jsx'
import MonitorCalendar from './MonitorCalendar/MonitorCalendar.jsx'
import CalendarGrid from './CalendarGrid/CalendarGrid.jsx'
import './Calendar.scss'


function Calendar({startDay, today, prevHandlerDay, nextHandlerDay, todayHandlerDay}) {
  return (
    <div className='calendar-wrapper'>
      <HeaderCalendar/>
      <MonitorCalendar today={today} prevHandlerDay={prevHandlerDay} nextHandlerDay={nextHandlerDay} todayHandlerDay={todayHandlerDay}/>
      <CalendarGrid startDay={startDay}/>
      
    </div>
  )
}

export default Calendar
