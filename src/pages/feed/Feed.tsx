import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import WritingButton from '../../components/Community/WritingButton';
import CommunitySearch from '../../components/Community/CommunitySearch';
import FeedBox from '../../components/Community/FeedBox';
import SidePanel from '../../components/Community/SidePanel';
import SuggestedMember from '../../components/Community/SuggestedMember';

// 임시 이미지
import profileImg from '../../assets/temp-profile.png';

// 임시 제목과 내용
const tempTitle = '안녕하세요 제목입니당 당당당';
const tempContent =
  '안녕하세요 더미글입니다. 자신의 강아지를 소개해보세요. 아주 유용할 것 입니다. 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 이 사이트는 다양한 정보를 공유하기에 매우 좋습니다. 어쩌구 저쩌구...더보기';
const tempCommentCount = 1;
const templikeCount = 1;
const tempNickname = '닉네임';
const tempIntroduction = '소개';

const Feed: React.FC = () => {
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
    margin-top:50px;
  `;

  const FeedOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 10px;
  `;

  const FeedContainer = styled.div`
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

  p{
    font-size: 14px;
    margin-bottom: 10px;
    color: #343434;
    padding: 0 0 2px;
    border-bottom: solid 1px #343434; 

  }
  `

  return (
    <>
      <SearchContainer>
        <CommunitySearch />
      </SearchContainer>
      <ContentContainer>
        <FeedContainer>
          <FeedOption>
            <WritingButton buttonText="글 작성하기" />
          </FeedOption>
          <FeedBox
            title={tempTitle}
            content={tempContent}
            src={profileImg}
            nickname={tempNickname}
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempContent}
            src={profileImg}
            nickname={tempNickname}
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempContent}
            src={profileImg}
            nickname={tempNickname}
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
        </FeedContainer>
        <SidePanelContainer>
          <GroupOption>
          <p>그룹 탈퇴</p>
          <p>다른 그룹 둘러보기</p>
          </GroupOption>
          <SidePanel
            name="추천 멤버"
            space1={
              <SuggestedMember
                src={profileImg}
                nickname={tempNickname}
                introduction={tempIntroduction}
              />
            }
            space2={
              <SuggestedMember
                src={profileImg}
                nickname={tempNickname}
                introduction={tempIntroduction}
              />
            }
            space3={
              <SuggestedMember
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

export default Feed;
