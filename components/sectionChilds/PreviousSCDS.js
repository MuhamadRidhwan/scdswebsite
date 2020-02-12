import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';
import Helmet from "react-helmet";

import scds2015 from '../../assets/images/contents/scds2015.jpg';
import scds2016 from '../../assets/images/contents/scds2016.gif';
import scds2017 from '../../assets/images/contents/scds2017.jpg';
import scds2018 from '../../assets/images/contents/scds2018.jpg';
import scds2019 from '../../assets/images/contents/scds2019.jpg';

export const PreviousSCDS = () => (
  <div>
   <Helmet>
    <title>The 6th International Conference on Soft Computing in Data Science 2020 (SCDS2020) - Previous SCDS</title>
   </Helmet>
      <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/scds2020/home">Home</a></li>
            <li class="breadcrumb-item"><a >About</a></li>
            <li class="breadcrumb-item active" aria-current="page">Previous SCDS</li>
            </ol>
      </nav>
    <h2>Previous SCDS</h2>
    <p></p>
    <NavbarBrand style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2019} alt="wrapkit" height= "100%" width= "100%"/></NavbarBrand>
    <NavbarBrand style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2018} alt="wrapkit" height= "100%" width= "100%"/></NavbarBrand>
    <NavbarBrand style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2017} alt="wrapkit" height= "100%" width= "100%"/></NavbarBrand>
    <NavbarBrand style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2016} alt="wrapkit" height= "100%" width= "100%"/></NavbarBrand>    
    <NavbarBrand style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2015} alt="wrapkit" height= "100%" width= "100%"/></NavbarBrand>      
   
  </div>
)