import React from 'react';
import { NavLink } from "react-router-dom";

export function NavItem(props) {

    const { routingNav } = props;

    return (
        <ul className="navbar-nav">
            {routingNav.map((e, i) => {

                return (<NavLink key={`navItem-${i}`} to={e.path} className={({ isActive }) => `${isActive ? 'active nav-item pe-3' : 'nav-item pe-3'}`}>

                    <div key={`navLink-${i}`} className="nav-link text-uppercase text-white pb-0" data-bs-toggle="collapse"
                        data-bs-target={e.name}>
                        {e.name}
                        <div className="underline"></div>
                    </div>

                </NavLink>);

            })}
        </ul>
    )
};