import * as React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { Footer } from './Footer';
import { GlobalStyles, Typography } from '../styles';
import { Nav } from './Nav';
// import stripes from '../images/stripes.svg';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <SiteBorderStyle>
        <ContentStyles>
          <Nav />
          {children}
          <Footer />
        </ContentStyles>
      </SiteBorderStyle>
    </>
  );
}

const ContentStyles = styled.div`
  background: white;
  padding: 2rem;
`;

const SiteBorderStyle = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vw, 12rem);

  background-size: 1500px; //调节条纹疏密
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

  /* background: white url(${stripes}); */