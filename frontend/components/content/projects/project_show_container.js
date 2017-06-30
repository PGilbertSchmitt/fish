import { connect } from 'react-redux';

import ProjectShow from './project_show.jsx';
import { getProject } from '../../../actions/project_actions';

const mapStateToProps = state => ({
    project: state.project
});

const mapDispatchToProps = dispatch => ({
    getProject: slug => dispatch(getProject(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectShow);