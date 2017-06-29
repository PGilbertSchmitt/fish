export const fetchProjects = () => (
    fetch("/api/projects")
        .then(res => (res.json()))
);

export const getProject = slug => (
    fetch(`/api/projects/${slug}`)
        .then(res => (res.json()))
);