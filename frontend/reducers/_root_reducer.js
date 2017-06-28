import { combineReducers } from 'redux';

import projectReducer from "./project_reducer";
import currentProjectReducer from "./current_project_reducer";

export default combineReducers({
    projects: projectReducer,
    project: currentProjectReducer
});