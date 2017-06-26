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
                <NavLink to="/portfolio" className="header-link" activeClassName="active-link"><p>Portfolio</p></NavLink>
                <NavLink to="/blog" className="header-link" activeClassName="active-link"><p>Blog</p></NavLink>
            </ul>
        </nav>
    </header>
);

export default Header;