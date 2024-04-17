import React, { useState } from 'react';
import styled from 'styled-components';
import BasedSelect from '../baseComponent/Select';
import Button from '../baseComponent/Button';
import Search from '../baseComponent/Search';
import SearchResult from '../../components/information/HostpitalSearchResult';

// UI확인용 임시데이터
const SelectDummyCityOptions = [
  { value: '', label: '시/도 선택' },
  { value: '서울특별시', label: '서울특별시' },
  { value: '대전시', label: '대전시' },
];

const SelectDummyProvinceOptions = [
  { value: '', label: '군/구 선택' },
  { value: '수지구', label: '수지구' },
  { value: '유성구', label: '유성구' },
];

const SearchBox: React.FC<{
  onCityChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSearch: () => void;
}> = ({ onCityChange, onSearch }) => {
  const isHospital = location.pathname === '/hospital-info';
  // 시/도와 군/구를 위한 상태 정의
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredResults, setFilteredResults] = useState([]); // 필터링된 결과를 상태로 관리합니다.

  return (
    <>
      <HospitalSearchContainer>
        <SearchBoxContainer>
          <SelectContainer>
            <Title>지역: </Title>
            <BasedSelect
              width="100%"
              options={SelectDummyCityOptions}
              onChange={(e) => setSelectedCity(e.target.value)}
            ></BasedSelect>
            <BasedSelect
              width="100%"
              options={SelectDummyProvinceOptions}
              onChange={(e) => setSelectedProvince(e.target.value)}
            ></BasedSelect>
          </SelectContainer>
          <SearchContainer>
            <Title>{isHospital ? '병원' : '약국'}명: </Title>
            <Search
              width="100%"
              padding="8px 16px"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            {/* <StyledButton>검색</StyledButton> */}
            <Button
              variant={'primary'}
              shape={'square'}
              padding={'8px 16px'}
              children={'검색'}
              // onClick={handleSearchButtonClick}
            />
          </SearchContainer>
        </SearchBoxContainer>
      </HospitalSearchContainer>
    </>
  );
};

export default SearchBox;

const HospitalSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 204px;
  border: 1px solid #cecece;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

const SearchBoxContainer = styled.div`
  width: 50%;
  position: relative;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  + div {
    margin-top: 20px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  > button {
    position: absolute;
    right: -90px;
    font-weight: var(--font-weight-normal);
  }
`;

const Title = styled.p`
  white-space: nowrap;
  margin-right: 15px;
  + select {
    margin-right: 15px;
  }
`;
