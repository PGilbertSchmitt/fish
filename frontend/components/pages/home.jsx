import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <div>
        <h2> I am significant!</h2>
        <Link to={'/port'}>Port</Link>
    </div>
);

export default Home;