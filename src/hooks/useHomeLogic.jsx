import { useState, useContext } from 'react';
import { UserContext } from '../Context/UserGlobal';

const useAccess = () => {

    const { handlePermission } = useContext(UserContext)

    const [enabled, setEnabled] = useState(false);

    const enableAccess = ({ target: { checked } }) => {
        
        setEnabled(checked);
        handlePermission(enabled)
    
    };

    return {

        enabled,
        enableAccess

    };

};

export default useAccess;