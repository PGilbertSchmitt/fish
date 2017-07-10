import { connect } from 'react-redux';

import GithubStatistics from './github_statistics';
import { fetchCommits } from '../../../actions/github_actions.js';

const mapStateToProps = state => ({
    commits: state.commits
});

const mapDispatchToProps = dispatch => ({
    fetchCommits: num => dispatch(fetchCommits(num))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GithubStatistics);