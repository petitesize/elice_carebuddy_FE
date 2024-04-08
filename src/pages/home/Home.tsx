import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';

import posts from '../../../temp-data-posts.json';

// 임시 데이터
import {
  profileImg,
  homefeedImg,
  tempCommentCount,
  templikeCount,
  tempGroupName,
  tempGroupIntroduction,
  tempMemberCount,
} from '../../../temp-data-community';

type SelectProps = {
  width?: string;
};

const Home: React.FC = () => {
  const Banner = styled.img`
    width: 100%;
    height: auto;
  `;

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
    width: 100%;

    p {
      color: var(--color-grey-1);
      font-size: var(--font-size-md-1);
    }
  `;

  const Select = styled.select<SelectProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid var(--color-grey-2);
    border-radius: 30px;
    height: auto;
    padding: 10px;
    color: var(--color-grey-1);
    width: ${(props) => (props.width ? props.width : '100px')};
    margin: 0 5px 0 5px;
  `;

  const SelectCategory = styled(Select)`
    width: 100px;
  `;

  const SelectGroup = styled(Select)`
    width: 120px;
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
      <Banner src={homefeedImg} alt="강아지가 뛰어노는 배너 이미지" />
      <ContentContainer>
        <FeedContainer>
          <FeedOption>
            <Classification>
              <p>분류:</p>
              <SelectCategory>
                <option value="category">카테고리</option>
              </SelectCategory>
              <SelectGroup>
                <option value="group">그룹</option>
              </SelectGroup>
            </Classification>
            <WritingButton>
              <p>함께 나누고 싶은 이야기가 있나요?</p>
              <button>글 작성하기</button> {/* 나중에 컴포넌트로 교체 */}
            </WritingButton>
          </FeedOption>
          {posts.map((post) => (
            <FeedBox
              title={post.title}
              content={post.content}
              src={profileImg}
              nickname="닉네임"
              uploadedDate="업로드 날짜"
              likeCount={templikeCount}
              commentCount={tempCommentCount}
            />
          ))}
        </FeedContainer>
        <SidePanelContainer>
          <SidePanel
            name="추천 커뮤니티"
            space1={
              <CommunityListSidebar
                name={tempGroupName}
                introduction={tempGroupIntroduction}
                memberCount={tempMemberCount}
              />
            }
            space2={
              <CommunityListSidebar
                name={tempGroupName}
                introduction={tempGroupIntroduction}
                memberCount={tempMemberCount}
              />
            }
            space3={
              <CommunityListSidebar
                name={tempGroupName}
                introduction={tempGroupIntroduction}
                memberCount={tempMemberCount}
              />
            }
          />
        </SidePanelContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
