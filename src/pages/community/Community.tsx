import React, { useState } from 'react';
import styled from 'styled-components';

// 컴포넌트
import Search from '../../components/baseComponent/Search';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import MemberListSidebar from '../../components/community/MemberListSidebar';
import Pagination from '../../components/baseComponent/Pagination';
import BigModal from '../../components/baseComponent/BigModal';
import WritingModal from '../../components/community/WritingModal';

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

const ContentContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const CommunityFeedContainer = styled.div`
  padding-bottom: 30px;
  width: 70%;
`;

const SidePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const GroupOption = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: var(--font-size-ft-1);
    margin-bottom: 10px;
    padding: 0 0 2px 0;
    border-bottom: solid 1px;
  }
`;

const WritingButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    font-size: var(--font-size-ft-1);
    color: var(--color-grey-1);
    width: 205px;
  }
`;

const Community: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

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
            <Button
              variant="primary"
              shape="round"
              padding="10px 15px"
              onClick={handleToggleModal}
            >
              글 작성하기
            </Button>
            {showModal && (
              <BigModal
                title="글쓰기"
                value="등록"
                component={<WritingModal />}
                onClose={handleToggleModal}
              />
            )}
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
