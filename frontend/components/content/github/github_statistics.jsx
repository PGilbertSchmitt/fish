import React, { Component } from 'react';

import Commit from './commit';

class GithubStatistics extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCommits();
        console.log(this.props);
    }

    renderCommits(commits) {
        return commits.map((commit, idx) => <Commit commit={commit} key={idx} />)
    }

    render() {
        return (
            <div>
                <p>Yoman!</p>
                {this.renderCommits(this.props.commits)}
            </div>
        );
    }
}

export default GithubStatistics;