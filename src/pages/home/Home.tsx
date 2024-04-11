import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

// 컴포넌트
import Banner from '../../components/community/Banner';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';
import Select from '../../components/baseComponent/Select';
import Button from '../../components/baseComponent/Button';
import BigModal from '../../components/baseComponent/BigModal';
import PostCreate from '../../components/community/PostCreate';

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

interface Posts {
  title: string;
  content: string;
  createdAt: string;
}

interface Groups {
  group: string;
}

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [groups, setGroups] = useState<any[]>([]);

  // 추천 그룹 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}groups`);
        setGroups(response.data.message);
        // console.log('그룹즈 배열 출력' + groups);
        // console.log('그룹즈 배열 출력[0]' + groups[0]);
        // console.log('groups' + JSON.stringify(groups, null, 2));
        // console.log('그룹즈 이름', groups[0].group);

        console.log('그룹 조회 성공');
        console.log(response.data.message);
        console.log(groups[0].group);
      } catch (error) {
        console.error('그룹 조회 실패', error);
      }
    };

    fetchData();
  }, []);

  const randomNumber = Math.floor(Math.random() * groups.length);

  const dummyArray = [
    <CommunityListSidebar
      name={groups[0].group}
      introduction="그룹 introdunction 아직"
      memberCount={tempMemberCount}
    />,
    <CommunityListSidebar
      name={groups[0].group}
      introduction={tempGroupIntroduction}
      memberCount={tempMemberCount}
    />,
    <CommunityListSidebar
      name={groups[0].group}
      introduction={tempGroupIntroduction}
      memberCount={tempMemberCount}
    />,
  ];

  // 피드 글 불러오기
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
          </FeedOption>
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
        </FeedContainer>
        <SidePanelContainer>
          <SidePanel name="추천 커뮤니티" array={dummyArray} />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
