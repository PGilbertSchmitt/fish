// Grabs most recent github events, which will need to be filtered by an action
const headers = new Headers({
    "User-Agent": "PGilbertSchmitt"
});

const options = {
    method: 'GET',
    headers: headers,
    cache: 'default'
};

export const fetchEvents = () => {
    let url = "https://api.github.com/users/pgilbertschmitt/events";

    return fetch(url, options)
        .then(res => (res.json()));
}

export const fetchCommits = (repo) => {
    let url = `https://api.github.com/repos/${repo}/commits`;

    return fetch(url, options)
        .then(res => (res.json()));
}

// Just to make sure I don't go over limit
window.ghlimit = () => {
    return fetch("https://api.github.com/rate_limit")
        .then(res => (res.json()))
        .then(data => { console.log(data) });
}