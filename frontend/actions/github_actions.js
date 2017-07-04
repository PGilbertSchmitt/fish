import * as _ from 'lodash';

import * as GithubApi from '../api/github_api';

export const RECEIVE_COMMIT = "RECEIVE_COMMIT";

const receiveCommit = commit => ({
    type: RECEIVE_COMMIT,
    commit
});

export const fetchCommit = () => dispatch => {
    let lastEvent = {};

    GithubApi.fetchEvents()
        .then(events => {
            lastEvent = latestEvent(events);
            let repo = lastEvent.repo.name;

            return GithubApi.fetchCommits(repo);
        }).then(commits => {
            let commit = _.first(commits);
            dispatch(receiveCommit(commitInfo(commit, lastEvent)));
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

const commitInfo = (commit, event) => {
    let message = _.first(_.split(commit.commit.message, /\n+/));

    return {
        message: message,
        repo: event.repo.name,
        timeStamp: event.created_at
    }
};

window.fetchCommit = fetchCommit;