import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';
import Helmet from "react-helmet";

import img1 from '../../assets/images/contents/ccis.png';

export const Publication = () => (
  <div>
  <Helmet>
    <title>The 6th International Conference on Soft Computing in Data Science 2020 (SCDS2020) - Publication</title>
  </Helmet>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/scds2021/home">Home</a></li>
        <li class="breadcrumb-item"><a >Information</a></li>
        <li class="breadcrumb-item active" aria-current="page">Publication</li>
      </ol>
    </nav>
    <h3>Proceeding</h3>
    <p style={{ textAlign:'justify'}}>All accepted and registered papers of SCDS2020 will be submitted to be indexed in the renowned series of &quot;Communications 
      in Computer and Information Science series&quot; by Springer Verlag.
    </p>   

    <Container>
      <Row>
        <Col lg="5" className="m-b-30">                                              
          <img src={img1} alt="img" className="img-responsive img-rounded" width="250" />
          <p className="m-t-15 m-b-0"></p>
        </Col>                     
      </Row>
    </Container> 

  </div>
)