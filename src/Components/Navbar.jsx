import React, { useContext } from "react";
import { NavItem } from "./NavItem.jsx";
import { NavLink } from "react-router-dom";
import { UserContext } from "../Context/UserGlobal.jsx";

export function Navbar(props) {

    const { routingNav } = props;
    const { user, handleLogout } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-md bg-success navbar-success sticky-top">

            <div className="container-fluid">

                <NavLink key="mainNav" to="/" className="navbar-brand">🏠</NavLink>

                <button type="button" className="navbar-toggler border-0"
                    data-bs-toggle="collapse" data-bs-target="#aim">
                    <span className="navbar-toggler-icon text-success">
                    </span>
                </button>

                <div id="aim" className="collapse navbar-collapse">

                    <NavItem routingNav={routingNav} />

                </div>

                {user ? <button onClick={handleLogout} className="btn btn-danger">Logout</button> : <></>}

            </div>

        </nav>
    )
};