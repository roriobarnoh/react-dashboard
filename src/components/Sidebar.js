import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '220px' }}>
      <h5 className="text-center mb-4">Admin Panel</h5>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/" className="text-white"><FaHome /> Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/reports" className="text-white"><FaChartBar /> Reports</Nav.Link>
        <Nav.Link as={Link} to="/users" className="text-white"><FaUsers /> Users</Nav.Link>
        <Nav.Link as={Link} to="/settings" className="text-white"><FaCog /> Settings</Nav.Link>
        <Nav.Link as={Link} to="/login" className="text-white mt-auto"><FaSignOutAlt /> Logout</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;