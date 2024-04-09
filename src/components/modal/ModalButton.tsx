import styled from 'styled-components';

// 버튼의 공통 스타일을 정의하는 StyledButton 컴포넌트
const StyledButton = styled.button`
  width: 150px;
  height: 70px;
  border: 1px solid #CECECE;
  font-size: 24px;
  margin: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => (props.backgroundColor === '#FFF' ? '#000' : '#FFF')};
  cursor: pointer;
  
  &:hover {
    opacity: 0.8; // 호버 시 버튼의 투명도 변경
  }
  `;

// 버튼 컴포넌트
const Button = ({ backgroundColor, children }) => {
  return (
    <StyledButton backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;