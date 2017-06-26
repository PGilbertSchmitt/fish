import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => (
    <header className="header">
        <nav className="nav-bar page-width">
            <Link to="/" className="home-link">
                <p className="logo">P. Gilbert Schmitt</p>
                <p className="sub-logo">Software Developer</p>
            </Link>

            <ul className="nav-menu">
                <li className="header-link">
                    <NavLink to="/portfolio" activeClassName="active-link">Portfolio</NavLink>
                </li>
                <li className="header-link">
                    <NavLink to="/blog" activeClassName="active-link">Blog</NavLink>
                </li>
                <li className="header-link">
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;