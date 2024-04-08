import styled from 'styled-components';
import { LuSearch } from 'react-icons/lu';

type InputProps = {
  width?: string;
  fontSize?: string;
  padding?: string;
};

const SearchBox = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--color-white);
  border: 1px solid var(--color-grey-2);
  height: auto;
  border-radius: 30px;
  width: ${({width}) => width && `${width}px;`};
`;

const StyledInput = styled.input<InputProps>`
  border: none;
  border-radius: 30px;
  width: 100%;
  font-size: ${({fontSize}) => fontSize && `${fontSize}px;`};
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

const BasedSearch: React.FC<InputProps> = ({ width, fontSize, padding }) => (
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
