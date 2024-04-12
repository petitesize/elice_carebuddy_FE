import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0;
  background: rgba(152, 185, 156, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PetProfileImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const PetProfileContainer = ({ src, alt }) => (
  <Container>
    <PetProfileImg src={src} alt={alt} />
  </Container>
);

export default PetProfileContainer;