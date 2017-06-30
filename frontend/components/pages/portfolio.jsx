import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectIndex from '../content/projects/project_index_container';
import ProjectShow from '../content/projects/project_show_container';

const Portfolio = (props) => (
    <Switch>
        <Route exact path='/portfolio' component={ProjectIndex} />
        <Route path='/portfolio/:slug' component={ProjectShow} />
    </Switch>
);

export default Portfolio;