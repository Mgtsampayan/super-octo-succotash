import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Navbar from './components/common/Navbar';
import StudentRoutes from './routes/StudentRoutes';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/student/*" element={<StudentRoutes />} />
    </Routes>
  </div>
);

export default App;
