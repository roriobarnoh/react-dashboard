import { Form, Button, Card } from 'react-bootstrap';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="p-4" style={{ width: '300px' }}>
        <h4 className="mb-3 text-center">Login</h4>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Login</Button>
        </Form>
      </Card>
    </div>
  );
}
export default Login;