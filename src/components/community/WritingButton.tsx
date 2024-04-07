import styled from 'styled-components';

type ButtonTextProps = {
  buttonText: string;
};

const StyledWritingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 
  //여기 css p부분 다시 작성 예정입니다!
  p {
    font-size: var( --font-size-ft-1)
    margin-right: 10px;
    color: var(--color-grey-1);
    width: 220px;
  } 

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
    width: 110px;
    height: 40px;
    padding: 10px 10px;
    background-color: var(--color-green-main);
    color: var(--color-white);
    font-size: var(--font-size-md-1);
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;
//버튼 효과는 나중에 다시 작성 예정!

const WritingButton: React.FC<ButtonTextProps> = ({ buttonText }) => (
  <StyledWritingButton>
    <p>함께 나누고 싶은 이야기가 있나요?</p>
    <button>{buttonText}</button>
  </StyledWritingButton>
);

export default WritingButton;