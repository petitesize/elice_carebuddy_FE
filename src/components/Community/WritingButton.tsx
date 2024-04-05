import styled from 'styled-components';

type ButtonTextProps = {
  buttonText: string;
};

const StyledWritingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;  
  p {
    margin-right: 10px;
    font-size: 16px;
    color: #7d7d7d;
    font-size: 13px;
  }

  button {
    height: 36px;
    padding: 10px 20px;
    background-color: #6D987A;
    color: #ffffff;
    font-size: 15px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

const WritingButton: React.FC<ButtonTextProps> = ({ buttonText }) => (
  <StyledWritingButton>
    <p>함께 나누고 싶은 이야기가 있나요?</p>
    <button>{buttonText}</button>
  </StyledWritingButton>
);

export default WritingButton;