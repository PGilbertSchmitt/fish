import React, { Component } from 'react';

class ProjectShow extends Component {
    constructor(props) {
        super(props);

        this.replaceHTML = this.replaceHTML.bind(this);
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.getProject(slug);
    }

    componentDidUpdate() {
        this.replaceHTML("project-target");
    }

    replaceHTML(id) {
        let text = this.props.project.project;

        document.getElementById(id).innerHTML = Boolean(this.props.project.project)
            ? this.props.project.project
            : `<div class="no-project">Could not find a project at portfolio/${this.props.match.params.slug}</div>`
    }

    render() {
        return (
            <div id="project-target" className="project-target"></div>
        );
    }
}

export default ProjectShow;