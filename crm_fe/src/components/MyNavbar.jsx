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
    
    <Navbar expand="lg">
      <Container fluid>
        <Logo/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="noline aboutUs__item" to= "/aboutus">
              <span className ="aboutValues">About Us</span>
            </NavLink>
            {/* <NavLink className="noline ourValues__item" to= "/ticket">
              <span className="aboutValues">Tickets</span>
            </NavLink> */}
          </Nav>
          
          <Form className="search d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <NavLink className= "navbar__item" to = "/signinpage">
            <Button className= "mybutton" >Sign In</Button>
            </NavLink>
            <NavLink className="navbar__item" to="/signuppage">
            <Button className ="mybutton">Sign Up</Button>
            </NavLink>
          </Form>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;