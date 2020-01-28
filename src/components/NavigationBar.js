import React from 'react';
import { UncontrolledDropdown, DropdownToggler, DropdownMenu, DropdownItem, Container, Row, Col, ButtonGroup, Collapse, NavbarBrand, DropdownToggle, NavbarText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link .nav-dropdown {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;


export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"> <Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#callPapers">  <Link to="/callPapers">Call for Papers</Link></Nav.Link>
      <Nav.Link href="#dates"> <Link to="/dates">Important Dates</Link></Nav.Link>
      <Nav.Link href="#proceeding"> <Link to="/proceeding">Proceeding</Link></Nav.Link>
      <NavDropdown title="Information" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#programbook"><Link to="/programBook">Program Book</Link></NavDropdown.Item>
        <NavDropdown.Item href="#guideline"><Link to="/submissionGuideline">Submission Guideline</Link></NavDropdown.Item>
        <NavDropdown.Item href="#feepayment"><Link to="/feePayment">Fee and Payment</Link></NavDropdown.Item>
        <NavDropdown.Item href="#register"><Link to="/registration">Registration</Link></NavDropdown.Item>
        <NavDropdown.Item href="#publication"><Link to="/publication">Publication</Link></NavDropdown.Item>
        <NavDropdown.Item href="#venueaccomodation"><Link to="/venue">Venue & Accommodation</Link></NavDropdown.Item>
        <NavDropdown.Item href="#visa"><Link to="/visa">Visas & Letter of Invitation</Link></NavDropdown.Item>
        <NavDropdown.Item href="#bestpaper"> <Link to="/bestPaper">Best Paper Awards</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Committee" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#technicalcommittee"> <Link to="/committee">Committee</Link></NavDropdown.Item>
        <NavDropdown.Item href="#maincommittee"><Link to="/organizer">Main Organizing Committee</Link></NavDropdown.Item>  
      </NavDropdown>
      <NavDropdown title="About" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#contact"><Link to="/contact">Contact Us</Link></NavDropdown.Item>
        <NavDropdown.Item href="#maps"><Link to="/maps">Maps & Direction</Link></NavDropdown.Item>
        <NavDropdown.Item href="#previous"><Link to="/previousscds">Previous SCDS</Link></NavDropdown.Item>
    
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Styles >
)
