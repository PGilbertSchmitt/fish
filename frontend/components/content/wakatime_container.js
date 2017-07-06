import { connect } from 'react-redux';

import WakatimeStatistics from './wakatime_statistics';
import { fetchStats } from '../../actions/wakatime_actions';

const mapStateToProps = state => ({
    wakaStats: state.wakaStats
});

const mapDispatchToProps = dispatch => ({
    fetchStats: () => dispatch(fetchStats())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WakatimeStatistics);