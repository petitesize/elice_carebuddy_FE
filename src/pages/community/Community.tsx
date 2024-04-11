import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL, DOMAIN_URL } from '../../constants/constants';

// 컴포넌트
import Search from '../../components/baseComponent/Search';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import MemberListSidebar from '../../components/community/MemberListSidebar';
import Pagination from '../../components/baseComponent/Pagination';
import BigModal from '../../components/baseComponent/BigModal';
import PostCreate from '../../components/community/PostCreate';
import LinkButton from '../../components/baseComponent/LinkButton';

import Button from '../../components/baseComponent/Button';

// 임시 이미지
const memberArray = [
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
`;

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

const Community: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = React.useState<any[]>([]);
  const [members, setMembers] = React.useState<any[]>([]);

  // 추천 멤버 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}users`,
        );
        setMembers(response.data.message);
        console.log('멤버 조회 성공');
        console.log(members)
      } catch (error) {
        console.error('멤버 조회 실패', error);
      }
    };

    fetchData();
  }, []);

  // 피드 글 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post`);
        setPosts(response.data.message);
        console.log('피드 글 조회 성공');
        console.log(response.data.message);
      } catch (error) {
        console.error('피드 글 조회 실패', error);
      }
    };

    fetchData();
  }, []);

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
                component={<PostCreate />}
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
              nickname="냥멍이"
              uploadedDate={post.createdAt}
              likeCount={templikeCount}
              commentCount={tempCommentCount}
            />
          ))}
          {/* <Pagination /> */}
        </CommunityFeedContainer>
        <SidePanelContainer>
          <GroupOption>
            <LinkButton text="그룹 탈퇴" />
            <LinkButton text="다른 그룹 둘러보기" redirectUrl={`${DOMAIN_URL}groups`} />
          </GroupOption>
          <SidePanel name="추천 멤버" array={memberArray} />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Community;
