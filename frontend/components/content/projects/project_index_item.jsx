import React from 'react';
import { Link } from 'react-router-dom';

import { imgSrc } from '../../../util/util';

const ProjectIndexItem = ({ project: { title, desc, slug, img_url, stack } }) => (
    <Link to={`/portfolio/${slug}`}>
        <div className="project-listing">
            <img src={imgSrc(img_url)} className="index-img" />

            <div className="index-text-box">
                <h5>{title}</h5>
                <p>{desc}</p>
                <p><em>{stack}</em></p>
            </div>
        </div>
    </Link>
);


export default ProjectIndexItem;