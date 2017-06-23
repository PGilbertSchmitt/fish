import React from 'react';

import Main from './main';

const App = ({ children }) => (
    <div>
        <h1>Header</h1>
        <p>If you see this, then React is working (probably)</p>

        <Main />
    </div>
)

export default App;