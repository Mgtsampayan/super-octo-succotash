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



import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import './Auth.css';

const Login = () => {
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    // On success:
    history.push('/dashboard');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
