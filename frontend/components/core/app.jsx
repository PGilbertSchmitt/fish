import React from 'react';

import Main from './main';
import Header from '../nav/header'

const App = ({ children }) => (
    <div>
        <Header />
        <Main />
    </div>
)

export default App;