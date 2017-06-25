import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header className="header">
        <nav className="nav-bar">
            <Link to="/" className="logo">P. Gilbert Schmitt</Link>

            <ul className="nav-menu">
                <li className="header-link">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="header-link">
                    <Link to="/">Blog</Link>
                </li>
                <li className="header-link">
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;