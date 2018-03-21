import React from 'react';
import { connect } from 'react-redux'; 

const SubjectList = (props) => (
    <div>
        {console.log(props.subjects)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        subjects: state.subjects
    }
}

export default connect(mapStateToProps)(SubjectList);