import React from 'react';

const Commit = ({ commit: { message, merge, date } }) => {
    let cssClasses = "gh-icon ";
    cssClasses += merge ? "gh-merge" : "gh-commit";

    return (
        <div className="gh-item">
            <i className={cssClasses} />
            <span className="gh-message">{message}</span>
        </div>
    );
};

export default Commit;