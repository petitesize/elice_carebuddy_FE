import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';
import Banner from '../../components/community/Banner';

import BasedSelect from '../../components/baseComponent/BasedSelect';
import BasedButton from '../../components/global/UIButton';

import posts from '../../../temp-data-posts.json';

// 임시 데이터
import {
  profileImg,
  tempCommentCount,
  templikeCount,
  tempGroupName,
  tempGroupIntroduction,
  tempMemberCount,
  SelectDummyCategoryOptions,
  SelectDummyGroupOptions,
} from '../../../temp-data-community';

const dummyArray = [
  <CommunityListSidebar
name={tempGroupName}
introduction={tempGroupIntroduction}
memberCount={tempMemberCount}
/>,
  <CommunityListSidebar
name={tempGroupName}
introduction={tempGroupIntroduction}
memberCount={tempMemberCount}
/>,
  <CommunityListSidebar
name={tempGroupName}
introduction={tempGroupIntroduction}
memberCount={tempMemberCount}
/>
];

const Home: React.FC = () => {
  const BannerWrapper = styled.div``;

  const ContentContainer = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const FeedContainer = styled.div`
    width: 70%;
    margin-bottom: 30px;
  `;

  const FeedOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const SidePanelContainer = styled.div`
    width: 20%;
  `;

  const Classification = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    p {
      padding-right: 5px;
      color: var(--color-grey-1);
      font-size: var(--font-size-md-1);
    }
  `;

  const WritingButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 

  p {
    font-size: var( --font-size-ft-1);
    color: var(--color-grey-1);
    width: 205px;
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
    `;

  return (
    <>
      <BannerWrapper>
        <Banner />
      </BannerWrapper>
      <ContentContainer>
        <FeedContainer>
          <FeedOption>
            <Classification>
              <p>분류:</p>
              <BasedSelect
                width="100px"
                borderRadius="30px"
                options={SelectDummyCategoryOptions}
              ></BasedSelect>
              <BasedSelect
                width="120px"
                borderRadius="30px"
                options={SelectDummyGroupOptions}
              ></BasedSelect>
            </Classification>
            <WritingButton>
              <p>함께 나누고 싶은 이야기가 있나요?</p>
              <BasedButton>글 작성하기</BasedButton>
            </WritingButton>
          </FeedOption>
          {posts.map((post) => (
            <FeedBox
              title={post.title}
              content={post.content}
              src={profileImg}
              nickname="닉네임"
              uploadedDate="업로드 날짜"
              likeCount={templikeCount}
              commentCount={tempCommentCount}
            />
          ))}
        </FeedContainer>
        <SidePanelContainer>
          <SidePanel name="추천 커뮤니티" array={dummyArray} />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
