import React from "react";
import styled from 'styled-components';
import { Container } from 'reactstrap';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

// footer {
//   width: 100%;
//   padding: 1rem;
//   margin: .5rem 1rem;
//   text-align: center;
//   transition: 200ms;
//   &:hover {
//     box-shadow: 0 0 2rem gray;
//   }
// }

function Footer() {
  return (
    <div>
       <Container style={{backgroundColor:'black', width:'stretch', justifyContent: 'center', alignContent: 'initial', margin: 'auto', textAlign: 'center'}}>
        <p style={{ textAlign:'center', color: 'white', justifyContent: 'center', alignItems: 'center'}}>© 2020 • The 6th International Conference on Soft Computing in Data Science 2020 (SCDS2020)</p>
      </Container>
    </div> 
  );
}

export default Footer;