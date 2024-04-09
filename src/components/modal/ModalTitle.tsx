import styled from 'styled-components';

const Title = styled.h4`
  font-size: 26px;
  color: #6D987A;
  margin-bottom: 30px;
`;

const ModalTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default ModalTitle;