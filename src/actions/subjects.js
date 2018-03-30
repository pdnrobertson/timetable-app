
export const addSubject = (
    { subject = '' } = {}
) => ({
    type: 'ADD_SUBJECT',
    subject
});


export const deleteSubject = (
    { subject } = {}
) => ({
    type: 'DELETE_SUBJECT',
    subject
});