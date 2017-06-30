import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectIndexItem from './project_index_container.js';

class ProjectIndex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="project-index">
                This is a project
            </div>
        );
    }
}

export default ProjectIndex;