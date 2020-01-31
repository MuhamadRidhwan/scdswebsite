import React from 'react';
import { Container, Card } from 'react-bootstrap';

import uitm from '../../assets/images/contents/UiTM_main.jpg';

export const Contact = () => (
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/home">Home</a></li>
        <li class="breadcrumb-item"><a >About</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
      </ol>
    </nav>
    <h2>Contact Us</h2> <br/>  

    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={uitm} />
    <Card.Body>
      <Card.Title>Faculty of Computer and Mathematical Sciences, <br/> UiTM Shah Alam, Malaysia</Card.Title>
      <Card.Text>   
        Telephone: +603-55435329 <br/>
        Fax: +603-55435501 <br/>
        E-mail: scds2020@fskm.uitm.edu.my <br/>
        Office: Mon-Fri 8.00 - 17.00
      </Card.Text>
    </Card.Body>
  </Card> <br/>
  </div>
)