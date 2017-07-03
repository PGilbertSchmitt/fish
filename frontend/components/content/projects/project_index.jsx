import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from './project_index_item';

class ProjectIndex extends Component {
    constructor(props) {
        super(props);

        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    renderItems(projects) {
        return projects.map((project, idx) => (
            <ProjectIndexItem project={project} key={idx} />
        ));
    }

    render() {
        return (
            <div className="project-index">
                <h1 className="page-title">My babies</h1>
                {this.renderItems(this.props.projects)}
            </div>
        );
    }
}

export default ProjectIndex;