import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import WritingButton from '../../components/community/WritingButton';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import CommunityListSidebar from '../../components/community/CommunityListSidebar';


// 임시 데이터
import { profileImg, homefeedImg,  tempFeedContent, tempTitle, tempCommentCount, templikeCount, tempGroupName, tempGroupIntroduction, tempMemberCount } from '/Users/using/Desktop/front/temp-data-community.tsx'


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
  `

  const SidePanelContainer = styled.div`
    width: 20%;
  `;

  const Classification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  backgroud-color: red;

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
            <WritingButton buttonText="글 작성하기" />
            </FeedOption>
          <FeedBox
            title={tempTitle}
            content={tempFeedContent}
            src={profileImg}
            nickname="냥멍이"
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempFeedContent}
            src={profileImg}
            nickname="냥멍이"
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempFeedContent}
            src={profileImg}
            nickname="냥멍이"
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
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
