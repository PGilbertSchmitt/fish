import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/core/root';
import store from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});