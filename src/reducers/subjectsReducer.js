const subjectDefaultState = [];

export default (state = subjectDefaultState, action) => {
    switch(action.type) {
        case('ADD_SUBJECT'):
            return [
                ...state,
                action.subject
            ];
        
        case('DELETE_SUBJECT'):
            return state.filter((subject) => subject != action.subject );

        default:
            return state;
    }
}