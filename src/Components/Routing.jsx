import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from '../Context/UserGlobal.jsx';
import { Navbar } from "./Navbar.jsx";
import Login from "../pages/Login.jsx";
import { Navigate } from "react-router-dom";

export function Routing(props) {

    const { routeComponent, routingNav } = props;
    const { user } = useContext(UserContext);
    console.log("user", user);

    return (
        <>
            <Router>

                {user ?
                    <>
                        <Navbar routingNav={routingNav} />
                        <Routes>
                            {routeComponent.map((e, i) => {

                                return (<Route key={`route-${i}`} path={e.path} element={e.component}></Route>
                                );

                            })}
                        </Routes>
                    </>

                    : <Routes>
                        <Route path={"/"} element={<Login />}></Route>
                        <Route path={"*"} element={<Navigate to={"/"} />}></Route>
                    </Routes>}

            </Router>
        </>
    );

};