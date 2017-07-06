import { RECEIVE_WAKA_ACTIVITY } from '../actions/wakatime_actions';

const wakatimeReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_WAKA_ACTIVITY:
            return action.activity;
        default:
            return state;
    }
};

export default wakatimeReducer;