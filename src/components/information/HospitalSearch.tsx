/* Search 기능 구현 완료된 이후 삭제 예정 */

import React from 'react';
import styled from 'styled-components';
import BasedSelect from '../baseComponent/BasedSelect';
import Button from '../baseComponent/Button';
import Search from '../baseComponent/Search';

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
`;

const StyledButton = styled(Button)`
  position: absolute;
  padding: 5px 10px;
  right: -75px;
  font-weight: var(--font-weight-normal);
`;

const Title = styled.p`
  white-space: nowrap;
  margin-right: 15px;
  + select {
    margin-right: 15px;
  }
`;

// UI확인용 임시데이터
const SelectDummyCityOptions = [
  { value: 'City', label: '시/도 선택' },
  { value: 'Seoul', label: '서울시' },
  { value: 'Daejoen', label: '대전시' },
];

const SelectDummyProvinceOptions = [
  { value: 'Province', label: '군/구 선택' },
  { value: 'Suji', label: '수지구' },
  { value: 'Yuseong', label: '유성구' },
];

const HospitalSearch: React.FC = () => {
  return (
    <>
      <HospitalSearchContainer>
        <SearchBoxContainer>
          <SelectContainer>
            <Title>지역: </Title>
            <BasedSelect
              width="100%"
              options={SelectDummyCityOptions}
            ></BasedSelect>
            <BasedSelect
              width="100%"
              options={SelectDummyProvinceOptions}
            ></BasedSelect>
          </SelectContainer>
          <SearchContainer>
            <Title>병원명: </Title>
            <Search width="100%" padding="8px 16px" />
            <StyledButton>검색</StyledButton>
          </SearchContainer>
        </SearchBoxContainer>
      </HospitalSearchContainer>
    </>
  );
};

export default HospitalSearch;
