import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header className="header">
        <nav className="nav-bar">
            <div className="nav-left">
                <Link to="/" id="logo">P. Gilbert Schmitt</Link>
            </div>

            <div className="nav-right">
                <Link to="/portfolio">Portfolio</Link>
            </div>
        </nav>
    </header>
);

export default Header;