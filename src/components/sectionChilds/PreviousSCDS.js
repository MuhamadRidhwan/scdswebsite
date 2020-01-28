import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';

import scds2015 from '../../assets/images/contents/scds2015.jpg';
import scds2016 from '../../assets/images/contents/scds2016.gif';
import scds2017 from '../../assets/images/contents/scds2017.jpg';
import scds2018 from '../../assets/images/contents/scds2018.jpg';

export const PreviousSCDS = () => (
  <div>
    <h2>Previous SCDS</h2>
    <p></p>
    <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2015} alt="wrapkit" height= "500px" width= "1000px"/></NavbarBrand>
    <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2016} alt="wrapkit" height= "500px" width= "1000px"/></NavbarBrand>
    <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2017} alt="wrapkit" height= "500px" width= "1000px"/></NavbarBrand>
    <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2018} alt="wrapkit" height= "500px" width= "1000px"/></NavbarBrand>      
   
  </div>
)