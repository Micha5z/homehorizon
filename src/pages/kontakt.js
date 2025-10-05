import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 140px;
  //margin-top: -110px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
 text-align: center; 
  @media (max-width: 960px) {
    font-size: 2rem;
  }
`

const KontaktPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="Kontakt" path={props.location.pathname} />
      <StyledAbout>


      
          <Contact />
          
      </StyledAbout>
    </Layout>
  )
      }
export default KontaktPage
