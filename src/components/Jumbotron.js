import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import boatImage from '../assets/boatImage.jpg';

import banner from '../assets/images/contents/banner-bg.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #ffffff;
    height: 230px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>SCDS 2020</h1>
        <p>The 6th International Conference on Soft Computing in Data Science 2020</p>
      </Container>
    </Jumbo>
  </Styles>
)
