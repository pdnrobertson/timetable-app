import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import events from '../fixtures/events';
import moment from 'moment';

const Timetable = () => (

    <div id="example-component">
        <FullCalendar
        id = "1"
         header = {{
            left: '',
            center: 'title',
            right: ''
        }}
        defaultView={'agendaWeek'}  // Week-only view
        allDaySlot={false}
        defaultDate={moment()}  // Current day
        events = {events}

        minTime={"08:00:00"}
        maxTime={"19:00:00"}
        weekends={false}

        height={600}
    />
      </div>

);

export default Timetable;