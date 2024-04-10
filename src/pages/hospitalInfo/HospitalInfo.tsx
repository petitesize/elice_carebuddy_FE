import React from 'react';
// import HospitalSearch from '../../components/information/HospitalSearch';
import SearchResult from '../../components/information/HostpitalSearchResult';
import InfoPageContainer from '../../components/information/InfoPageContainer';
import SearchBox from '../../components/information/SearchBox';

const Information: React.FC = () => {
  return (
    <InfoPageContainer>
      <SearchBox />
      <SearchResult />
    </InfoPageContainer>
  );
};

export default Information;
