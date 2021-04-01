import React from 'react';
import { Jumbotron as Jumbo, Container, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

import scds2015 from '../assets/images/contents/scds2015.jpg';
import scds2016 from '../assets/images/contents/scds2016.gif';
import scds2017 from '../assets/images/contents/scds2017.jpg';
import scds2018 from '../assets/images/contents/scds2018.jpg';
import scds2019 from '../assets/images/contents/scds2019.jpg';
import scds2020 from '../assets/images/contents/scds2020.jpg';

import info1 from '../assets/images/contents/info-1.jpg';
import info2 from '../assets/images/contents/info-2.jpg';
import info3 from '../assets/images/contents/info-3.jpg';
import info4 from '../assets/images/contents/info-4.jpg';
import info5 from '../assets/images/contents/info-5.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${scds2020}) no-repeat fixed bottom;
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
          src={info1}
          alt="First slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info2}
          alt="First slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info3}
          alt="First slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info4}
          alt="First slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={info5}
          alt="First slide"
          width="100%"
          height="100%"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={scds2019}
          alt="First slide"
          width="100%"
          height="100%"
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
          width="100%"
          height="100%"
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
          width="100%"
          height="100%x"
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
          width="100%"
          height="100%"
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
          width="100%"
          height="100%"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  </Styles>
)
