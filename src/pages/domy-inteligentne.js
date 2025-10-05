import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../layouts"
import SEO from "../components/seo"
import BG from "../components/bg"

import Photo1 from "../images/sypialnia1.jpg"
import Photo2 from "../images/sypialnia2.jpg"

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  line-height: 1.6;
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
  padding-bottom: 220px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-items: center;
`

const Img = styled.img`
  width: 100%;
  max-width: 450px;
  cursor: pointer;
  // border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const Lightbox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  // border-radius: 8px;
`

const Domy_inteligentnePage = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (src) => setSelectedImage(src)
  const closeLightbox = () => setSelectedImage(null)

  return (
    <Layout>
      <BG />
      <SEO title="Projekty" />

      <Container>
        <Title>Domy inteligętne</Title>

        <Description>
          <p>
Projektując domy inteligentne, łączymy nowoczesną technologię z komfortem i funkcjonalnością. Każdy projekt umożliwia pełną automatyzację systemów oświetlenia, ogrzewania, klimatyzacji i bezpieczeństwa, co pozwala na wygodne sterowanie całym domem z poziomu smartfona lub tabletu. Nasze rozwiązania nie tylko zwiększają komfort życia, ale również optymalizują zużycie energii, dbając o środowisko i obniżając koszty eksploatacji. Dzięki indywidualnemu podejściu do każdego projektu, każdy dom inteligentny staje się przestrzenią dopasowaną do potrzeb jego mieszkańców.
          </p>

        </Description>

        <Grid>
          {/* <Img src={Photo1} alt="Dom nad jeziorem - widok 1" onClick={() => openLightbox(Photo1)} />
          <Img src={Photo2} alt="Dom nad jeziorem - widok 2" onClick={() => openLightbox(Photo2)} /> */}
        </Grid>

        {selectedImage && (
          <Lightbox onClick={closeLightbox}>
            <LightboxImage src={selectedImage} alt="Podgląd zdjęcia" />
          </Lightbox>
        )}
      </Container>
    </Layout>
  )
}

export default Domy_inteligentnePage
