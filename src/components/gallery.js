import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const Card = styled(Link)`
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.huge};

    img {
      transform: scale(1.05);
      opacity: 0.85;
    }

    .overlay {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: all 0.3s ease;
`

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(0,0,0,0.5);
  color: #fff;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const Gallery = ({ projects }) => {
  return (
    <Grid>
      {projects.map(project => (
        <Card to={project.link} key={project.title}>
          <Image src={project.image} alt={project.title} />
          <Overlay className="overlay">{project.title}</Overlay>
        </Card>
      ))}
    </Grid>
  )
}

export default Gallery
