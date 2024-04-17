import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL, DOMAIN_URL } from '../../constants/constants';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

// 컴포넌트
import Search from '../../components/baseComponent/Search';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import MemberListSidebar from '../../components/community/MemberListSidebar';
import LinkButton from '../../components/baseComponent/LinkButton';
import WritingModalButton from '../../components/community/WritingModalButton';

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
  tempNickname,
  tempIntroduction,
} from '../../../temp-data-community';

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

interface Member {}

const Community: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();
  const [user] = useRecoilState(userState);
  const [posts, setPosts] = useState<Post[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [filteredSearchPosts, setFilteredSearchPosts] = useState<Post[]>([]); // 검색 결과 저장
  const [searchedPostCount, setSearchedPostCount] = useState(0);

  // 추천 멤버 조회 API -> 커뮤니티 추천 멤버로 로직 변경 필요
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}users`);
        setMembers(response.data.message);
        console.log('멤버 조회 성공', response.data.message);
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
        // deletedAt이 null이 아니고, 카테고리가 같은 데이터만 가지고 오기
        const filteredDeletedPosts: Post[] = [];
        response.data.message.forEach((post: Post) => {
          if (post.deletedAt === null) {
            filteredDeletedPosts.push(post);
          }
        });

        // 그룹 id가 같은 포스트만 가지고 오기
        const filteredGroupPosts = filteredDeletedPosts.filter(
          (post: Post) => post.categoryId._id === groupId,
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

  const handleSearch = (searchValue: string) => {
    console.log('검색어:', searchValue);
    if (searchValue.trim() === '') {
      // 검색어가 없는 경우 전체 글을 보여줌(띄어쓰기만 있는 경우 포함)
      setFilteredSearchPosts(posts);
      setSearchedPostCount(posts.length);
    } else {
      // 검색어 입력 시 검색어를 포함한 피드 글 필터링해서 보여줌
      const filteredPosts = posts.filter((post) =>
        post.title.includes(searchValue),
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
`

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
