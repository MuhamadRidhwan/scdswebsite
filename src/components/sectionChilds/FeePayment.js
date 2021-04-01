import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';
import Helmet from "react-helmet";

import fee from '../../assets/images/contents/fee.png';

export const FeePayment = () => (
  <div>
    <Helmet>
      <title>The 6th International Conference on Soft Computing in Data Science 2020 (SCDS2020) - Fee and Payment</title>
      <meta name="description" content="Fee and Payment Fees are inclusive of the following:
                                        1. Conference registration
                                        2. Publication of works in proceedings SCDS2021" />
      <meta name="keywords" content="scds2021,aaec,scds 2021, virtual conference" />
    </Helmet>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/scds2021/home">Home</a></li>
        <li class="breadcrumb-item"><a >Information</a></li>
        <li class="breadcrumb-item active" aria-current="page">Fee and Payment</li>
      </ol>
    </nav>
    <h2>Fee and Payment</h2>  
    <NavbarBrand style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={fee} alt="wrapkit" height= "260px" width= "500px"/></NavbarBrand>

    <p>
      Fees are inclusive of the following: <br/>
      1.	Conference registration <br/>
      2.	Publication of works in proceedings SCDS2021 <br/>
    </p>

    <p>
      <u>PAYMENT BY WIRE TRANSFER/CHEQUE </u> <br/>

      Bank Account name: UNIVERSITI TEKNOLOGI MARA <br/>
      Bank Account No: 12177010005662 <br/>
      Bank Name: Bank Islam Malaysia Berhad <br/>
      Bank Address : Ground Floor, Bangunan Prima Siswa, Universiti Teknologi MARA <br/>
      City: Shah Alam <br/>
      State: Selangor <br/>
      Country: Malaysia <br/>
      Swift Code: BIMBMYKL <br/> <br/>

      After performing the payment, please email a copy of the transaction to us at sharifahali@tmsk.uitm.edu.my and scds2019@fskm.uitm.edu.my 
      for record management. <br/> 

      All bank charges are to be borne by the participant. <br/> 

      Payments made are <b>NOT</b> refundable <br/>

    </p>
  </div>
)