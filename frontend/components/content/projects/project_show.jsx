import React, { Component } from 'react';
import { find } from 'lodash';

import { imgSrc } from '../../../util/util';

class ProjectShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null
        };
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        let project = this.props.project_cache[slug];
        if (project) {
            this.setState({ project });
        } else {
            this.props.getProject(slug);
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        let slug = this.props.match.params.slug;
        let project = find(nextProps.project_cache, { slug });
        // console.log(project);
        if (project) {
            this.setState({ project });
            // console.log("State set");
        }
    }

    render() {
        let project = this.state.project;
        // console.log(this.state);

        if (project) {
            let data = project.data;
            return (
                <div className="project-page">
                    <div className="title-bar">
                        <h1>{data.title}</h1>
                        <p>
                            <a href={`https://github.com/${data.github_url}`} className="external-link"><i className="fa fa-github-square fa-fw"></i>&nbsp;&nbsp;Github repo</a>
                            <br />
                            <a href={data.live_url} className="external-link"><i className="fa fa-external-link-square fa-fw"></i>&nbsp;&nbsp;Live page</a>
                        </p>
                    </div>
                    <hr />
                    <img className="header-img" src={imgSrc(data.header_img_path)} />
                    {/* It's okay to dangerously set the inner HTML if it's only me providing it. */}
                    {/* Probably */}
                    <div className="project-target" dangerouslySetInnerHTML={{ __html: data.html }}></div>
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