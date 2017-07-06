import { RECEIVE_COMMIT } from '../actions/github_actions';

const commitReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMIT:
            return action.commit;
        default:
            return state;
    }
}

export default commitReducer;