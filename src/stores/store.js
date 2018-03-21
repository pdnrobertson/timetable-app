import { createStore, combineReducers } from 'redux';
import eventsReducer from '../reducers/eventsReducer';
import subjectsReducer from '../reducers/subjectsReducer';

export default () => {
    const store = createStore(combineReducers({
        events: eventsReducer,
        subjects: subjectsReducer
    }));

    return store;
}