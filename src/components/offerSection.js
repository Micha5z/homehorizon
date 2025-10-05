import React from "react"
import styled from "styled-components"

import komercja from "../images/komercja.jpg"
import indywidualne from "../images/indywidualne.jpg"
import lazienka from "../images/lazienki.jpg"
import salon from "../images/salon.jpg"

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1.5rem 1rem;
  text-align: center;
  
`

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 200;
  margin-bottom: 2rem;
  font-family: 'Cinzel', serif;
  letter-spacing: 9px;
  color: #676767;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`

const Card = styled.a`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`

const Overlay = styled.div`
position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* centruje overlay w poziomie i pionie */
  background: rgba(0, 0, 0, 0.5); /* przyciemnione tło tylko pod napisem */
  color: #fff;
  font-weight: bold;
  text-align: center;
  width: 100%;  
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem; /* odstęp wokół tekstu */
  //border-radius: 4px; /* opcjonalnie lekko zaokrąglone rogi */
  white-space: nowrap; /* nie łam tekstu */
`

const Offer = () => {
  const projects = [
    { src: komercja, title: "Wnętrza Komercyjne", link: "/wnetrza-komercyjne" },
    { src: indywidualne, title: "Wnętrza Indywidualne", link: "/wnetrza-indywidualne" },
    { src: lazienka, title: "Łazienki", link: "/lazienki" },
    { src: salon, title: "Domy Inteligentne", link: "/domy-inteligentne" },
  ]

  return (
    <Container>
      <Title>PROJEKTY</Title>
      <Grid>
        {projects.map((p, index) => (
          <Card href={p.link} key={index}>
            <Image src={p.src} alt={p.title} />
            <Overlay className="overlay">{p.title}</Overlay>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default Offer
