import React, { createContext, useState } from 'react';

//1 create a component
//2 command react, this component is a provider and will have a context
//3 component to return the context already created as a provider

export const UserContext = createContext("");

const UserGlobal = ({ children }) => {

    const [user, setUser] = useState(false);
    const handleLogin = () => setUser(true);
    const handleLogout = () => setUser(false);

    const [permission, setPermission] = useState(false);
    const handlePermission = ({ target: { checked } }) => setPermission(checked);

    return (
        <UserContext.Provider value={{
            user,
            permission,
            handleLogin,
            handleLogout,
            handlePermission
        }}>

            {children}

        </UserContext.Provider>
    );
};

export default UserGlobal;