import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';
import { AuthContext } from '../../context/AuthContext';

const Logout = () => {
    const { setAuthData } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        setAuthData(null);
        history.push('/');
    };

    return (
        <Button onClick={handleLogout}>Logout</Button>
    );
};

export default Logout;
