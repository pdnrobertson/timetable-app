

// Add Event
export const addEvent = (
    {
      subject = ''
    } = {}
  ) => ({
    type: 'ADD_EVENT',
    event: {
      subject
    }
});