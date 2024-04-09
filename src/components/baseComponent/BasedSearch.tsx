import styled from 'styled-components';
import { LuSearch } from 'react-icons/lu';

type BasedSearchProps = {
  width?: string;
  fontSize?: string;
  padding?: string;
};

const SearchBox = styled.div<BasedSearchProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-grey-2);
  height: auto;
  border-radius: 30px;
  width: ${({width}) => width && `${width};`};
`;

const StyledInput = styled.input<BasedSearchProps>`
  border: none;
  border-radius: 30px;
  width: 100%;
  font-size: ${({fontSize}) => fontSize && `${fontSize};`};
  padding: ${({padding}) => padding && `${padding};`};
  
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(LuSearch)`
  font-size: 24px;
  margin-right: 10px;
  color: var(--color-grey-2);
`;

const BasedSearch: React.FC<BasedSearchProps> = ({ width, fontSize, padding }) => (
  <SearchBox width={width}>
    <StyledInput
      type="string"
      placeholder="검색어를 입력하세요"
      fontSize={fontSize}
      padding={padding}
    />
    <StyledIcon />
  </SearchBox>
);

export default BasedSearch;
