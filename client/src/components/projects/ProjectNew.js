import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const ProjectNew = ({ submitProject, history }) => {
    const [title, setTitle] = useState("");

    const  handleSubmit = (evt) => {
        evt.preventDefault();
        submitProject(title, history);
        console.log(title);
    }

    return (
        <form onSubmit={handleSubmit} style={{paddingTop: '150px'}}>
            <label>
                Enter Board Name:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <input type="submit" value={"Submit"} />
        </form>
    );
};

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps, actions)(withRouter(ProjectNew));