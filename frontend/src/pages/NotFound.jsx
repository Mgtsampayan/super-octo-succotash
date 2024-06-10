import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
