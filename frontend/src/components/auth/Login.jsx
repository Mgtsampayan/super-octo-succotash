// import { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';
// import Input from '../common/Input';
// import Button from '../common/Button';
// import './Login.css';

// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//   };

//   return (
//     <div className="login-form">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <Input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <Input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <Button type="submit">Login</Button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../../services/authService';
import Input from '../common/Input';
import Button from '../common/Button';

const Login = () => {
  const [studentcode, setStudentcode] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.login(studentcode, password);
      // Save user to context or state
      history.push('/student-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          value={studentcode}
          onChange={(e) => setStudentcode(e.target.value)}
          placeholder="Student Code"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
