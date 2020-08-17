import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';
import { Link } from "react-router-dom";

class ProjectList extends Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    renderProjects() {
        return this.props.projects.reverse().map (project => {
            return (
                <div className="" key={project._id}>
                    <Link to={`/projects/${project._id}`} className="text-black-50">

                        {project.name}
                    </Link>
                </div>
            );
        });
    }

    render() {
        return (
            <div>{this.renderProjects()}</div>
        );
    }
}
//state.surveys
function mapStateToProps({ projects }) {
    return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(ProjectList);