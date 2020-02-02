import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';

import img1 from '../../assets/images/contents/ccis.png';
import book1 from '../../assets/images/contents/book1.jpg';
import book2 from '../../assets/images/contents/book2.png';
import book3 from '../../assets/images/contents/book3.jpg';
import book4 from '../../assets/images/contents/book4.png';

export const Publication = () => (
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/scds2020/home">Home</a></li>
        <li class="breadcrumb-item"><a >Information</a></li>
        <li class="breadcrumb-item active" aria-current="page">Publication</li>
      </ol>
    </nav>
    <h2>Publication</h2>
    <h3><u>Proceeding</u></h3>
    <p style={{ textAlign:'justify'}}>All accepted and registered papers of SCDS2019 will be submitted to be indexed in the renowned series of "Communications in Computer and Information 
        Science series" by Springer Verlag.</p>
    <p style={{ textAlign:'justify'}}>The SCDS2015, SCDS2016, SCDS2017 and SCDS2018 proceedings were published in the Communications in Computer and Information Science series which is abstracted (indexed) by DBLP, EI,
       Scopus and were submitted for the inclusion in ISI Proceedings.</p>    

    <Container>
      <Row>
        <Col lg="5" className="m-b-30">                                              
          <img src={img1} alt="img" className="img-responsive img-rounded" width="250" />
          <p className="m-t-15 m-b-0"></p>
        </Col>                     
      </Row>
    </Container> 

    <h3><u>Journal</u></h3>   
    <p>Authors of accepted papers will be invited to submit extended paper to:</p>
    <p><li>Fast Track Submission of Selected Papers to Applied Soft Computing, Elsevier. (IF=3.541)</li></p>  
    <p><li>Pertanika Journal of Science and Technology (with additional publication charge of RM750). http://pertanika.upm.edu.my/JST.php</li></p>
    <p><li>Malaysian Journal of Computing (http://mjoc.uitm.edu.my)[ISSN: 2231-7474]</li></p>
    <p><li>Indonesian Journal of Computing and Cybernetics (https://journal.ugm.ac.id/ijcss)</li></p>

    <NavbarBrand href="/"><img src={book1} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand>
    <NavbarBrand href="/"><img src={book2} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand>
    <NavbarBrand href="/"><img src={book3} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand>
    <NavbarBrand href="/"><img src={book4} alt="wrapkit" height= "250px" width= "180px"/></NavbarBrand> <br/> <br/>

  </div>
)