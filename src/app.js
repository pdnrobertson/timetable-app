import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

// Import styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';


ReactDOM.render(<AppRouter />, document.getElementById('app'));
