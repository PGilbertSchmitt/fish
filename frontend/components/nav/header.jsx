import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header className="u-full-width">
        <div className="header-bar">
            <Link to="/">
                <div className="header-link">P. Gilbert Schmitt</div>
            </Link>

            <nav className="header-nav">
                <ul className="nav-list">
                    <Link to="/portfolio">
                        <li className="nav-item">Portfolio</li>
                    </Link>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;