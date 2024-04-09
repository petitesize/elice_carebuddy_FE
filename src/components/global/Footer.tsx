import React from 'react';
import styled from 'styled-components';
import imgSrc from './../../assets/carebuddyLogo.png'

// styled-components를 사용하여 footer 스타일 정의
const FooterContainer = styled.footer`
  background-color: #EEEDE5;
  color: #343434;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
`;

const Container = styled.div`
  width: 1024px;
`

const Logo = styled.img`
  cursor: pointer;
  width: 120px;
  height: 60px;
`;

const Font = styled.p`
  margin: 0;
  font-size: 14px;
  display: flex;
  line-height: 18px;
`

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
      <Logo src={imgSrc} />
        <Font>
        © 2024. carebuddy reserved. <br />
        주식회사 엘리스트랙ㅣ대표자 엘리스ㅣ123-45-67891 [사업자정보확인]ㅣ2024-서울-00123ㅣ서울특별시 성동구 아차산로17길 48, 성수낙낙 2층 <br />
        02-123-1234 ㅣ contact@carebuddy.krㅣ 카카오톡 채널ㅣ인스타그램 | MON-FRI 10:00-17:00 | 이용약관 ㅣ 개인정보처리방침
        </Font>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
