import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../layouts"
import SEO from "../components/seo"
import BG from "../components/bg"

import Photo1 from "../images/salon_kosmetyczny_1.jpg"
import Photo2 from "../images/salon_kosmetyczny_2.jpg"
import Photo3 from "../images/salon_kosmetyczny_3.jpg"
import Photo4 from "../images/salon_kosmetyczny_4.jpg"
import Photo5 from "../images/salon_kosmetyczny_5.jpg"
import Photo6 from "../images/salon_kosmetyczny_6.jpg"
import Photo7 from "../images/salon_fryzjerski_1.jpg"
import Photo8 from "../images/salon_fryzjerski_2.jpg"


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
const Wnetrza_komercyjnePage = () => {
  const photos = [
    { src: Photo1, alt: "Salon kosmetyczny projekt wnetrza" },
    { src: Photo2, alt: "Salon kosmetyczny projekt wnetrza" },
    { src: Photo3, alt: "Salon kosmetyczny projekt wnetrza" },
    { src: Photo4, alt: "Salon kosmetyczny projekt wnetrza" },
    { src: Photo5, alt: "Salon kosmetyczny projekt wnetrza" },
    { src: Photo6, alt: "Salon kosmetyczny projekt wnetrza" },
    { src: Photo7, alt: "Salon fryzjerski projekt wnetrza" },
    { src: Photo8, alt: "Salon fryzjerski projekt wnetrza" },
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
      <SEO title="wnętrza komercyjne" />

      <Container>
        <Title>wnętrza komercyjne</Title>

        <Description>
          <p>
            Nasze realizacje wnętrz komercyjnych obejmują nowoczesne salony kosmetyczne i fryzjerskie, w których funkcjonalność łączy się z eleganckim designem. Każdy projekt dopasowujemy do indywidualnych potrzeb klienta oraz charakteru marki, tworząc przestrzenie sprzyjające komfortowi i profesjonalnej obsłudze. Wykorzystujemy wysokiej jakości materiały i przemyślane rozwiązania, aby wnętrza były nie tylko estetyczne, ale także praktyczne w codziennym użytkowaniu.
          </p>

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

export default Wnetrza_komercyjnePage
