
export const addSubject = (
    { subject = '' } = {}
) => ({
    type: 'ADD_SUBJECT',
    subject
});