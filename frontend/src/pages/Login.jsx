import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Navbar from '../components/common/Navbar';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const Login = () => {
  const [studentCode, setStudentCode] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();
  const history = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ studentCode, password });
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
