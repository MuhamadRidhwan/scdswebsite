import React from 'react';
import { Container, NavbarBrand, Navbar, Nav, NavItem, NavbarToggler, Collapse, Row, Col, Card, Button } from 'reactstrap';

import fee from '../../assets/images/contents/fee.png';

export const FeePayment = () => (
  <div>
    <h2>Fee and Payment</h2>  
    <NavbarBrand href="/" style={{  justifyContent: "center",
          alignItems: "center", display: "flex",}}><img src={fee} alt="wrapkit" height= "500px" width= "1000px"/></NavbarBrand>

    <p>
      Fees are inclusive of the following: <br/>
      1.	Conference registration <br/>
      2.	Conference pack (CD proceeding, conference bag, name tag) <br/>
      3.	Conference lunch and tea break <br/>
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