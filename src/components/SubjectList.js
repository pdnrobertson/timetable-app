import React from 'react';
import { connect } from 'react-redux'; 
import SubjectListItem from './SubjectListItem';
import { deleteSubject } from '../actions/subjects';
import { deleteEvent } from '../actions/events';

export class SubjectList extends React.Component {
    render() {
    return (
            <div>
                <p>Subject List:</p>
                {this.props.subjects.map((element) => 
                    <SubjectListItem 
                        key={element} 
                        title={element}
                        deleteSubject={this.props.deleteSubject}
                        deleteEvent={this.props.deleteEvent}
                    />
                )}
            </div>    
        )   
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteSubject: (data) => dispatch(deleteSubject(data)),
        deleteEvent: (data) => dispatch(deleteEvent(data))
    }
}

const mapStateToProps = (state) => {
    return {
        subjects: state.subjects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);