import React from 'react';
import InfoPageContainer from '../../components/information/InfoPageContainer';
// import HospitalSearch from '../../components/information/HospitalSearch';
import SearchResult from '../../components/information/SearchResult';
import SearchBox from '../../components/information/SearchBox';

const PharmacyInfo: React.FC = () => {
  return (
    <InfoPageContainer>
      <SearchBox />
      <SearchResult />
    </InfoPageContainer>
  );
};

export default PharmacyInfo;
