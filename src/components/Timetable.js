import React from 'react';
import FullCalendar from 'fullcalendar-reactwrapper';
import events from '../fixtures/events';
import moment from 'moment';
import { connect } from 'react-redux';

const Timetable = (props) => (
    <div id="example-component">
        <FullCalendar
        id = "1"
         header = {{
            left: '',
            center: '',
            right: ''
        }}
        defaultView={'agendaWeek'}  // Week-only view
        allDaySlot={false}
        defaultDate={moment('2018-26-Feb')}  // Current day
        events = {props.events}
        minTime={"08:00:00"}
        maxTime={"21:30:00"}
        weekends={false}
        height={600}
        views={{
            agenda: {
                columnHeaderFormat: 'dddd'
            }
        }}
    />
      </div>

);

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
};

export default connect(mapStateToProps)(Timetable);