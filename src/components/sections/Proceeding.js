import React, { Component }  from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';

import img1 from '../../assets/images/contents/ccis.png';

export const Proceeding = () => (
  <div>
    <h2>Proceeding</h2>
    <p style={{ textAlign:'justify'}}>The SCDS2015, SCDS2016, SCDS2017, SCDS2018 and SCDS2019 proceedings were published in the Communications in Computer and Information Science series which is abstracted (indexed) by DBLP, EI, and Scopus. 
        The SCDS2020 proceeding will also be published in the Communications in Computer and Information Science series which is abstracted (indexed) by DBLP, EI, and Scopus.
    </p>
    <p style={{ textAlign:'justify'}}>
      The SCDS2020 proceeding will also be published in the Communications in Computer and Information Science series which is abstracted (indexed) by DBLP, EI, and Scopus.
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