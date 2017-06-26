import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <section className="section">
        <div className="self">
            <img className="self-image" src="body_circle.gif" />
        </div>

        <div className="portal">
            <div className="portal-top">
                i write my recipes here
            </div>
            <div className="portal-bottom">
                one tiem i ate a friSBEE
            </div>
        </div>
    </section>
);

export default Home;