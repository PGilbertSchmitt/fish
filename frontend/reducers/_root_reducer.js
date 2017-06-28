import { combineReducers } from 'redux';

import projectReducer from "./project_reducer";
import projectPageReducer from "./project_page_reducer";

export default combineReducers({
    projects: projectReducer,
    project: projectPageReducer
});