import React from 'react';
import { Jumbotron as Jumbo, Container, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import banner from '../assets/images/contents/banner-bg.jpg';

import logo from '../assets/images/contents/slide-show-acds2020-bg-02.jpg';
import img1 from '../assets/images/contents/ccis.png';
import book1 from '../assets/images/contents/book1.jpg';
import book2 from '../assets/images/contents/book2.png';
import book3 from '../assets/images/contents/surabaya-bg.jpg';
import book4 from '../assets/images/contents/slide-show-acds2020_bridge-01.jpg';

import scds2015 from '../assets/images/contents/scds2015.jpg';
import scds2016 from '../assets/images/contents/scds2016.gif';
import scds2017 from '../assets/images/contents/scds2017.jpg';
import scds2018 from '../assets/images/contents/scds2018.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #ffffff;
    height: 300px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0;
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
    {/* <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>SCDS 2020</h1>
        <p>The 6th International Conference on Soft Computing in Data Science 2020</p>
      </Container>
    </Jumbo> */}

    <Carousel height= "100px">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
          width="200px"
          height="400px"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scds2015}
          alt="First slide"
          width="200px"
          height="404px"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scds2016}
          alt="First slide"
          width="200px"
          height="400px"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scds2017}
          alt="First slide"
          width="200px"
          height="400px"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scds2018}
          alt="First slide"
          width="200px"
          height="400px"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  </Styles>
)
