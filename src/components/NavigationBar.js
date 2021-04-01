import React from 'react';
import { UncontrolledDropdown, DropdownToggler, DropdownMenu, DropdownItem, Container, Row, Col, ButtonGroup, Collapse, NavbarBrand, DropdownToggle, NavbarText} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import $ from 'jquery'; 

import logo from '../assets/images/contents/UiTM_logo.png';
import UiTM_icon from '../assets/images/contents/UiTM_Icon.png';

const Styles = styled.div`
  .navbar {
    background-color: white;
  }

  .overlay {
    position: relative;
    top: 100;
    left: 15%;
    bottom: 100;
    right: 1000;
    z-index: 10;
  }

  .lay {
    position: relative;
    top: 100;
    left: 20%;
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

  body {
    font-family: 'PT Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #4f5d6e;
    position: relative;
    background: rgb(26, 49, 95);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(26, 49, 95, 1)), color-stop(10%, rgba(26, 49, 95, 1)), color-stop(24%, rgba(29, 108, 141, 1)), color-stop(37%, rgba(41, 136, 151, 1)), color-stop(77%, rgba(39, 45, 100, 1)), color-stop(90%, rgba(26, 49, 95, 1)), color-stop(100%, rgba(26, 49, 95, 1)));
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#1a315f', endColorstr='#1a315f', GradientType=0);
  }
  
  .body-wrap {
    min-height: 700px;
  }
  
  .body-wrap {
    position: relative;
    z-index: 0;
  }
  
  .body-wrap:before,
  .body-wrap:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 260px;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(26, 49, 95, 1)), color-stop(100%, rgba(26, 49, 95, 0)));
    background: linear-gradient(to bottom, rgba(26, 49, 95, 1) 0%, rgba(26, 49, 95, 0) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#1a315f', endColorstr='#001a315f', GradientType=0);
  }
  
  .body-wrap:after {
    top: auto;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(26, 49, 95, 0) 0%, rgba(26, 49, 95, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#001a315f', endColorstr='#1a315f', GradientType=0);
  }
  
  nav {
    margin-top: 30px;
    box-shadow: 5px 4px 5px #000;
  }
  

`;


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
    <NavbarBrand className="overlay"><img position="relative" left="100px" href='/' src={UiTM_icon} height= "100%" width= "100%"/></NavbarBrand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="lay">
        <Nav.Link href="/scds2021/home"> <Link style={{fontSize: '18px'}} to="/scds2021/home">Home</Link></Nav.Link>
        <Nav.Link><Link style={{fontSize: '18px'}} to="/scds2021/callPapers">Call for Papers</Link></Nav.Link>
        <Nav.Link><Link style={{fontSize: '18px'}} to="/scds2021/dates">Important Dates</Link></Nav.Link>
        <Nav.Link><Link style={{fontSize: '18px'}} to="../scds2021/proceeding">Proceeding</Link></Nav.Link>
          <NavDropdown style={{fontSize: '18px'}} title="Information" id="collasible-nav-dropdown">
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/programBook">Program Book</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/submissionGuideline">Submission Guideline</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/feePayment">Fee and Payment</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/registration">Registration</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/publication">Publication</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/venue">Venue & Accommodation</Link></NavDropdown.Item>
            <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/visa">Visas & Letter of Invitation</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link style={{color: 'black'}} to="/scds2021/bestPaper">Best Paper Awards</Link></NavDropdown.Item>
          </NavDropdown>
        <NavDropdown style={{fontSize: '18px'}} title="Committee" id="collasible-nav-dropdown">
          <NavDropdown.Item> <Link style={{color: 'black'}} to="/scds2021/committee">Technical Committee</Link></NavDropdown.Item>
          <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/organizer">International Scientific Committee</Link></NavDropdown.Item>  
        </NavDropdown>
        <NavDropdown  style={{fontSize: '18px'}} title="About" id="collasible-nav-dropdown">
          <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/contact">Contact Us</Link></NavDropdown.Item>
          <NavDropdown.Item><Link style={{color: 'black'}} to="/scds2021/maps">Maps & Direction</Link></NavDropdown.Item>
        <NavDropdown.Item href="/scds2021/previousscds"><Link style={{color: 'black'}} to="/scds2021/previousscds">Previous SCDS</Link></NavDropdown.Item>  
       </NavDropdown>
     </Nav>  
    </Navbar.Collapse>
    </Navbar>
  </Styles >

)

