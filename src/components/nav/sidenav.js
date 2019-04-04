import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideNav extends Component {
    componentDidMount(){
        console.log('Sidenav Mounted', this.sidenav);

        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <ul ref={(element) => { this.sidenav = element}} id="sidenav" className="right hide-on-med-and-down">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        );
    };
};

export default SideNav;