import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from './project_index_container.js';
import { imgSrc } from '../../../util/util.js';

class ProjectIndex extends Component {
    constructor(props) {
        super(props);

        this.renderItems = this.renderItems.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    renderItems(projects) {
        // console.log(this.props.projects);
        return projects.map((project, idx) => (
            <div>
                <p>{project.title}</p>
                <img src={imgSrc(project.img_url)} />
            </div>
        ));
    }

    render() {
        return (
            <div className="project-index">
                {this.renderItems(this.props.projects)}
            </div>
        );
    }
}

export default ProjectIndex;