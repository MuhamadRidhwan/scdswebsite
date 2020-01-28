import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';

import scds2020 from './assets/images/contents/SCDS2020.jpg';
import img1 from './assets/images/contents/ccis.png';
import book1 from './assets/images/contents/book1.jpg';
import book2 from './assets/images/contents/book2.png';
import book3 from './assets/images/contents/book3.jpg';
import book4 from './assets/images/contents/book4.png';

import speaker1 from './assets/images/contents/speaker1.png';
import speaker2 from './assets/images/contents/speaker2.png';
import speaker3 from './assets/images/contents/speaker3.png';
import speaker4 from './assets/images/contents/speaker4.png';

export const Home = () => (
  <div>
     <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={scds2020} alt="wrapkit" height= "1400px" width= "1000px"/></NavbarBrand>

    <h2>Introduction</h2>
      <p style={{ textAlign:'justify'}}>The First and Second International Conference (SCDS2015, SCDS2016) were successfully held in Kuala Lumpur Malaysia. Subsequently, SCDS2017 was successfully hosted by Universitas Gadjah Mada, Indonesia. 
          Chulalongkorn University successfully hosted SCDS2018 from 15-16 August 2018. In 2019, Kyushu Institute ofTechnology (KYUTECH), Iizuka, Japan successfully hosted SCDS2018 from 28-29 August 2019.</p>
      <p style={{ textAlign:'justify'}}>The 6th International Conference on Soft Computing in Data Science 2020 (SCDS2020) will be hosted by Institute Teknologi Sepuluh Nopember, Indonesia from 25-26 August 2020. The theme of the conference is ‘Science in Analytics: 
          Harnessing Data and Simplifying Solutions’. SCDS2020 have invited renowned international and local keynote speakers who are academia or practitioners to share their knowledge and experience in the area in the applications of 
          soft computing in various disciplines. This conference aims to provide a platform for researchers and practitioners to share their research work and to create rigorous international research collaborations.</p>
      <p style={{ textAlign:'justify'}}>SCDS2020 targets participants from universities, government agencies and industries with the ultimate aim of bridging the gap between academia and the industry. Research collaborations between the academia and industry 
          can lead to the advancement of useful analytics and computing applications for providing real time insights and solutions.</p>
    <p style={{ textAlign:'justify'}}>All accepted and registered papers of SCDS2020 will be published in the renowned series of "Communications in Computer and Information Science series" by Springer Verlag.</p>

    <Container>
      <Row>
        <Col lg="5" className="m-b-30">                                              
          <img src={img1} alt="img" className="img-responsive img-rounded" width="250" />
          <p className="m-t-15 m-b-0"></p>
        </Col>                     
      </Row>
     </Container> 

     <p style={{ textAlign:'justify'}}>The SCDS2015, SCDS2016, SCDS2017, SCDS2018 and SCDS2019 proceedings were published in the Communications in Computer and Information Science series which is abstracted (indexed) by DBLP
                                    , EI, Scopus and were submitted for the inclusion in ISI Proceedings. Authors of accepted papers will be invited to submit extended paper to: </p>

                                    <p>{'\u2022'} Fast Track Submission of Selected Papers to Applied Soft Computing, Elsevier. (IF=3.541) </p>
                                    <p>{'\u2022'} Pertanika Journal of Science and Technology (with additional publication charge of RM750). <br/> &nbsp; http://pertanika.upm.edu.my/JST.php </p>
                                    <p>{'\u2022'} Malaysian Journal of Computing (https://mjoc.uitm.edu.my)[ISSN: 2231-7474] </p>
                                    <p>{'\u2022'} Indonesian Journal of Computing and Cybernetics (https://journal.ugm.ac.id/ijcss) </p>

                                    <NavbarBrand href="/"><img src={book1} alt="wrapkit" height= "310px" width= "200px"/></NavbarBrand>
                                    <NavbarBrand href="/"><img src={book2} alt="wrapkit" height= "310px" width= "200px"/></NavbarBrand>
                                    <NavbarBrand href="/"><img src={book3} alt="wrapkit" height= "310px" width= "200px"/></NavbarBrand>
                                    <NavbarBrand href="/"><img src={book4} alt="wrapkit" height= "310px" width= "200px"/></NavbarBrand> <br/> <br/>

                                    <h2>Keynote Speakers</h2>    <br/> 
                                    <Container>                
                    {/* <Row className="justify-content-center">         
                        <h1 className="title font-bold">Keynote Speaker</h1> 
                    </Row> */}
                    <Row>      
                        <Col lg="3" className="m-b-30">                       
                            <img src={speaker1} alt="img" width="200" height="200" />
                            <h4 className="card-title"><br/>Professor Dr. Guan-Hua, Huang</h4>
                            <p className="m-t-15 m-b-0" styles="font-size: 15px; color:#4a54f1; text-align:justify;  font-weight:bold;">Institute of Statistics National Chiao Tung University, Taiwan. <br/><br/>
                                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Research Areas</p>
                                Aging, Nursing, Schizophrenia, Diabetes, Sensory Impairments (hearing, vision, olfaction), Data Science
                            </p><br/>
                            <Col md="13">
                            <Card body className="card-shadow">
                                <Button>Abstract</Button>
                            </Card>
                        </Col>     
                        </Col>  
                        <Col lg="3" className="m-b-30">                       
                            <img src={speaker2} alt="img" width="200" height="200" />
                            <h4 className="card-title"><br/>Professor Dr. Richard Millham</h4>
                            <p className="m-t-15 m-b-0">Faculty of Accounting and Informatics Durban University of Technology. <br/><br/>
                                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Research Areas</p>
                                Software and data evolution, Cloud Computing, Big Data, Bio-inspired Algorithms, IOT
                            </p>
                            <Card body className="card-shadow">
                                <Button>Abstract</Button>
                            </Card>
                        </Col>        
                        <Col lg="3" className="m-b-30">                       
                            <img src={speaker3} alt="img" width="200" height="200" />
                            <h4 className="card-title"><br/>Associate Professor Dr Simon Fong</h4>
                            <p className="m-t-15 m-b-0" >Information Science Department University of Macau, China. <br/><br/>
                                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Research Areas</p>
                                E-Commerce, Data Mining, Business Intelligence, Intelligent Agent Technology, Electronic Governance, Optimization Algorithms
                            </p>
                            <Card body className="card-shadow">
                                <Button>Abstract</Button>
                            </Card>
                        </Col>        
                        <Col lg="3" className="m-b-30">                       
                            <img src={speaker4} alt="img" width="200" height="200" />
                            <h4 className="card-title"><br/>Associate Professor Dr.rer.pol. Heri Kuswanto</h4>
                            <p className="m-t-15 m-b-0" >Faculty of Science and Data Analytics Institute Teknologi Sepuluh Nopember, Indonesia. <br/><br/>
                                <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Research Areas</p>
                                Computational Statistics, Econometrics, Extreme Weather and Climate 
                            </p>
                            <Card body className="card-shadow">
                                <Button>Abstract</Button>
                            </Card>
                        </Col>                                                       
                    </Row>
                </Container>   
                    
  </div>
)


