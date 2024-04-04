import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0 auto;
    width: 70%;
    height: 100%;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
`;

interface BodyProps {
  component: React.ComponentType;
}

const Body: React.FC<BodyProps> = ({ component: Component }) => {
  return (
    <Main>
      <Component />
    </Main>
  );
};

export default Body;