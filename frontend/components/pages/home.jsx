import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => (
    <section className="section">
        <div className="self">
            <img className="self-image" src="images/body_circle.gif" />

            <div className="about">
                <p>
                    23 years young software developer. I like to make computers beep for fun.
                </p>
                <p>
                    PHONE: 561-319-2333
                    <br />
                    EMAIL: PGilbertSchmitt@gmail.com
                </p>
            </div>
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