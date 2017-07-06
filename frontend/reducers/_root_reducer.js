import { combineReducers } from 'redux';

import projectReducer from './project_reducer';
import projectPageReducer from './project_page_reducer';
import commitReducer from './github_reducer';
import wakatimeReducer from './wakatime_reducer';

export default combineReducers({
    projects: projectReducer,
    project: projectPageReducer,
    commit: commitReducer,
    wakaStats: wakatimeReducer
});