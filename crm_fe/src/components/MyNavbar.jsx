import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles/navbar.css";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Logo/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">About us</Nav.Link>
            <Nav.Link href="#action2">Our values</Nav.Link>
          </Nav>
          
          <Form className="search d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <NavLink className= "navbar__item" to = "/signinpage">
            <Button className= "mybutton" variant="outline-info">Sign In</Button>
            </NavLink>
            <NavLink className="navbar__item" to="/signuppage">
            <Button className ="mybutton" variant="outline-info">Sign Up</Button>
            </NavLink>
          </Form>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;