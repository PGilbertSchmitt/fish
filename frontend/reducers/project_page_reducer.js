import { merge } from 'lodash';

const projectPageReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        default:
            return state;
    }
}

export default projectPageReducer;