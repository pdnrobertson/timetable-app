const eventsDefaultState = [];

export default (state = eventsDefaultState, action) => {
    switch (action.type) {

        case ('ADD_EVENT'):
            return [
                ...state,
                action.event
            ];

        default:
            return state;
    }
}