import styled from 'styled-components';
import { capsules } from '../data/timeLineData'; // Asegúrate de que la ruta sea correcta
const CapsuleWrapper = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const Capsule = styled.div`
  scroll-snap-align: start;
  height: 50vh;
  padding: 20px;
  box-sizing: border-box;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export default function Timeline() {
  return (
    <CapsuleWrapper>
      {capsules.map((capsule, i) => (
        <Capsule key={i}>
          <Title>{capsule.title}</Title>
          <Content>{capsule.content}</Content>
          {capsule.image && <Image src={capsule.image} alt={capsule.title} />}
          {capsule.link && (
            <a href={capsule.link} target="_blank" rel="noopener noreferrer">
              Ver más
            </a>
          )}
        </Capsule>
      ))}
    </CapsuleWrapper>
  );
}
