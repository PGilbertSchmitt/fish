import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Portfolio from '../pages/portfolio';

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
        </Switch>
    </main>
);

export default Main;