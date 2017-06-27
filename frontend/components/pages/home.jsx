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
                    <i className="fa fa-phone fa-fw"></i>&nbsp;&nbsp;561.319.2333
                    <br />
                    <i className="fa fa-envelope fa-fw"></i>&nbsp;&nbsp;PGilbertSchmitt@gmail.com
                </p>
                <p>
                    <a src="/" className="external-link"><i className="fa fa-github fa-fw"></i>&nbsp;&nbsp;Github</a>
                    <br />
                    <a src="/" className="external-link"><i className="fa fa-linkedin fa-fw"></i>&nbsp;&nbsp;Linkedin</a>
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