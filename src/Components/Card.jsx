import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

export function Card(props) {

    const { id, type, name, about, btn } = props;
    const navigate = useNavigate();
    //-1, "/"
    const handleBack = () => navigate(-1);
    const navigateTo = (path) => navigate(path);
    const user = false;

    // if (!user) {

    //     return <Navigate to="/" />

    // };

    return (
        <li className={btn === "off" ? "card" : "card mt-5"}>
            <h5 className="card-header">{type}</h5>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{about}</p>
                {btn === "on" ? <button onClick={() => navigateTo(`/item/${id}`)} className="btn btn-primary">See more</button> : <button onClick={handleBack} className="btn btn-secondary">back</button>}
            </div>
        </li>
    );

};