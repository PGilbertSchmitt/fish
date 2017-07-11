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

    return $.ajax({
        type: 'GET',
        url: url,
        beforeSend: req => {
            req.setRequestHeader("User-Agent", "PGilbertSchmitt");
        },
        dataType: 'jsonp'
    })
}

export const fetchCommits = (repo) => {
    let url = `https://api.github.com/repos/${repo}/commits`;

    return fetch(url, options)
        .then(res => (res.json()));
}