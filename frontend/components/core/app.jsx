import React from 'react';

import Main from './main';
import Header from '../nav/header';
import Spacer from '../extra/spacer';

const App = ({ children }) => (
    <div>
        <Header />
        <Main />
        <Spacer />
    </div>
);

export default App;