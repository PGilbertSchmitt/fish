import { RECEIVE_COMMITS } from '../actions/github_actions';

const commitReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMITS:
            return action.commits;
        default:
            return state;
    }
}

export default commitReducer;