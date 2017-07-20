import React, { Component } from 'react';
import { find } from 'lodash';

import { imgSrc } from '../../../util/util';

class ProjectShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            error: null
        };
        this.fetchProject = this.fetchProject.bind(this);
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        if (!this.fetchProject(slug, this.props)) {
            this.props.getProject(slug);
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps);
        let slug = this.props.match.params.slug;
        this.fetchProject(slug, nextProps);
    }

    // Returns true and fetches if the project exists, or false if it needs to be fetched
    fetchProject(slug, props) {
        let project = find(props.project_cache, { slug });
        if (project) {
            let data = project.data;
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                this.setState({ data });
            }
            return true;
        }

        return false;
    }

    render() {
        let data = this.state.data;
        let error = this.state.error;
        // console.log(this.state);

        if (error) {
            return (
                <div className="no-project">{error}</div>
            );
        } else if (data) {
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
                // Good place for a spinner
                <div></div>
            );
        }
    }
}

export default ProjectShow;