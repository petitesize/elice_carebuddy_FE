import React from 'react';
import InfoPageContainer from '../../components/information/InfoPageContainer';
import SearchResult from '../../components/information/PharmacySearchResult';
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
