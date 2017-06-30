import React from 'react';
import { Link } from 'react-router-dom';

import { imgSrc } from '../../../util/util';

const ProjectIndexItem = ({ project: { title, desc, slug, img_url } }) => (
    <Link to={`/porfolio/${slug}`}>
        <div className="project-listing">
            <div className="index-img-box">
                <img src={imgSrc(img_url)} className="index-img" />
            </div>
            <div className="index-text-box">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
    </Link>
);


export default ProjectIndexItem;