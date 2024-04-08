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
  /* width: ${({ width }) => width && `${width}px;`}; */
  // >> {width}px 이면 100%나 auto 넣는 경우
  // 100%px , autopx 이렇게 됨 {width} 이렇게 하셔야 사용할 수 있어욥 ㅠㅠ
  // 폰트 사이즈도 마찬가지 폰트사이즈는 우리가 px 단위를 안쓰니까 var() 로 넣을 수 있게 해주셔야할 것 같아욥
  // 저도 이게 좋은 방법인지는 모르겠는데 이렇게는 width가 px값이 아닐 때에는 작동이 아예 안돼요..!
`;

const StyledInput = styled.input<InputProps>`
  border: none;
  border-radius: 30px;
  width: 100%;
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px;`};
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
