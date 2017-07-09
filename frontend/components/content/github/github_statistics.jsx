import React, { Component } from 'react';

class GithubStatistics extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCommit();
    }

    render() {
        return (
            <div>I typed today!</div>
        );
    }
}

export default GithubStatistics;