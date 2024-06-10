import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx'
import './index.css'
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>,
)

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,