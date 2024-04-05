import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import WritingButton from '../../components/community/WritingButton';
import FeedBox from '../../components/community/FeedBox';
import SidePanel from '../../components/community/SidePanel';
import SuggestedCommunity from '../../components/community/SuggestedCommunity';

// 임시 이미지
import homefeedImg from '../../assets/temp-homefeed.png';
import profileImg from '../../assets/temp-profile.png';

// 임시 제목과 내용
const tempTitle = '안녕하세요 제목입니당 당당당';
const tempContent =
  '안녕하세요 더미글입니다. 자신의 강아지를 소개해보세요. 아주 유용할 것 입니다. 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 이 사이트는 다양한 정보를 공유하기에 매우 좋습니다. 어쩌구 저쩌구...더보기';
const tempCommentCount = 1;
const templikeCount = 1;
const tempGroupName = '눈 / 피부 / 귀';
const tempGroupIntroduction =
  '하다 법정만 이윽고 진단은 이유는, 입다 하고 수 1분 혼란스럽은지. ... ';
const tempMemberCount = '120';

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
            content={tempContent}
            src={profileImg}
            nickname="냥멍이"
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempContent}
            src={profileImg}
            nickname="냥멍이"
            uploadedDate="업로드 날짜"
            likeCount={templikeCount}
            commentCount={tempCommentCount}
          />
          <FeedBox
            title={tempTitle}
            content={tempContent}
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
              <SuggestedCommunity
                name={tempGroupName}
                introduction={tempGroupIntroduction}
                memberCount={tempMemberCount}
              />
            }
            space2={
              <SuggestedCommunity
                name={tempGroupName}
                introduction={tempGroupIntroduction}
                memberCount={tempMemberCount}
              />
            }
            space3={
              <SuggestedCommunity
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
