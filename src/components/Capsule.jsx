import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import GalleryModal from './GalleryModal'

const Capsule = ({ title, content, image, link, gallery }) => {
    const [showGallery, setShowGallery] = useState(false)
  
    const handleClick = () => {
      if (gallery) {
        setShowGallery(true)
      }
    }
  
    const Wrapper = link ? CapsuleLink : CapsuleContainer
  
    return (
      <>
        <Wrapper
          href={link || undefined}
          target={link ? '_blank' : undefined}
          rel="noopener noreferrer"
          data-aos="fade-up"
          onClick={gallery ? (e) => { e.preventDefault(); handleClick(); } : undefined}
          hasGallery={!!gallery} // Pasa `hasGallery` como propiedad
        >
          <Content>
            <Title>{title}</Title>
            <Description>{content}</Description>
            {image && <Image src={image} alt={title} />}
          </Content>
          <GalleryIndicator hasGallery={!!gallery}>+</GalleryIndicator> {/* Indicador de galería */}
        </Wrapper>
  
        {showGallery && <GalleryModal images={gallery} onClose={() => setShowGallery(false)} />}
      </>
    )
  }
  
  export default Capsule

  const sharedStyles = css`
  background-color: #F8E4E9;
  border-left: 6px solid #B85C5C;
  border-radius: 20px;
  padding: 40px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  margin: 40px auto;
  transition: transform 0.3s ease;
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative; /* Agregado para colocar el indicador sobre la cápsula */

  /* Estilo condicional para resaltar cápsulas con galería */
  ${({ hasGallery }) =>
    hasGallery &&
    `
    background-color: #F2D0A9;
    border-left: 6px solid #B85C5C;
  `}

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    padding: 30px 16px;
    margin: 20px auto;
  }
`


const CapsuleContainer = styled.div`${sharedStyles}`
const CapsuleLink = styled.a`${sharedStyles}`

const Content = styled.div`text-align: center;`
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2C0E37;
`
const Description = styled.p`
  font-size: 1.2rem;
  color: #3A2E2E;
  margin-bottom: 1.5rem;
`
const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 20px;
  border: 2px solid #F2D0A9;
`
const GalleryIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #B85C5C;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 18px;
  font-weight: bold;
  display: ${({ hasGallery }) => (hasGallery ? "block" : "none")};
`