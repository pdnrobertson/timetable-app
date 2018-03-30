import uuid from 'uuid';

// Add Event
export const addEvent = (
    {
      subject = '',
      title = '',
      start = 0,
      end = 0
    } = {}
  ) => ({
    type: 'ADD_EVENT',
    event: {
      id: uuid(),
      subject,
      title,
      start,
      end
    }
});

export const deleteEvent = (
  { subject } = {}
) => ({
  type: 'DELETE_EVENT',
  subject
});