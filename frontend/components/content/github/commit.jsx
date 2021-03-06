import React from 'react';
import moment from 'moment';

const Commit = ({ commit: { message, merge, date, sha, url } }) => {
    let cssClasses = "gh-icon ";
    cssClasses += merge ? "gh-merge" : "gh-commit";

    return (
        <div className="gh-item">
            <i className={cssClasses} />
            <div className="gh-info">
                <p className="gh-message"><b>{message}</b></p>
                <p className="gh-message">Commit <a className="external-link" href={url}>{sha}</a> made {moment(date).fromNow()}</p>
            </div>
            <hr />
        </div>
    );
};

export default Commit;