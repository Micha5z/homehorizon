import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import SEO from '../components/seo'
import BG from "../components/bg"
// import { UncontrolledCarousel } from 'reactstrap';
import BrandInfo from '../components/infoSection';
import Offer from '../components/offerSection';
import Contact from '../components/contact';
import Slider from '../components/slider';
import 'bootstrap/dist/css/bootstrap.css';
import Background from '../images/ver2.jpg'


const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  // padding-top: 90px;

  // @media (max-width: 960px) {
  //   margin-bottom: 0;
  // }
`;

const items = [
  {
    src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',
        altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',
        altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://dag08uxs564ub.cloudfront.net/images/mountain-hut-in-polish-mountains.max-1280x768.jpg',    
        altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  margin-bottom: 2rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  padding-top: 200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  margin-top: 0;

  @media (max-width: 960px) {
    font-size: 2rem;
    padding-top: 150px;
  }
`
const SubTitle = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
  margin-top: 20px;

  @media (max-width: 960px) {
    font-size: 1.8rem;
  }
`
const StyledTradeLink = styled.a`
  display: inline-block;          /* <-- ważne, żeby przycisk dopasowywał się do treści */
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 1.7rem;
  background: linear-gradient(90deg,rgba(116, 115, 115, 1) 0%, rgba(76, 74, 74, 1) 31%); 
  color: white;
  text-decoration: none;
  //border-radius: 65px;
  white-space: nowrap;            /* <-- zapobiega łamaniu tekstu */
  margin: 300px auto 0 auto;       /* wyśrodkowanie */
  border: 1px solid transparent;
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  :hover,
  :focus {
    border: 1px solid white;
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* poziome wyśrodkowanie */
  margin-top: 40px;
  
`;

const BGImage = styled.div`
  background-image: url(${Background});
  // height: 85vh;
  width: 100%;
  // margin-top: -110px;
  position: relative;
  // background-attachment: fixed;
  min-height: 650px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  // background-size: contain;

  @media (min-width: 961px) {
    background-attachment: fixed;
  }
`

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
};

const IndexPage = props => {
  return (
    <Layout path={props.location.pathname}>
      <SEO title='Projekty wnętrz' path={props.location.pathname} description='Horyzont domu' />
      <BG />
      <StyledBody>
       {/* <StyledCarouselContainer>
         <FullWidthCarousel items={items} />
        </StyledCarouselContainer> */}
        {/* <Slider /> */}
        <BGImage>
          <div style={{ zIndex: 1, position: 'absolute', top: 0, width: '100%' }}>
            <Title>
            
            </Title>
            {/* <SubTitle>Projektujemy wnętrza, które inspirują i zachwycają każdego dnia</SubTitle> */}
            <ButtonWrapper> 
            {/* <StyledTradeLink onClick={scrollToBottom}>
              Napisz do Nas!
            </StyledTradeLink> */}
            
            </ButtonWrapper>
           
          </div>
          <div style={{
            height: '100%',
            width: '100%',
            background: 'black',
            opacity: 0.2,
            position: 'absolute',
            top: 0,
          }}>
          </div>
        </BGImage>
        <Offer />
        <BrandInfo />
        <Contact />
     </StyledBody>
    </Layout >
  )
}

export default IndexPage
