import React from 'react';
import styled from 'styled-components';
import BasedSearch from '../../components/BasedSearch';
import BasedSelect from '../../components/BasedSelect';
import BasedButton from '../../components/BasedButton';

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
const StyledSearch = styled(BasedSearch)`
  margin-left: 15px;
  width: 100%;
`;

const StyledSelect = styled(BasedSelect)`
  margin-left: 15px;
  width: 100%;
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
  justify-content: center;
  position: relative;
`;

const StyledButton = styled(BasedButton)`
  position: absolute;
  padding: 5px 10px;
  right: -75px;
`;

const Title = styled.p`
  white-space: nowrap;
`;

const Search = () => (
  <StyledSearch type="string" placeholder="검색어를 입력하세요"></StyledSearch>
);

interface SelectProps {
  className?: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ className, options, ...rest }) => (
  <StyledSelect {...rest}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </StyledSelect>
);

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
            <Select options={SelectDummyCityOptions}></Select>
            <Select options={SelectDummyProvinceOptions}></Select>
          </SelectContainer>
          <SearchContainer>
            <Title>병원명: </Title>
            <Search />
            <StyledButton>검색</StyledButton>
          </SearchContainer>
        </SearchBoxContainer>
      </HospitalSearchContainer>
    </>
  );
};

export default HospitalSearch;
