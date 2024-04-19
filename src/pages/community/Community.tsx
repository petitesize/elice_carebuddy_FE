import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  API_URL,
  DOMAIN_URL,
  UPLOADED_IMG_URL,
} from '../../constants/constants';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';
import GetRandomItems from '../../utils/GetRandomThreeItems'; // GetRandomItems 함수 import

// 컴포넌트
import Search from '../../components/baseComponent/Search';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import MemberListSidebar from '../../components/community/MemberListSidebar';
import LinkButton from '../../components/baseComponent/LinkButton';
import WritingModalButton from '../../components/community/WritingModalButton';

// 로직
import sortByLatest from '../../utils/sortByLatest';

// 임시 이미지
import { profileImg } from '../../../temp-data-community';

interface Post {
  title: string;
  content: string;
  userId: {
    nickName: string;
  };
  createdAt: string;
  deletedAt: string | null;
  categoryId: {
    _id: string;
  };
}

interface Member {
  profileImage: string[];
  nickName: string;
  introduce: string;
}

const Community: React.FC = () => {
  const navigate = useNavigate();
  const [user] = useRecoilState(userState);
  const { groupId } = useParams<{ groupId: string }>();
  const [posts, setPosts] = useState<Post[]>([]); // 그룹의 전체 게시글
  const [groupMembers, setGroupMembers] = useState<Member[]>([]); // 현재 그룹에 소속된 멤버
  const [memberArray, setMemberArray] = useState<JSX.Element[]>([]); // 추천 그룹 멤버
  const [filteredSearchPosts, setFilteredSearchPosts] = useState<Post[]>([]); // 검색 결과 저장
  const [searchedPostCount, setSearchedPostCount] = useState(0); // 검색된 게시글 수
  const [searchValue, setSearchValue] = useState<string | null>(null); // 검색어

  // 커뮤니티 멤버 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 전체 유저 조회
        const response = await axios.get(`${API_URL}users`);
        const allMembers: Member[] = response.data.message;
        console.log('posts', posts);

        // 현재 그룹에 속한 멤버만 선택
        const groupMembers = allMembers.filter((member) =>
          member.categoryId.includes(posts[0]?.categoryId?._id),
        );

        // 소속 멤버에서 '유저'를 제외하기(유저 추천을 위한 멤버 조회이기 때문)
        const currentUser = groupMembers.find(
          (member) => member._id === user?._id,
        );
        const filteredGroupMembers = groupMembers.filter(
          (member) => member._id !== currentUser?._id,
        );

        setGroupMembers(filteredGroupMembers);
        console.log('멤버 조회 성공', filteredGroupMembers);
      } catch (error) {
        console.error('멤버 조회 실패', error);
      }
    };

    fetchData();
  }, [posts]);

  // 멤버 관련 로직
  useEffect(() => {
    // 추천 그룹 뽑아서 배열에 넣기
    if (groupMembers.length > 0) {
      const randomMembers = GetRandomItems(groupMembers, 3);
      const updatedMembers = randomMembers.map((member) => (
        <MemberListSidebar
          userId={member._id}
          src={member.profileImage[0]} // 나중에 이미지 URL로 교체
          nickname={member.nickName}
          introduction={member.introduce}
        />
      ));
      setMemberArray(updatedMembers);
    }
  }, []);

  // const imageSrc = `${UPLOADED_IMG_URL}${post?.postImage}`; // 교체시 참고

  // 피드 글 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}post`);
        // deletedAt이 null이 아니고, 카테고리가 같은 데이터만 가지고 오기
        const filteredDeletedPosts: Post[] = [];
        response.data.message.forEach((post: Post) => {
          if (post.deletedAt === null) {
            filteredDeletedPosts.push(post);
          }
        });

        // 게시글 최신순 정렬
        const sortedPosts = sortByLatest(filteredDeletedPosts);
        // 그룹 id가 같은 포스트만 가지고 오기
        const filteredGroupPosts = sortedPosts.filter(
          (post: Post) => post.categoryId?._id === groupId,
        );

        setPosts(filteredGroupPosts);
        console.log('피드 글 조회 성공', filteredGroupPosts);
      } catch (error) {
        console.error('피드 글 조회 실패', error);
      }
    };
    fetchData();
  }, []);

  // 그룹 탈퇴 API
  const handleWithdrawalButton = () => {
    const fetchData = async () => {
      const confirmWithdrawal = window.confirm('정말로 탈퇴하시겠습니까?');

      if (confirmWithdrawal) {
        try {
          const data = {
            categoryId: groupId,
          };

          await axios.put(`${API_URL}users/${user?._id}/withdrawGroup`, data);

          console.log('그룹 탈퇴 성공');
          alert('성공적으로 탈퇴되었습니다.');
          navigate(`/`); // 홈페이지로 리다이렉트
        } catch (error) {
          console.error('그룹 탈퇴 실패', error);
        }
      }
    };
    fetchData();
  };

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim(); // 공백 제거
    setSearchValue(trimmedValue);
    console.log('검색어:', trimmedValue); // 추후 삭제

    if (trimmedValue === '') {
      // 검색어가 없는 경우 전체 글을 보여줌
      setFilteredSearchPosts(posts);
      setSearchedPostCount(posts.length);
    } else {
      // 검색어 입력 시 검색어를 포함한 피드 글 필터링해서 보여줌
      const filteredPosts = posts.filter((post) =>
        post.title.includes(trimmedValue),
      );
      setFilteredSearchPosts(filteredPosts);
      setSearchedPostCount(filteredPosts.length);
    }
  };

  return (
    <>
      <SearchContainer>
        <Search
          width="500px"
          fontSize="var(--font-size-md-2)"
          padding="15px 16px"
          onSearch={(value) => handleSearch(value)}
          placeholder="검색할 게시글의 제목을 입력하세요"
        />
      </SearchContainer>
      <ContentContainer>
        <CommunityFeedContainer>
          <WritingButton>
            <p>함께 나누고 싶은 이야기가 있나요?</p>
            <WritingModalButton />
          </WritingButton>
          {searchedPostCount > 0 ? (
            filteredSearchPosts.map((post) => (
              <FeedBox
                key={post._id}
                title={post.title}
                content={post.content}
                src={profileImg}
                nickname={post?.userId?.nickName}
                uploadedDate={post.createdAt}
              />
            ))
          ) : searchValue === null ? (
            posts.map((post) => (
              <FeedBox
                key={post._id}
                title={post.title}
                content={post.content}
                src={profileImg}
                nickname={post?.userId?.nickName}
                uploadedDate={post.createdAt}
              />
            ))
          ) : (
            <P>검색 결과가 없습니다</P>
          )}
        </CommunityFeedContainer>
        <SidePanelContainer>
          <GroupOption>
            <LinkButton text="그룹 탈퇴" onClick={handleWithdrawalButton} />
            <LinkButton
              text="다른 그룹 둘러보기"
              redirectUrl={`${DOMAIN_URL}group`}
            />
          </GroupOption>
          <SidePanel name="추천 멤버" array={memberArray} />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Community;

const ContentContainer = styled.div`
  padding-top: 80px;
  display: flex;
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

const P = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: var(--font-size-hd-1);
  padding: 80px 0;
  color: var(--color-grey-1);
  font-weight: var(--font-weight-regular);
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
