import React from 'react';
import styled from 'styled-components';
import Capsule from './Capsule';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
`;

const CapsuleWrapper = styled.div`
  scroll-snap-align: start;
  width: 100%;
  max-width: 500px;
  padding: 20px;
`;

const CapsuleContainer = ({ capsules }) => {
  return (
    <Container>
      {capsules.map((capsule, idx) => (
        <CapsuleWrapper key={idx}>
          <Capsule {...capsule} />
        </CapsuleWrapper>
      ))}
    </Container>
  );
};

export default CapsuleContainer;
