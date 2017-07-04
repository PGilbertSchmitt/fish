import { filter, sortBy, first, last } from 'lodash';

import * as GithubApi from '../api/github_api';

export const RECEIVE_COMMIT = "RECEIVE_COMMIT";

const receiveCommit = commit => ({
    type: RECEIVE_COMMIT,
    commit
});

export const fetchCommit = () => dispatch => {
    GithubApi.fetchEvents()
        .then(events => {
            let lastEvent = latestEvent(events);
            let repo = lastEvent.repo.name;

            return GithubApi.fetchCommits(repo);
        }).then(commits => {
            let commit = first(commits);
            dispatch(receiveCommit(commit));
        });
};

const latestEvent = events => {
    let pushEvents = filter(events, event => (
        event.type === "PushEvent"
    ));

    let sortedEvents = sortBy(pushEvents, event => (
        event.created_at
    ));

    return last(sortedEvents);
}

window.fetchCommit = fetchCommit;