import React from 'react';
import styled from 'styled-components';
import Contact from '../components/contact';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../layouts';
import SEO from '../components/seo';
import BG from '../components/bg';

const StyledAbout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 140px;
`;

const Title = styled.h1`
  color: #676767;
  font-family: 'Cinzel', serif;
  font-weight: 300;
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 960px) {
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #676767;
  font-family: 'Cormorant', serif;
  font-weight: 300;
  text-align: center;
  margin: 0 auto 2.5rem auto; /* auto wyśrodkowanie + odstęp */
  max-width: 900px; /* ograniczona szerokość dla lepszej czytelności */
`;

const OfferPage = props => {
  return (
    <Layout path={props.location.pathname}>
      <BG />
      <SEO title="Oferta" path={props.location.pathname} />
      <StyledAbout>
        <Container>
          <Row>
            <Col>
              <Title>Inwentaryzacja architektoniczna</Title>
              <Text>
                Dokładny pomiar lokalu klienta połączony z dokumentacją fotograficzną
                jest niezbędny do rozpoczęcia projektu i zbudowania bryły wnętrza.
              </Text>

              <Title>Projekt koncepcyjny 2D</Title>
              <Text>
                Projekt koncepcyjny to pierwszy etap prac projektowych. Wykonujemy 2-3 koncepcje
                funkcjonalne wnętrza, na które składają się rzuty z propozycjami ścian działowych,
                układu mebli, urządzeń i sanitariatów. Bazując na jednej, wybranej koncepcji lub jej
                wariacjach pracujemy z Klientem nad ostateczną formą projektu funkcjonalnego.
              </Text>

              <Title>Wizualizacje 3D</Title>
              <Text>
                Opracowanie ostatecznego projektu funkcjonalnego umożliwia przejście do następnego
                etapu jakim jest wizualizacja, mająca na celu zobrazowanie efektu finalnego
                projektowanego wnętrza.
              </Text>

              <Title>Projekt wykonawczy</Title>
              <Text>
                Na tym etapie projektu przygotowujemy szczegółową dokumentację projektową w oparciu
                o wcześniejsze założenia wypracowane wspólnie z Klientem. Precyzyjne rysunki
                techniczne stanowią dokładną instrukcję budowlaną dla ekip wykonawczych umożliwiającą
                zrealizowanie projektu zgodnie z ustaleniami i wizją przedstawioną na wizualizacjach.
              </Text>

              <Title>
                Kompleksowa wycena prac wykończeniowych oraz spis użytych materiałów
              </Title>
              <Text>
                Na życzenie klienta sporządzamy spis użytych w projektowanych wnętrzach materiałów i
                mebli wraz z listą miejsc gdzie można je nabyć. Współpraca z zaprzyjaźnionymi ekipami
                remontowymi oraz pracowniami stolarskimi pozwala nam na opracowanie kompleksowej
                wyceny.
              </Text>

              <Title>Nadzór autorski</Title>
              <Text>
                Klientom, którzy nie dysponują dostateczną ilością czasu proponujemy kompleksową
                realizację projektu.
              </Text>

              <Title>Przygotowanie lokalu do sprzedaży / wynajmu</Title>
              <Text>
                Porady w odświeżeniu i stylizacji nieruchomości. Drobne zmiany pomogą znaleźć
                potencjalnego nabywcę / wynajmującego.
              </Text>

              <Title>Projekt online</Title>
              <Text>
                Dla wygody klientów wykonujemy również projekty bez konieczności osobistych spotkań z
                architektem – na podstawie przesłanych rzutów pomieszczeń.
              </Text>
            </Col>
          </Row>
        </Container>

        <Contact />
      </StyledAbout>
    </Layout>
  );
};

export default OfferPage;
