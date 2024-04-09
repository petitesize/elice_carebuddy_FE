import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import Search from '../../components/baseComponent/Search';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import MemberListSidebar from '../../components/community/MemberListSidebar';
import Pagination from '../../components/baseComponent/Pagination';

import Button from '../../components/baseComponent/Button';

// 임시 이미지

const dummyArray = [
  <MemberListSidebar
    src={profileImg}
    nickname={tempNickname}
    introduction={tempIntroduction}
  />,
  <MemberListSidebar
    src={profileImg}
    nickname={tempNickname}
    introduction={tempIntroduction}
  />,
  <MemberListSidebar
    src={profileImg}
    nickname={tempNickname}
    introduction={tempIntroduction}
  />,
];

import {
  profileImg,
  tempCommentCount,
  templikeCount,
  tempNickname,
  tempIntroduction,
} from '../../../temp-data-community';

import posts from '../../../temp-data-posts.json';

const Community: React.FC = () => {
  const ContentContainer = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
  `;

  const CommunityFeedContainer = styled.div`
    width: 70%;
    margin-bottom: 30px;
  `;

  const SidePanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
  `;

  const GroupOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    p {
      font-size: 14px;
      margin-bottom: 10px;
      padding: 0 0 2px;
      border-bottom: solid 1px;
    }
  `;

  const WritingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
      <SearchContainer>
        <Search
          width="500px"
          fontSize="var(--font-size-md-2)"
          padding="15px 16px"
        />
      </SearchContainer>
      <ContentContainer>
        <CommunityFeedContainer>
          <WritingButton>
            <p>함께 나누고 싶은 이야기가 있나요?</p>
            <Button>글 작성하기</Button>
          </WritingButton>
          {posts.map((post, index) => (
            <FeedBox
              key={index}
              title={post.title}
              content={post.content}
              src={profileImg}
              nickname={tempNickname}
              uploadedDate="업로드 날짜"
              likeCount={templikeCount}
              commentCount={tempCommentCount}
            />
          ))}
          {/* <Pagination /> */}
        </CommunityFeedContainer>
        <SidePanelContainer>
          <GroupOption>
            <p>그룹 탈퇴</p>
            <p>다른 그룹 둘러보기</p>
          </GroupOption>
          <SidePanel name="추천 멤버" array={dummyArray} />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Community;
