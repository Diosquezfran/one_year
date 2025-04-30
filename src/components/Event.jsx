import React from 'react'
import styled from 'styled-components'

// Estilos para cada evento en la línea de tiempo
const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  position: relative;
  width: 90%; /* Más adaptable */

  // Estilo zigzag solo en pantallas grandes
  &:nth-child(odd) {
    left: -220px;
  }

  &:nth-child(even) {
    left: 220px;
  }

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #333;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    left: 0 !important;
    width: 100%;
    padding: 0 10px;
  }
`;

const EventContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const EventTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const EventDate = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #777;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Event = ({ title, date, description }) => {
  return (
    <EventContainer data-aos="fade-up" data-aos-duration="1000">
      <EventContent>
        <EventTitle>{title}</EventTitle>
        <EventDate>{date}</EventDate>
        <EventDescription>{description}</EventDescription>
      </EventContent>
    </EventContainer>
  );
};

export default Event;
