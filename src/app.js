import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';

import { Provider } from 'react-redux';
import configureStore from './stores/store';

import AppRouter from './routers/AppRouter';

// Import styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import { addEvent } from './actions/events';

const store = configureStore();

const sampleEvent = {
    subject: "MAST20060",
    title: 'Lecture 1',
    start: moment().add(3, 'days').subtract(4, 'hours'),
    end: moment().add(3, 'days').subtract(4, 'hours').add(1, 'hours')
};

setTimeout(() => {
    store.dispatch(addEvent(sampleEvent));
}, 3000)



console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
