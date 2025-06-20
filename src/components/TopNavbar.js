import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand>Dashboard</Navbar.Brand>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" />
        </Form>
        <Nav>
          <Nav.Link href="#">Profile</Nav.Link>
          <Nav.Link href="#">Notifications</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;