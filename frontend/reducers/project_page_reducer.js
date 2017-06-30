import { RECEIVE_PROJECT } from '../actions/project_actions';

const projectPageReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT:
            return action.project;
        default:
            return state;
    }
}

export default projectPageReducer;