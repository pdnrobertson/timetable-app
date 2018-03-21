const subjectDefaultState = [];

export default (state = subjectDefaultState, action) => {
    switch(action.type) {
        case('ADD_SUBJECT'):
            return [
                ...state,
                action.subject
            ];

        default:
            return state;
    }
}