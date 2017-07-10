import React from 'react';

const Commit = ({ commit: { message, merge, date } }) => {
    if (merge) {
        return (
            <div className="gh-item">
                <i className="gh-icon gh-merge" />
                <span>{message}</span>
            </div>
        );
    } else {
        return (
            <div className="gh-item">
                <i className="gh-icon gh-commit" />
                <span>{message}</span>
            </div>
        );
    }
};

export default Commit;