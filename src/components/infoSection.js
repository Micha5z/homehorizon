import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';
import AboutImage from '../images/girl.jpg'; // <-- podmień na swoje zdjęcie

const Section = styled.section`
  background-color: #F7F8FA;
  padding: 4rem 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #676767;
  font-weight: bold;
  font-family: 'Cinzel', serif;
  font-weight: 300;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  letter-spacing: 9px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #676767;
  font-family: 'Cormorant', serif;
  font-weight: 300;
  font-size: 1.1rem;
  
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  //order-radius: 12px;
  object-fit: cover;
`;

function BrandInfo() {
  return (
    <Section>
      <Container>
        <Row className="align-items-center">
          <Col md="12">
            <Title>HOME HORIZON</Title>
            <Text>
              Jesteśmy firmą zajmującą się projektowaniem wnętrz. 
              Tworzymy przestrzenie, które łączą estetykę z funkcjonalnością, 
              dbając o każdy detal. Naszym celem jest dostarczenie klientom 
              unikalnych i komfortowych rozwiązań dopasowanych do ich stylu życia.
            </Text>
          </Col>
          {/* <Col md="6">
            <Image src={AboutImage} alt="Home Horizon - projektowanie wnętrz" />
          </Col> */}
        </Row>
      </Container>
    </Section>
  );
}

export default BrandInfo;
