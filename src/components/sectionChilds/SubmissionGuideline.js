import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from "react-helmet";

import img1 from '../../assets/images/contents/ccis.png';
import copyright from '../../assets/images/contents/Copyright-CtP_CCIS.pdf';
import template from '../../assets/images/contents/SCDS2019-Template.docx';

export const SubmissionGuideline = () => (
  <div>
  <Helmet>
    <title>The 6th International Conference on Soft Computing in Data Science 2021 (SCDS2021) - Submission Guideline</title>
  </Helmet>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/scds2021/home">Home</a></li>
        <li class="breadcrumb-item"><a >Information</a></li>
        <li class="breadcrumb-item active" aria-current="page">Submission Guideline</li>
      </ol>
    </nav>
    <h2>Paper Submission</h2>
    <p style={{ textAlign:'justify'}}>
      SCDS2021 accepts only high-quality papers for its conference proceedings, which are subject to a thorough &amp; 
      objective review process of at least 2 independent reviewers. Authors are invited to submit original unpublished manuscripts that demonstrate current
      research on one of the SCDS2021 topics of interest. All submissions will be handled electronically; detailed submission instructions will be provided 
      on the conference homepage. The acceptance rate for SCDS2021 was 38%. </p>
        
    <p style={{ textAlign:'justify'}}>
      All submitted papers should be in the form of .doc, .docx or .pdf file using the template of CCIS. This template is available from the website 
      <a href="http://www.springer.com/computer/lins/?SGWID=0-164-6-793341-0" target="blank">http://www.springer.com/computer/lins/?SGWID=0-164-6-793341-0 </a>,which is the official website of Springer to give the Information for Authors of Computer 
      Science Publications.  
    </p>

    <p style={{ textAlign:'justify'}}>
      <a href={template}>Springer Camera-Ready Template Download</a>
    </p>
   
    <p style={{ textAlign:'justify'}}>  
      Authors are invited to electronically submit original research contributions in English. <br/>
        o The length of submitted manuscripts should not exceed 15 pages. <br/>
        o Full papers: Minimum 10 pages and Maximum 15 pages. <br/>
        o Over-length charges will apply for each extra page beyond 10 pages. <br/>
        o The full paper submission can be done online at: <a href="http://edas.info/N27272" target="blank">http://edas.info/N27272</a> <br/>
    </p>

    <p>Submission deadline: 15th July 2021</p>

    <h2>Accepted Paper</h2>
    <p style={{ textAlign:'justify'}}>
      Proceedings of SCDS2021 will be published in Springer&#39;s CCIS series Communications in Computer and Information Science by Springer.
    </p>

    <p style={{ textAlign:'justify'}}>
      CCIS is abstracted/indexed in DBLP, Google Scholar, EI-Compendex, Mathematical
      Reviews, SCImago, Scopus. CCIS volumes are also submitted for the inclusion in ISI
      Proceedings.
    </p>

    <p style={{ textAlign:'justify'}}>
      Authors of all accepted papers must sign a Springer <a href={copyright} target="_blank">copyright release form </a>. At least one
      author must register for the conference to present the paper. Papers without any
      registered author/co-author will not be published.
    </p>

    <h2>Publications</h2>
    <p style={{ textAlign:'justify'}}>
    All accepted and registered papers of SCDS2021 will be submitted to be indexed in the renowned series of &quot;Communications in Computer and 
    Information Science series&quot; by Springer Verlag.
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