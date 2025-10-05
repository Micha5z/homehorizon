import React from 'react';
import styled from 'styled-components';
import Offer from '../components/offerSection';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import { Container, Row, Col } from 'reactstrap';
import Projekt1 from "../images/kuchnia.jpg"
import Projekt2 from "../images/salon.jpg"
import Projekt3 from "../images/sypialnia1.jpg"

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
  margin-top: -110px;
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

const ProjektyPage = props => {

  const projects = [
    { title: "Dom nad jeziorem", image: Projekt1, link: "/dom-nad-jeziorem" },
    { title: "Apartament w centrum", image: Projekt2, link: "/projekty/apartament-centrum" },
    { title: "Biuro loftowe", image: Projekt3, link: "/projekty/biuro-loft" },
  ]


  return (
    <Layout path={props.location.pathname}>
      <BG />

      <SEO title="Projekty" path={props.location.pathname} />
      <StyledAbout>


             <div>
      <h1>Nasze projekty</h1>
      <Gallery projects={projects} />
    </div>
          {/* <Offer /> */}
          {/* <Contact /> */}
          
      </StyledAbout>
    </Layout>
  )
      }
export default ProjektyPage
