import * as WakatimeAPI from '../api/wakatime_api';

export const RECEIVE_WAKA_ACTIVITY = "RECEIVE_WAKA_ACTIVITY";

const receiveActivity = activity => ({
    type: RECEIVE_WAKA_ACTIVITY,
    activity
});

/* THUNKER */

export const fetchActivity = () => dispatch => (
    WakatimeAPI.fetchActivity()
        .then(activity => dispatch(receiveActivity(activity)))
);