import { Table, Button } from 'react-bootstrap';

function Users() {
  return (
    <>
      <h2 className="mb-4">User Management</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kiptoo Rorio</td>
            <td>roriokiptoo2016@gmail.com</td>
            <td>Admin</td>
            <td><Button variant="warning" size="sm">Edit</Button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Joan Barnoh</td>
            <td>joanbarnoh@gmail.com</td>
            <td>Student</td>
            <td><Button variant="warning" size="sm">Edit</Button></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
export default Users;