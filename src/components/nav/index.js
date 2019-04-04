import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SideNav from './sidenav';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="purple darken-2">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Wicked Sales</Link>
                        <a href="#" className="sidenav-trigger" data-target="sidenav">
                            <i className="material-icons">menu</i>
                        </a>

                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <SideNav />
            </div>
        );
    }
}

export default Nav;