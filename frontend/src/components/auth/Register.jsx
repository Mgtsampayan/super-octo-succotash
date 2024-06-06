// import { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import Input from '../common/Input';
// import Button from '../common/Button';
// import './Register.css';

// const Register = () => {
//     const { register } = useContext(AuthContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await register(email, password);
//     };

//     return (
//         <div className="register-form">
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <Input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <Input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <Button type="submit">Register</Button>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import './Auth.css';

const Register = () => {
    const [studentCode, setStudentCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();
        // Add your registration logic here
        // On success:
        history.push('/dashboard');
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <Input
                    type="text"
                    value={studentCode}
                    onChange={(e) => setStudentCode(e.target.value)}
                    placeholder="Student Code"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                />
                <Button type="submit">Register</Button>
            </form>
        </div>
    );
};

export default Register;
