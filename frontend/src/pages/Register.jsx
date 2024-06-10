// import React, { useState } from 'react';
// import Navbar from '../components/common/Navbar';
// import Input from '../components/common/Input';
// import Button from '../components/common/Button';

// const Register = () => {
//   const [studentCode, setStudentCode] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement registration logic
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           value={studentCode}
//           onChange={(e) => setStudentCode(e.target.value)}
//           placeholder="Student Code"
//         />
//         <Input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//         <Input
//           type="password"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           placeholder="Confirm Password"
//         />
//         <Button type="submit">Register</Button>
//       </form>
//     </div>
//   );
// };

// export default Register;


import Register from '../components/auth/Register';

const RegisterPage = () => (
  <div>
    <h1>Register</h1>
    <Register />
  </div>
);

export default RegisterPage;
