import { connect } from 'react-redux';

import WakatimeStatistics from './wakatime_statistics';
import { fetchActivity } from '../../actions/wakatime_actions';

const mapStateToProps = state => ({
    wakaActivity: state.wakaActivity
});

const mapDispatchToProps = dispatch => ({
    fetchActivity: () => dispatch(fetchActivity())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WakatimeStatistics);