import * as ProjectAPI from '../api/project_api';

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
});

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

/* THUNKERS */

export const fetchProjects = () => dispatch => (
    ProjectAPI.fetchProjects()
        .then(({ projects }) => dispatch(receiveProjects(projects)))
);

export const getProject = slug => dispatch => (
    ProjectAPI.fetchProjects(slug)
        .then(({ project }) => dispatch(receiveProject(project)))
);