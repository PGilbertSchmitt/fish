import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Portfolio from '../pages/portfolio';
import Blog from '../content/blog/blog_index';

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
        </Switch>
    </main>
);

export default Main;