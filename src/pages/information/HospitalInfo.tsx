import React from 'react';
import styled from 'styled-components';
import HospitalSearch from './HospitalSearch';

const HospitalInfoPageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  height: auto;
  align-items: center;
`;

const Information: React.FC = () => {
  return (
    <HospitalInfoPageContainer>
      <HospitalSearch />
    </HospitalInfoPageContainer>
  );
};

export default Information;
