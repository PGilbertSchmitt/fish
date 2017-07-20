import { unionBy } from 'lodash';

import { RECEIVE_PROJECT } from '../actions/project_actions';

const projectPageReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT:
            let newProject = {
                slug: action.project.slug,
                data: action.project
            };
            let newState = unionBy(state, [newProject], "slug");
            return newState;
        default:
            return state;
    }
}

export default projectPageReducer;