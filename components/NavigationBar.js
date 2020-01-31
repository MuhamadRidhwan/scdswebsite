import React from 'react';
import { UncontrolledDropdown, DropdownToggler, DropdownMenu, DropdownItem, Container, Row, Col, ButtonGroup, Collapse, NavbarBrand, DropdownToggle, NavbarText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../assets/images/contents/UiTM_logo.png';
import UiTM_icon from '../assets/images/contents/UiTM_Icon.png';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .overlay {
    position: relative;
    top: 100;
    left: 100;
    bottom: 100;
    right: 1000;
    z-index: 10;
  }

  a, .navbar-brand .navbar-nav .nav-link .nav-dropdown {
    color: white;

    &:hover {
      color: white;
    }
  }

`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
      <NavbarBrand className="overlay"><img href='/' src={UiTM_icon} height= "100%" width= "100%"/></NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home"> <Link style={{fontSize: '18px'}} to="/home">Home</Link></Nav.Link>
          <Nav.Link href="#callPapers"> <Link  style={{fontSize: '18px'}} to="/callPapers">Call for Papers</Link></Nav.Link>
          <Nav.Link href="#dates"> <Link  style={{fontSize: '18px'}} to="/dates">Important Dates</Link></Nav.Link>
          <Nav.Link href="#proceeding"> <Link  style={{fontSize: '18px'}} to="/proceeding">Proceeding</Link></Nav.Link>
          <NavDropdown style={{fontSize: '18px'}} title="Information" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#programbook"><Link style={{color: 'black'}} to="/programBook">Program Book</Link></NavDropdown.Item>
            <NavDropdown.Item href="#guideline"><Link style={{color: 'black'}} to="/submissionGuideline">Submission Guideline</Link></NavDropdown.Item>
            <NavDropdown.Item href="#feepayment"><Link style={{color: 'black'}} to="/feePayment">Fee and Payment</Link></NavDropdown.Item>
            <NavDropdown.Item href="#register"><Link style={{color: 'black'}} to="/registration">Registration</Link></NavDropdown.Item>
            <NavDropdown.Item href="#publication"><Link style={{color: 'black'}} to="/publication">Publication</Link></NavDropdown.Item>
            <NavDropdown.Item href="#venueaccomodation"><Link style={{color: 'black'}} to="/venue">Venue & Accommodation</Link></NavDropdown.Item>
            <NavDropdown.Item href="#visa"><Link style={{color: 'black'}} to="/visa">Visas & Letter of Invitation</Link></NavDropdown.Item>
            <NavDropdown.Item href="#bestpaper"> <Link style={{color: 'black'}} to="/bestPaper">Best Paper Awards</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown  style={{fontSize: '18px'}} title="Committee" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#technicalcommittee"> <Link style={{color: 'black'}} to="/committee">Technical Committee</Link></NavDropdown.Item>
            <NavDropdown.Item href="#maincommittee"><Link style={{color: 'black'}} to="/organizer">International Scientific Committee</Link></NavDropdown.Item>  
          </NavDropdown>
          <NavDropdown  style={{fontSize: '18px'}} title="About" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#contact"><Link style={{color: 'black'}} to="/contact">Contact Us</Link></NavDropdown.Item>
            <NavDropdown.Item href="#maps"><Link style={{color: 'black'}} to="/maps">Maps & Direction</Link></NavDropdown.Item>
            <NavDropdown.Item href="#previous"><Link style={{color: 'black'}} to="/previousscds">Previous SCDS</Link></NavDropdown.Item>
        
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
