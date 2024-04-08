import styled from 'styled-components';
import { LuSearch } from 'react-icons/lu';

type InputProps = {
  width?: number;
  fontSize?: number;
};

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--color-white);
  border: 1px solid var(--color-grey-2);
  height: auto;
  border-radius: 30px;
  margin-top: 30px;
`;

const StyledInput = styled.input<InputProps>`
  border: none;
  border-radius: 30px;
  height: 35px;
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize}px` : 'var(--font-size-md-2)'};
  padding: 5px 0 5px 15px;
  width: ${(props) => (props.width ? `${props.width}px` : '500px')};

  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(LuSearch)`
  font-size: 24px;
  margin-right: 10px;
  color: var(--color-grey-2);
`;

const Search: React.FC<InputProps> = ({ width, fontSize }) => (
  <SearchBox>
    <StyledInput
      type="string"
      placeholder="검색어를 입력하세요"
      width={width}
      fontSize={fontSize}
    />
    <StyledIcon />
  </SearchBox>
);

export default Search;
