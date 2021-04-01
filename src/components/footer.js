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

  .footer {
    position: contain;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: black;
    text-align: center;
    transition: 200ms;
    padding: 1rem;
    margin: .5rem 1rem;
    &:hover {
    box-shadow: 0 0 2rem gray;
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
    <Styles>
      <div className = "footer">  
          <p style={{ textAlign:'center', color: 'white', justifyContent: 'center', alignItems: 'center'}}>© 2021 • The 6th International Conference on Soft Computing 
            in Data Science 2021 (SCDS2021) <br/>scds2021@uitm.edu.my</p>           
      </div> 
    </Styles>
  );
}

export default Footer;