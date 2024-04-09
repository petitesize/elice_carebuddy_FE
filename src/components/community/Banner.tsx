import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import BannerImg from '/src/assets/bannerImg.png';

type GuidelineMessageProps = {
  fontSize?: string;
  color?: string;
  padding?: string;
  fontWeight?: string;
};
const StyledBanner = styled.div`
  position: relative;

  img {
    width: 1024px;
    height: auto;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 5%;
`;

const GuidanceMessage = styled.p<GuidelineMessageProps>`
  font-size: ${(props) => props.fontSize || 'var(--font-size-lg-3)'};
  font-weight: ${(props) => props.fontWeight || 'var(--font-weight-extrabold)'};
  padding: ${(props) => props.padding || '5px 0'};
  color: ${(props) => props && props.color};
`;

const TextRowContainer = styled.div`
  display: flex;
  font-size: var(--font-size-lg-3);
  font-weight: var(--font-weight-extrabold);
  padding: 5px 0;
  align-items: baseline;
`;

const TypewriterContainer = styled.div`
  padding: 0 5px;
`;

const Banner: React.FC = () => {
  return (
    <StyledBanner>
      <img src={BannerImg} alt="배너 이미지" />
      <TextContainer>
        <TextRowContainer>
          <GuidanceMessage
            color="var(--color-green-main)"
            padding="5px 0"
            fontWeight="var(--font-weight-extrabold)"
            fontSize="var(--font-size-lg-3)"
          >
            케어버디
          </GuidanceMessage>
          <GuidanceMessage>와 함께</GuidanceMessage>
        </TextRowContainer>
        <TextRowContainer>
          <GuidanceMessage>사랑하는 나의</GuidanceMessage>
          <TypewriterContainer>
            <Typewriter
              options={{
                strings: ['강아지와', '고양이와', '가족과'],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 200,
              }}
            />
          </TypewriterContainer>
        </TextRowContainer>
        <GuidanceMessage>건강하고 행복한 시간을 보내세요</GuidanceMessage>
        <GuidanceMessage
          color="var(--color-grey-1)"
          padding="10px 0"
          fontWeight="var(--font-weight-regular)"
          fontSize="var(--font-size-md-2)"
        >
          꾸준한 질병 기록으로 아이의 건강을 지키고, 안내멘트~~
        </GuidanceMessage>
      </TextContainer>
    </StyledBanner>
  );
};

export default Banner;
