import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 70px;
  
  h4 {
    font: 700 26px/31px 'Pretendard', sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6D987A;
    margin-bottom: 30px;
    margin-top: 70px;
  }
  p {
    font-size: 14px;
    color: #555;
  }
`;

const SectionWrapper = ({ title, text, children }) => (
  <Wrapper>
    <h4>{title}</h4>
    <p>{text}</p>
    {children}
  </Wrapper>
);

export default SectionWrapper;