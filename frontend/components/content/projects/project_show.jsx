import React, { Component } from 'react';

import { imgSrc } from '../../../util/util';

class ProjectShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.getProject(slug);
    }

    render() {
        let project = this.props.project;

        if (project) {
            return (
                <div className="project-page">
                    <div className="title-bar">
                        <h1>{project.title}</h1>
                        <p>
                            <a href={`https://github.com/${project.github_url}`} className="external-link"><i className="fa fa-github-square fa-fw"></i>&nbsp;&nbsp;Github repo</a>
                            <br />
                            <a href={project.live_url} className="external-link"><i className="fa fa-external-link-square fa-fw"></i>&nbsp;&nbsp;Live page</a>
                        </p>
                    </div>
                    <hr />
                    <img className="header-img" src={imgSrc(project.header_img_path)} />
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