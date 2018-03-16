import { createStore, combineReducers } from 'redux';
import eventsReducer from '../reducers/eventsReducer';

export default () => {
    const store = createStore(combineReducers({
        events: eventsReducer
    }));

    return store;
}