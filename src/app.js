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

store.subscribe(() => {
    console.log(store.getState());
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
