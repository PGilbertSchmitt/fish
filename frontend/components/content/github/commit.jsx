import React from 'react';

const Commit = ({ commit: { message, merge, date, sha } }) => {
    let cssClasses = "gh-icon ";
    cssClasses += merge ? "gh-merge" : "gh-commit";

    return (
        <div className="gh-item">
            <i className={cssClasses} />
            <div className="gh-info">
                <p className="gh-message">{message}</p>
                <p className="gh-message">Commit {sha} made 3 hours ago</p>
            </div>
        </div>
    );
};

export default Commit;