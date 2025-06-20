import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavbar from './components/TopNavbar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <TopNavbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;