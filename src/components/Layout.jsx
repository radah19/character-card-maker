import { Outlet, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Navbar.Brand>Character Card Creator</Navbar.Brand>
                    <Nav.Link><Link to={"/"}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={"/new"}>Create</Link></Nav.Link>
                    <Nav.Link><Link to={"/gallery"}>Gallery</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <br />

      <Outlet />
    </div>
  );
};

export default Layout;