import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../layouts"
import SEO from "../components/seo"
import BG from "../components/bg"

// ---
// --- Projekt 1
import Photo1_1 from "../images/projekt_indywidualny_a01.jpg"
import Photo1_2 from "../images/projekt_indywidualny_a02.jpg"
import Photo1_3 from "../images/projekt_indywidualny_a03.jpg"
import Photo1_4 from "../images/projekt_indywidualny_a04.jpg"
import Photo1_5 from "../images/projekt_indywidualny_a05.jpg"
import Photo1_6 from "../images/projekt_indywidualny_a06.jpg"
import Photo1_7 from "../images/projekt_indywidualny_a07.jpg"
import Photo1_8 from "../images/projekt_indywidualny_a08.jpg"
import Photo1_9 from "../images/projekt_indywidualny_a09.jpg"
import Photo1_10 from "../images/projekt_indywidualny_a10.jpg"

// --- Projekt 2
import Photo2_1 from "../images/projekt_indywidualny_b1.jpg"
import Photo2_2 from "../images/projekt_indywidualny_b2.jpg"
import Photo2_3 from "../images/projekt_indywidualny_b3.jpg"
import Photo2_4 from "../images/projekt_indywidualny_b4.jpg"
import Photo2_5 from "../images/projekt_indywidualny_b5.jpg"
import Photo2_6 from "../images/projekt_indywidualny_b6.jpg"
import Photo2_7 from "../images/projekt_indywidualny_b7.jpg"

// --- Projekt 3
import Photo3_1 from "../images/projekt_indywidualny_c01.jpg"
import Photo3_2 from "../images/projekt_indywidualny_c02.jpg"
import Photo3_3 from "../images/projekt_indywidualny_c03.jpg"
import Photo3_4 from "../images/projekt_indywidualny_c04.jpg"
import Photo3_5 from "../images/projekt_indywidualny_c05.jpg"
import Photo3_6 from "../images/projekt_indywidualny_c06.jpg"
import Photo3_7 from "../images/projekt_indywidualny_c07.jpg"
import Photo3_8 from "../images/projekt_indywidualny_c08.jpg"
import Photo3_9 from "../images/projekt_indywidualny_c09.jpg"
import Photo3_10 from "../images/projekt_indywidualny_c10.jpg"
import Photo3_11 from "../images/projekt_indywidualny_c11.jpg"
import Photo3_12 from "../images/projekt_indywidualny_c12.jpg"
import Photo3_13 from "../images/projekt_indywidualny_c13.jpg"
import Photo3_14 from "../images/projekt_indywidualny_c14.jpg"

// --- Projekt 4
import Photo4_1 from "../images/projekt_indywidualny_d01.jpg"
import Photo4_2 from "../images/projekt_indywidualny_d02.jpg"
import Photo4_3 from "../images/projekt_indywidualny_d03.jpg"
import Photo4_4 from "../images/projekt_indywidualny_d04.jpg"
import Photo4_5 from "../images/projekt_indywidualny_d05.jpg"
import Photo4_6 from "../images/projekt_indywidualny_d06.jpg"
import Photo4_7 from "../images/projekt_indywidualny_d07.jpg"
import Photo4_8 from "../images/projekt_indywidualny_d08.jpg"
import Photo4_9 from "../images/projekt_indywidualny_d09.jpg"
import Photo4_10 from "../images/projekt_indywidualny_d10.jpg"
import Photo4_11 from "../images/projekt_indywidualny_d11.jpg"
import Photo4_12 from "../images/projekt_indywidualny_d12.jpg"

// --- Projekt 5
import Photo5_1 from "../images/projekt_indywidualny_e01.jpg"
import Photo5_2 from "../images/projekt_indywidualny_e02.jpg"
import Photo5_3 from "../images/projekt_indywidualny_e03.jpg"
import Photo5_4 from "../images/projekt_indywidualny_e04.jpg"
import Photo5_5 from "../images/projekt_indywidualny_e05.jpg"
import Photo5_6 from "../images/projekt_indywidualny_e06.jpg"
import Photo5_7 from "../images/projekt_indywidualny_e07.jpg"
import Photo5_8 from "../images/projekt_indywidualny_e08.jpg"
import Photo5_9 from "../images/projekt_indywidualny_e09.jpg"
import Photo5_10 from "../images/projekt_indywidualny_e10.jpg"
import Photo5_11 from "../images/projekt_indywidualny_e11.jpg"
import Photo5_12 from "../images/projekt_indywidualny_e12.jpg"
import Photo5_13 from "../images/projekt_indywidualny_e13.jpg"
import Photo5_14 from "../images/projekt_indywidualny_e14.jpg"
import Photo5_15 from "../images/projekt_indywidualny_e15.jpg"
import Photo5_16 from "../images/projekt_indywidualny_e16.jpg"
import Photo5_17 from "../images/projekt_indywidualny_e17.jpg"
import Photo5_18 from "../images/projekt_indywidualny_e18.jpg"
import Photo5_19 from "../images/projekt_indywidualny_e19.jpg"
import Photo5_20 from "../images/projekt_indywidualny_e20.jpg"
import Photo5_21 from "../images/projekt_indywidualny_e21.jpg"
import Photo5_22 from "../images/projekt_indywidualny_e22.jpg"


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
  margin: 0 auto 2.5rem auto;
  max-width: 900px;
`

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  margin-top: 3rem;
  text-align: center;
  font-family: 'Cinzel', serif;
  color: #676767;
  text-transform: uppercase;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.5rem;
  margin-top: 1.5rem;
`

const Img = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
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

const Wnetrza_indywidualnePage = () => {
  const projects = [
  {
    title: "",
    photos: [
      Photo1_1, Photo1_2, Photo1_3, Photo1_4, Photo1_5,
      Photo1_6, Photo1_7, Photo1_8, Photo1_9, Photo1_10
    ]
  },
  {
    title: "",
    photos: [
      Photo2_1, Photo2_2, Photo2_3, Photo2_4, Photo2_5,
      Photo2_6, Photo2_7
    ]
  },
  {
    title: "",
    photos: [
      Photo3_1, Photo3_2, Photo3_3, Photo3_4, Photo3_5,
      Photo3_6, Photo3_7, Photo3_8, Photo3_9, Photo3_10,
      Photo3_11, Photo3_12, Photo3_13, Photo3_14
    ]
  },
  {
    title: "",
    photos: [
      Photo4_1, Photo4_2, Photo4_3, Photo4_4, Photo4_5,
      Photo4_6, Photo4_7, Photo4_8, Photo4_9, Photo4_10,
      Photo4_11, Photo4_12
    ]
  },
  {
    title: "",
    photos: [
      Photo5_1, Photo5_2, Photo5_3, Photo5_4, Photo5_5,
      Photo5_6, Photo5_7, Photo5_8, Photo5_9, Photo5_10,
      Photo5_11, Photo5_12, Photo5_13, Photo5_14, Photo5_15,
      Photo5_16, Photo5_17, Photo5_18, Photo5_19, Photo5_20,
      Photo5_21, Photo5_22
    ]
  }
]

  const [currentIndex, setCurrentIndex] = useState(null)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null)

  const openLightbox = (projectIndex, photoIndex) => {
    setCurrentProjectIndex(projectIndex)
    setCurrentIndex(photoIndex)
  }

  const closeLightbox = () => {
    setCurrentProjectIndex(null)
    setCurrentIndex(null)
  }

  const showPrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => {
      const photos = projects[currentProjectIndex].photos
      return prev === 0 ? photos.length - 1 : prev - 1
    })
  }

  const showNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => {
      const photos = projects[currentProjectIndex].photos
      return prev === photos.length - 1 ? 0 : prev + 1
    })
  }

  return (
    <Layout>
      <BG />
      <SEO title="Wnętrza indywidualne" />

      <Container>
        <Title>Wnętrza indywidualne</Title>

        <Description>
          <p>
            Nasze realizacje wnętrz indywidualnych obejmują nowoczesne domy i mieszkania, w których funkcjonalność łączy się z eleganckim designem. Każdy projekt dopasowujemy do potrzeb klienta, tworząc przestrzenie sprzyjające komfortowi i wygodzie. Wykorzystujemy wysokiej jakości materiały i przemyślane rozwiązania, aby wnętrza były estetyczne i praktyczne.
          </p>
        </Description>

        {projects.map((project, projectIndex) => (
          <div key={projectIndex}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <Grid>
              {project.photos.map((photo, photoIndex) => (
                <Img
                  key={photoIndex}
                  src={photo}
                  alt={`${project.title} - zdjęcie ${photoIndex + 1}`}
                  onClick={() => openLightbox(projectIndex, photoIndex)}
                />
              ))}
            </Grid>
          </div>
        ))}

        {currentIndex !== null && currentProjectIndex !== null && (
          <Lightbox onClick={closeLightbox}>
            <NavButton left onClick={showPrev}>‹</NavButton>
            <LightboxImage
              src={projects[currentProjectIndex].photos[currentIndex]}
              alt={`Projekt ${currentProjectIndex + 1} - zdjęcie ${currentIndex + 1}`}
            />
            <NavButton right onClick={showNext}>›</NavButton>
          </Lightbox>
        )}
      </Container>
    </Layout>
  )
}

export default Wnetrza_indywidualnePage
