import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Port from '../pages/portfolio';

const Main = (props) => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/port' component={Port}/>
        </Switch>
    </main>
);

export default Main;