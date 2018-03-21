import React from 'react';
import Timetable from './Timetable';
import AddSubject from './AddSubject';
import SubjectList from './SubjectList';

const Dashboard = () => (
    <div>
        <SubjectList />
        <AddSubject />
        <Timetable />
    </div>
);

export default Dashboard;