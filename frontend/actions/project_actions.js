import * as ProjectAPI from '../api/project_api';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

export const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

/* THUNKERS */

export const fetchProjects = () => dispatch => (
    ProjectAPI.fetchProjects()
        .then(({ projects }) => dispatch(receiveProjects(projects)))
);

export const getProject = title => dispatch => (
    ProjectAPI.fetchProjects(title)
        .then(({ project }) => dispatch(receiveProject(project)))
);