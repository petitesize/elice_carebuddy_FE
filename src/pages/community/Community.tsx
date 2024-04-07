import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import WritingButton from '../../components/community/WritingButton';
import CommunitySearch from '../../components/community/CommunitySearch';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import MemberListSidebar from '../../components/community/MemberListSidebar';
import Pagination from '../../components/community/Pagination';

// 임시 이미지
import {
  tempImg,
  profileImg,
  tempFeedContent,
  tempTitle,
  tempCommentCount,
  templikeCount,
  tempNickname,
  tempIntroduction,
} from '/Users/using/Desktop/front/temp-data-community.tsx';

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
    // background-color: yellow;
    width: 70%;
    margin-bottom: 30px;
  `;

  const SidePanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    // background-color: yellow;
  `;

  const GroupOption = styled.div`
    display: flex;
    flex-direction: row;
    // background-color: red;
    justify-content: space-between;
    width: 100%;

    p {
      font-size: 14px;
      margin-bottom: 10px;
      color: #343434;
      padding: 0 0 2px;
      border-bottom: solid 1px #343434;
    }
  `;

  return (
    <>
      <SearchContainer>
        <CommunitySearch />
      </SearchContainer>
      <ContentContainer>
        <CommunityFeedContainer>
          <WritingButton buttonText="글 작성하기" />
          <FeedBox
            title={tempTitle}
            content={tempFeedContent}
            src={profileImg}
            nickname={tempNickname}
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempFeedContent}
            src={profileImg}
            nickname={tempNickname}
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempFeedContent}
            src={profileImg}
            nickname={tempNickname}
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <Pagination />
        </CommunityFeedContainer>
        <SidePanelContainer>
          <GroupOption>
            <p>그룹 탈퇴</p>
            <p>다른 그룹 둘러보기</p>
          </GroupOption>
          <SidePanel
            name="추천 멤버"
            space1={
              <MemberListSidebar
                src={profileImg}
                nickname={tempNickname}
                introduction={tempIntroduction}
              />
            }
            space2={
              <MemberListSidebar
                src={profileImg}
                nickname={tempNickname}
                introduction={tempIntroduction}
              />
            }
            space3={
              <MemberListSidebar
                src={profileImg}
                nickname={tempNickname}
                introduction={tempIntroduction}
              />
            }
          />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Community;
