import * as _ from 'lodash';

import * as GithubApi from '../api/github_api';

export const RECEIVE_COMMITS = "RECEIVE_COMMITS";

const receiveCommits = commits => ({
    type: RECEIVE_COMMITS,
    commits
});

export const fetchCommits = num => dispatch => {
    let lastEvent = {};

    GithubApi.fetchEvents()
        .then(events => {
            lastEvent = latestEvent(events.data);
            let repo = lastEvent.repo.name;

            return GithubApi.fetchCommits(repo);
        }).then(commits => {
            let lastCommits = latestCommits(commits, num);
            dispatch(receiveCommits(commitInfo(lastCommits)));
        });
};

const latestEvent = events => {
    let pushEvents = _.filter(events, event => (
        event.type === "PushEvent"
    ));

    let sortedEvents = _.sortBy(pushEvents, event => (
        event.created_at
    ));

    return _.last(sortedEvents);
}

const latestCommits = (commits, num) => {
    return _.take(commits, num);
}

const commitInfo = commits => (
    commits.map(commit => {
        let [message, branch] = _.split(commit.commit.message, /\n+/);

        return {
            message: message,
            merge: Boolean(branch),
            date: commit.commit.author.date
        }
    })
);

window.fetchCommit = fetchCommits;