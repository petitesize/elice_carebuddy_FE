import styled from 'styled-components';
import { LuSearch } from 'react-icons/lu';
import React, { useState } from 'react';

type SearchProps = {
  width?: string;
  fontSize?: string;
  padding?: string;
  onSearch: (value: string) => void;
};

const SearchBox = styled.div<SearchProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-grey-2);
  height: auto;
  border-radius: 30px;
  width: ${({ width }) => width && `${width};`};
`;

const StyledInput = styled.input<SearchProps>`
  border: none;
  border-radius: 30px;
  width: 100%;
  font-size: ${({ fontSize }) => fontSize && `${fontSize};`};
  padding: ${({ padding }) => padding && `${padding};`};

  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(LuSearch)`
  font-size: 24px;
  margin-right: 10px;
  color: var(--color-grey-2);
`;

const Search: React.FC<SearchProps> = ({
  width,
  fontSize,
  padding,
  onSearch,
}) => {
const [searchValue, setSearchValue] = useState('');

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  setSearchValue(e.target.value);
};

const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  onSearch(searchValue);
};


  return (
    <form onSubmit={handleSubmit}>
    <SearchBox width={width}>
      <StyledInput
        type="string"
        placeholder="검색어를 입력하세요"
        value={searchValue}
        fontSize={fontSize}
        padding={padding}
      />
      <StyledIcon />
    </SearchBox>
    </form>
  );
};

export default Search;
