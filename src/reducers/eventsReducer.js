const eventsDefaultState = [];

export default (state = eventsDefaultState, action) => {
    switch (action.type) {

        case ('ADD_EVENT'):
            return [
                ...state,
                action.event
            ];

        case ('DELETE_EVENT'):
            return state.filter((event) => event.subject != action.subject);

        default:
            return state;
    }
}