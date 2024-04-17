import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

// 컴포넌트
import Banner from '../../components/community/Banner';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';
import Select from '../../components/baseComponent/Select';
import WritingModalButton from '../../components/community/WritingModalButton';

// 상수
import CategoryOptions from '../../constants/CategoryOptions'; //select 대분류

// 로직
import GetRandomItems from '../../utils/GetRandomThreeItems';

const ContentContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

const FeedContainer = styled.div`
  width: 70%;
  margin-bottom: 30px;
`;

const FeedOption = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SidePanelContainer = styled.div`
  width: 20%;
`;

const Classification = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 265px;

  p {
    color: var(--color-grey-1);
    font-size: var(--font-size-md-1);
  }

  & > * {
    padding-right: 2px;
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
  _id: string;
  group: string;
  introduction: string;
}

const Home: React.FC = () => {
  const [user] = useRecoilState(userState);

  const [posts, setPosts] = useState<Posts[]>([]);
  const [groups, setGroups] = useState<Groups[]>([]);
  const [groupArray, setGroupArray] = useState<JSX.Element[]>([]); // 그룹 추천용 그룹배열

  const [selectedCategoryValue, setSelectedCategotyValue] = useState(''); // 대분류
  const [selectedGroupCategoryId, setselectedGroupCategoryId] = useState(''); // 소분류(그룹의 id)
  const [selectedGroupOptions, setSelectedGroupOptions] = useState<any[]>([]); // 소분류(select용 배열), 타입 추후 수정

  // 그룹 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}groups`);
        setGroups(response.data.message);
        console.log('그룹 조회 성공');
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

  interface Post {
    deletedAt: string | null;
  }
  // 피드 글 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post`);
        //deletedAt이 null이 아닌 게시물만 필터링
        const filteredDeletedPosts: Post[] = [];
        response.data.message.forEach((post: Post) => {
          if (post.deletedAt === null) {
            filteredDeletedPosts.push(post);
          }
        });

        // 그룹 아이디가 현재 select된 요소와 같은 것만 가지고 오기
        const filteredGroupPosts: Post[] = [];
        filteredDeletedPosts.forEach((post: Post) => {
          console.log('포스트.카테고리아이디._id)', post.categoryId._id);
          if (post.categoryId._id === selectedGroupCategoryId) {
            filteredGroupPosts.push(post);
          }
        });

        setPosts(filteredGroupPosts);
        console.log('피드 글 조회 성공');
      } catch (error) {
        console.error('피드 글 조회 실패', error);
      }
    };
    fetchData();
  }, [selectedCategoryValue, selectedGroupCategoryId]);

  // select -> 현재 선택된 대분류를 받고, 그에 해당되는 그룹을 보여주는 형식
  const handleCategoryChange = (selectedOption: {
    value: string;
    label: string;
  }) => {
    setSelectedCategotyValue(selectedOption.value); // 현재 선택된 대분류를 상태에 업데이트(string값, 0 혹은 1)
    // console.log(selectedOption.value, selectedOption.label); // 디버깅용 - 현재 선택된 대분류 찍어보는 콘솔 -> 추후 삭제

    // 선택된 카테고리에 해당하는 그룹만 필터링하여 업데이트하고 받아오기
    const filteredGroupsOptions = user?.categoryId
      .filter(
        (category) =>
          category.name.toString() === selectedOption.value.toString(),
      )
      .map((category) => ({
        value: category._id,
        label: category.group,
      }));

    setSelectedGroupOptions(filteredGroupsOptions);
  };

  const handleSelectedGroup = (selectedOption: {
    value: string;
    label: string;
  }) => {
    setselectedGroupCategoryId(selectedOption.value); // 현재 선택된 소분류를 상태에 업데이트
    console.log('벨류, 라벨', selectedOption.value, selectedOption.label); // 디버깅용 - 현재 선택된 소분류 찍어보는 콘솔 -> 추후 삭제
  };

  return (
    <>
      <Banner />
      <ContentContainer>
        <FeedContainer>
          <FeedOption>
            <Classification>
              <p>분류:</p>
              <Select
                width="100px"
                borderRadius="30px"
                options={CategoryOptions}
                onChange={handleCategoryChange}
              />
              <Select
                width="120px"
                borderRadius="30px"
                options={selectedGroupOptions}
                onChange={handleSelectedGroup}
              />
            </Classification>
            <WritingButton>
              <p>함께 나누고 싶은 이야기가 있나요?</p>
              <WritingModalButton />
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
