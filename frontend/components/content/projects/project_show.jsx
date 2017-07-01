import React, { Component } from 'react';

class ProjectShow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let slug = this.props.match.params.slug;
        this.props.getProject(slug);
    }

    render() {
        return (
            <div>Just a lemon</div>
        )
    }
}

export default ProjectShow;