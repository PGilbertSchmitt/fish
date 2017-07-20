import { connect } from 'react-redux';

import ProjectShow from './project_show';
import { getProject } from '../../../actions/project_actions';

const mapStateToProps = state => ({
    project_cache: state.project_cache
});

const mapDispatchToProps = dispatch => ({
    getProject: slug => dispatch(getProject(slug))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectShow);