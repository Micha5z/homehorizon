import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../layouts"
import SEO from "../components/seo"
import BG from "../components/bg"

import Photo1 from "../images/projekt_lazienki_1.jpg"
import Photo2 from "../images/projekt_lazienki_2.jpg"
// import Photo3 from "../images/projekt_lazienki_3.jpg"
import Photo4 from "../images/projekt_lazienki_4.jpg"
import Photo5 from "../images/projekt_lazienki_5.jpg"
import Photo6 from "../images/projekt_lazienki_6.jpg"
import Photo7 from "../images/projekt_lazienki_7.jpg"
import Photo8 from "../images/projekt_lazienki_8.jpg"
import Photo9 from "../images/projekt_lazienki_9.jpg"
import Photo10 from "../images/projekt_lazienki_10.jpg"
import Photo11 from "../images/projekt_lazienki_11.jpg"
import Photo12 from "../images/projekt_lazienki_12.jpg"
import Photo13 from "../images/projekt_lazienki_13.jpg"
import Photo14 from "../images/projekt_lazienki_14.jpg"
import Photo15 from "../images/projekt_lazienki_15.jpg"
import Photo16 from "../images/projekt_lazienki_16.jpg"
import Photo17 from "../images/projekt_lazienki_17.jpg"
import Photo18 from "../images/projekt_lazienki_18.jpg"
import Photo19 from "../images/projekt_lazienki_19.jpg"
import Photo20 from "../images/projekt_lazienki_20.jpg"
import Photo21 from "../images/projekt_lazienki_21.jpg"
import Photo22 from "../images/projekt_lazienki_22.jpg"
import Photo23 from "../images/projekt_lazienki_23.jpg"
import Photo24 from "../images/projekt_lazienki_24.jpg"
import Photo25 from "../images/projekt_lazienki_25.jpg"
import Photo26 from "../images/projekt_lazienki_26.jpg"
import Photo27 from "../images/projekt_lazienki_27.jpg"
import Photo28 from "../images/projekt_lazienki_28.jpg"
import Photo29 from "../images/projekt_lazienki_29.jpg"
import Photo30 from "../images/projekt_lazienki_30.jpg"
import Photo31 from "../images/projekt_lazienki_31.jpg"
import Photo32 from "../images/projekt_lazienki_32.jpg"
import Photo33 from "../images/projekt_lazienki_33.jpg"
import Photo34 from "../images/projekt_lazienki_34.jpg"
import Photo35 from "../images/projekt_lazienki_35.jpg"
import Photo36 from "../images/projekt_lazienki_36.jpg"
import Photo37 from "../images/projekt_lazienki_37.jpg"
import Photo38 from "../images/projekt_lazienki_38.jpg"



const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-top: 150px;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 200;
  margin-bottom: 2rem;
  font-family: 'Cinzel', serif;
  letter-spacing: 9px;
  color: #676767;
  text-transform: uppercase;
`

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.4;
  color: #676767;
  font-family: 'Cormorant', serif;
  font-weight: 300;
  text-align: center;
  margin: 0 auto 2.5 rem auto; /* auto wyśrodkowanie + odstęp */
  max-width: 900px; /* ograniczona szerokość dla lepszej czytelności */
`

/* --- STYLED dla galerii --- */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  margin-top: 2rem;
`

const Img = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;   /* proporcja szerokości do wysokości */
  object-fit: cover;     /* przycina obraz zamiast rozciągania */
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`

const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  padding: 0 1rem;

  ${({ left }) => left && `left: 20px;`}
  ${({ right }) => right && `right: 20px;`}
`

/* --- STRONA --- */
const LazienkiPage = () => {
  const photos = [
    { src: Photo1, alt: "projekt wnetrza lazienki" },
    { src: Photo2, alt: "projekt wnetrza lazienki" },
    // { src: Photo3, alt: "projekt wnetrza lazienki" },
    { src: Photo4, alt: "projekt wnetrza lazienki" },
    { src: Photo5, alt: "projekt wnetrza lazienki" },
    { src: Photo6, alt: "projekt wnetrza lazienki" },
    { src: Photo7, alt: "projekt wnetrza lazienki" },
    { src: Photo8, alt: "projekt wnetrza lazienki" },
    { src: Photo9, alt: "projekt wnetrza lazienki" },
    { src: Photo10, alt: "projekt wnetrza lazienki" },
    { src: Photo11, alt: "projekt wnetrza lazienki" },
    { src: Photo12, alt: "projekt wnetrza lazienki" },
    { src: Photo13, alt: "projekt wnetrza lazienki" },
    { src: Photo14, alt: "projekt wnetrza lazienki" },
    { src: Photo15, alt: "projekt wnetrza lazienki" },
    { src: Photo16, alt: "projekt wnetrza lazienki" },
    { src: Photo17, alt: "projekt wnetrza lazienki" },
    { src: Photo18, alt: "projekt wnetrza lazienki" },
    { src: Photo19, alt: "projekt wnetrza lazienki" },
    { src: Photo20, alt: "projekt wnetrza lazienki" },
    { src: Photo21, alt: "projekt wnetrza lazienki" },
    { src: Photo22, alt: "projekt wnetrza lazienki" },
    { src: Photo23, alt: "projekt wnetrza lazienki" },
    { src: Photo24, alt: "projekt wnetrza lazienki" },
    { src: Photo25, alt: "projekt wnetrza lazienki" },
    { src: Photo26, alt: "projekt wnetrza lazienki" },
    { src: Photo27, alt: "projekt wnetrza lazienki" },
    { src: Photo28, alt: "projekt wnetrza lazienki" },
    { src: Photo29, alt: "projekt wnetrza lazienki" },
    { src: Photo30, alt: "projekt wnetrza lazienki" },
    { src: Photo31, alt: "projekt wnetrza lazienki" },
    { src: Photo32, alt: "projekt wnetrza lazienki" },
    { src: Photo33, alt: "projekt wnetrza lazienki" },
    { src: Photo34, alt: "projekt wnetrza lazienki" },
    { src: Photo35, alt: "projekt wnetrza lazienki" },
    { src: Photo36, alt: "projekt wnetrza lazienki" },
    { src: Photo37, alt: "projekt wnetrza lazienki" },
    { src: Photo38, alt: "projekt wnetrza lazienki" },
  ]

  const [currentIndex, setCurrentIndex] = useState(null)

  const openLightbox = (index) => setCurrentIndex(index)
  const closeLightbox = () => setCurrentIndex(null)

  const showPrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
  }

  const showNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
  }

  return (
    <Layout>
      <BG />
      <SEO title="Lazienki" />

      <Container>
        <Title>Łazienki</Title>

        <Description>
          <p>
Projektując łazienki, stawiamy na połączenie nowoczesnej estetyki z wygodą użytkowania. Tworzymy przestrzenie, które zachwycają elegancją i funkcjonalnością – od minimalistycznych wnętrz po bardziej luksusowe aranżacje. Dzięki dbałości o detale i odpowiedni dobór materiałów, nasze łazienki są nie tylko piękne, ale i trwałe.          </p>

        </Description>

        {/* --- GALERIA --- */}
        <Grid>
          {photos.map((photo, index) => (
            <Img
              key={index}
              src={photo.src}
              alt={photo.alt}
              onClick={() => openLightbox(index)}
            />
          ))}
        </Grid>

        {currentIndex !== null && (
          <Lightbox onClick={closeLightbox}>
            <NavButton left onClick={showPrev}>‹</NavButton>
            <LightboxImage
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
            />
            <NavButton right onClick={showNext}>›</NavButton>
          </Lightbox>
        )}
      </Container>
    </Layout>
  )
}

export default LazienkiPage
