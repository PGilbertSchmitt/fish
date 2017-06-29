import { merge } from 'lodash';

const projectReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        default:
            return state;
    }
}

export default projectReducer;