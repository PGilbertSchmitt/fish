import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './app';

const Root = (props) => (
    <Router>
        <App />
    </Router>
);

export default Root;