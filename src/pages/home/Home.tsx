import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

// 컴포넌트
import Banner from '../../components/community/Banner';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';
import Select from '../../components/baseComponent/Select';
import Button from '../../components/baseComponent/Button';
import BigModal from '../../components/baseComponent/BigModal';
import PostCreate from '../../components/community/PostCreate';

//로직
import SendPostData from '../../services/SendPostData';
import GetRandomItems from '../../utils/GetRandomThreeItems';

import { tempCommentCount, templikeCount } from '../../../temp-data-community';

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
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  userId: {
    profileImage: string[];
    nickName: string;
  };
}

interface Groups {
  group: {
    _id: string;
    group: string;
    introduction: string;
  };
  introduction: string;
}

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState<Posts[]>([]);
  const [groups, setGroups] = useState<Groups[]>([]);
  const [groupArray, setGroupArray] = useState<JSX.Element[]>([]);
  const [user] = useRecoilState(userState);


  console.log('user', user);
  // console.log('categories', user?.categories);

  // 그룹 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}groups`);
        setGroups(response.data.message);
        console.log('그룹 조회 성공', response.data.message);
      } catch (error) {
        console.error('그룹 조회 실패', error);
      }
    };
    fetchData();
  }, []);

  // 그룹 관련 로직
  useEffect(() => {
    // 추천 그룹 뽑아서 배열에 넣기
    if (groups.length > 0) {
      const randomGroups = GetRandomItems(groups, 3);
      const updatedGroups = randomGroups.map((group, index) => (
        <CommunityListSidebar
          key={index}
          groupId={group?._id}
          name={group?.group}
          introduction={group?.introduction}
        />
      ));
      setGroupArray(updatedGroups);
    }
  }, [groups]);

  const CategoryOptions = [
    { value: '0', label: '강아지' },
    { value: '1', label: '고양이' },
  ];

  const SelectCategoriesOptions = [];
  // 가입된 그룹 id 불러오기
  user?.categoryId?.forEach((category) => {
    SelectCategoriesOptions.push({value: category.group, label: category.group });
  });

  const handleToggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  // 피드 글 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post`);
        //deletedAt이 null이 아닌 게시물만 필터링
        const filteredPosts = response.data.message.filter((post:Post) => post.deletedAt === null);
        setPosts(filteredPosts);
        console.log('피드 글 조회 성공', response.data.message);
      } catch (error) {
        console.error('피드 글 조회 실패', error);
      }
    };
    fetchData();
  }, []);

  //모달 - 글 등록하는 API

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
                options={CategoryOptions} 
              />
              <Select
                width="120px"
                borderRadius="30px"
                options={SelectCategoriesOptions}
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
                  // onClick={SendPostData()}
                />
              )}
            </WritingButton>
          </FeedOption>
          {posts.map((post, index) => (
            <FeedBox
              postId={post?._id}
              key={index}
              title={post?.title}
              content={post?.content}
              profile={post?.userId?.profileImage[0]}
              nickname={post?.userId?.nickName}
              uploadedDate={post?.createdAt}
              likeCount={templikeCount}
              commentCount={tempCommentCount}
            />
          ))}
        </FeedContainer>
        <SidePanelContainer>
          <SidePanel name="추천 커뮤니티" array={groupArray} />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
