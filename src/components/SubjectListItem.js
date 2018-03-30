import React from 'react';
import { deleteSubject } from '../actions/subjects';
import { deleteEvent } from '../actions/events';

class SubjectListItem extends React.Component {

    handleOnClick = () => {
        const subject = { subject: this.props.title };
        this.props.deleteSubject(subject);
        this.props.deleteEvent(subject);
    }

    render() {
        const URL = `https://handbook.unimelb.edu.au/2018/subjects/${this.props.title.toLowerCase()}`
        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.handleOnClick}>Delete</button>
                <a href={URL} target="_blank">Handbook Link</a>
            </div>
        )
    }
}

export default SubjectListItem;