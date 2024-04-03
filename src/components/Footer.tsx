import React from 'react';
import styled from 'styled-components';

// styled-components를 사용하여 footer 스타일 정의
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
