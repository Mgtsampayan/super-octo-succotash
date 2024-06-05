// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/profile">Profile</Link>
//       <Link to="/notifications">Notifications</Link>
//     </nav>
//   );
// };

// export default Navbar;


import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Student Portal</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
