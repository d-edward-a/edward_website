import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import '../navbar/Navbar.css'

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar" id="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    edward
                </NavLink>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/home"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/profile"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/travel"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Travel
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/foodie"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Foodie
                        </NavLink>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
