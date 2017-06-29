export const fetchProjects = () => (
    fetch("/api/projects")
        .then(res => (res.json()))
);

export const getProject = title => (
    fetch(`/api/projects/${title}`)
        .then(res => (res.json()))
);