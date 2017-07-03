import React from 'react';
import { Link } from 'react-router-dom';

import { imgSrc } from '../../../util/util';

const ProjectIndexItem = ({ project: { title, desc, slug, stack, thumbnail_path } }) => (
    <Link to={`/portfolio/${slug}`}>
        <div className="project-listing">
            <img src={imgSrc(thumbnail_path)} className="index-img" />

            <div className="index-text-box">
                <h5>{title}</h5>
                <p>{desc}</p>
                <p><em>{stack}</em></p>
            </div>
        </div>
    </Link>
);


export default ProjectIndexItem;