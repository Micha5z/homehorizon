import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';
import { Container, Col, Row } from 'reactstrap';
import Contact from '../components/contact';


import Layout from '../layouts'
import SEO from '../components/seo'
import BG from '../components/bg'

const StyledAbout = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.colors.blackWhite};
  padding: 0rem 0rem 6rem 0;
  margin-top: -110px;
  
  // min-height: 90vh;
`

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 42px;

  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  // text-align: center; 
  @media (max-width: 960px) {
    font-size: 2.5rem;
  }
`
const Text = styled.p`
  // margin-bottom: 4rem;
  // text-align: center; 
  font-size: 1.2rem;
  pointer-events: none;

  @media (max-width: 960px) {
    font-size: 1rem;
  }
`

const AboutPage = props => {

  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="About" path={props.location.pathname} />
      <StyledAbout>
        <Container style={{paddingTop:140}}>
          <Title>Pracownia Home Horizon</Title>
                <Text>
                  Home Horizon to pracownia architektoniczna, która specjalizuje się w projektowaniu i aranżacji wnętrz mieszkań, apartamentów oraz domów. Tworzymy przestrzenie pełne charakteru – wyjątkowe, niepowtarzalne i dopasowane do stylu życia naszych klientów. Każdy projekt traktujemy indywidualnie, 
                  wydobywając to, co unikalne w osobowości właściciela i przekładając to na język architektury wnętrz.
                </Text>
                <Text style={{fontWeight: '900'}}>
           Nasze realizacje zachwycają estetyką, inspirują pomysłowością i łączą w sobie piękno z funkcjonalnością. Dbamy o każdy detal, dzięki czemu każde wnętrze zyskuje nie tylko niebanalny wygląd, ale także komfort i wygodę codziennego użytkowania.
                </Text>
        </Container>
          {/* <Offer /> */}
      </StyledAbout>
      <Contact />
    </Layout>
  )
      }
export default AboutPage
