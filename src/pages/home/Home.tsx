import React, { useState } from 'react';
import styled from 'styled-components';

// 컴포넌트
import Banner from '../../components/community/Banner';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';
import Select from '../../components/baseComponent/Select';
import Button from '../../components/baseComponent/Button';
import BigModal from '../../components/baseComponent/BigModal';
import PostCreate from '../../components/community/PostCreate';

// 임시 데이터
import posts from '../../../temp-data-posts.json';
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
  />,
];

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
  width: auto;

  p {
    padding-right: 5px;
    color: var(--color-grey-1);
    font-size: var(--font-size-md-1);
  }
`;

// const WritingButton = styled.div`
// display: flex;
// flex-direction: row;
// align-items: center; 

// p {
//   font-size: var( --font-size-ft-1);
//   color: var(--color-grey-1);
//   width: 205px;
// }
// `;

const WritingButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    font-size: var(--font-size-ft-1);
    color: var(--color-grey-1);
    padding: 0 10px;
  }
`;

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

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
              <Select
                width="100px"
                borderRadius="30px"
                options={SelectDummyCategoryOptions}
              />
              <Select
                width="120px"
                borderRadius="30px"
                options={SelectDummyGroupOptions}
              />
            </Classification>
            <WritingButton>
              <p>함께 나누고 싶은 이야기가 있나요?</p>
              <Button variant="primary" shape="round" padding='10px 15px' onClick={handleToggleModal}>글 작성하기</Button>
              {showModal && (
                <BigModal
                  title="글쓰기"
                  value="등록"
                  component={<PostCreate />}
                  onClose={handleToggleModal}
                />
              )}
            </WritingButton>
          </FeedOption>
          {posts.map((post, index) => (
            <FeedBox
              key={index}
              title={post.title}
              content={post.content}
              src={profileImg}
              nickname="냥멍이"
              uploadedDate="2024.03.27"
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
