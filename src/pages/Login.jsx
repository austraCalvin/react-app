import React, { useContext } from 'react';
import { UserContext } from '../Context/UserGlobal.jsx';

const Login = () => {

    const { handleLogin } = useContext(UserContext);

    return (
        <>
            <h1 className='ms-1'>Login page</h1>
            <button className='btn btn-outline-success ms-1' onClick={handleLogin}>Login user</button>
        </>
    );

};

export default Login;