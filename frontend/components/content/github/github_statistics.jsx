import React, { Component } from 'react';

import Commit from './commit';

const NUM_COMMITS = 7;

class GithubStatistics extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCommits(NUM_COMMITS);
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