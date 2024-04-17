import React, { useState } from 'react';
// import HospitalSearch from '../../components/information/HospitalSearch';
import SearchResult from '../../components/information/HostpitalSearchResult';
import InfoPageContainer from '../../components/information/InfoPageContainer';
import SearchBox from '../../components/information/SearchBox';
import { LuMapPin } from 'react-icons/lu';
import styled from 'styled-components';

const MapLink = styled.a`
  text-decoration: none;
  color: var(--color-green-main);
`;

const Information: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };
  const handleSearchButtonClick = () => {
    // 검색 버튼 클릭 시, 해당 시/도 값과 검색어를 전달
    console.log('선택된 시/도:', selectedCity);
  };

  return (
    <InfoPageContainer>
      <SearchBox
        onCityChange={handleCityChange}
        onSearch={handleSearchButtonClick}
      />
      <SearchResult filterData={DummyHospitalData} />
    </InfoPageContainer>
  );
};

export default Information;
const DummyHospitalData: (string | JSX.Element)[][] = [
  [
    '광주광역시 북구 본촌마을길',
    '이태원동물병원',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '대구광역시 북구',
    '이태원동물병원2',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '경상남도 창녕군 창녕읍',
    '이태원동물병원3',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울특별시 용산구',
    '이태원동물병원4',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울특별시 용산구',
    '이태원동물병원5',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
];
