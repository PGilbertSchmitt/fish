import * as WakatimeAPI from '../api/wakatime_api';

export const RECEIVE_WAKA_STATS = "RECEIVE_WAKA_STATS";

const receiveWakaStats = stats => ({
    type: RECEIVE_WAKA_STATS,
    stats
});

/* THUNKER */

export const fetchStats = () => dispatch => (
    WakatimeAPI.fetchWakaStats()
        .then(stats => dispatch(receiveWakaStats(stats)))
);