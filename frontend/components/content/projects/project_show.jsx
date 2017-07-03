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
        // this.replaceHTML("project-target");
    }

    replaceHTML(id) {
        let text = this.props.project;

        document.getElementById(id).innerHTML = Boolean(this.props.project.project)
            ? this.props.project.project
            : `<div class="no-project">Could not find a project at portfolio/${this.props.match.params.slug}</div>`
    }

    render() {
        let project = this.props.project;
        console.log(project);

        if (project) {
            return (
                <div className="project-page">
                    <h1>{project.title}</h1>
                    <p>
                        <a href={`https://github.com/${project.github_url}`} className="external-link"><i className="fa fa-github-square fa-fw"></i>&nbsp;&nbsp;Github repo</a>
                        <br />
                        <a href={project.live_url} className="external-link"><i className="fa fa-external-link-square fa-fw"></i>&nbsp;&nbsp;Live page</a>
                    </p>
                    <div className="project-target" dangerouslySetInnerHTML={{ __html: project.html }}></div>
                </div>
            );
        } else {
            return (
                <div className="no-project">Could not find a project at portfolio/${this.props.match.params.slug}</div>
            );
        }
    }
}

export default ProjectShow;