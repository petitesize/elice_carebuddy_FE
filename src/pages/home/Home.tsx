import GlobalStyle from '../../components/global/GlobalStyle';
import styled from 'styled-components';
import WritingButton from '../../components/Community/WritingButton';
import FeedBox from '../../components/Community/FeedBox';
import CommunitySuggestor from '../../components/Community/CommunitySuggestor';
import CommunitySearch from '../..//components/Community/CommunitySearch'
import homefeedImg from '../../assets/temp-homefeed.png'
import profileImg from '../../assets/temp-profile.png';

export default function Home() {
  const Container = styled.div`
    max-width: 100%;
    width: 100%;
  `;

  const Banner = styled.img`
    width: 100%;
    height: auto;
  `;

  const HomeOption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px
  `;

  const ContentContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `

  const Left = styled.div`
  // background-color: yellow;
  width: 70%;
  margin-bottom: 30px;
  `

  const Right = styled.div`
  background-color: green;
  width: 25%;
  `

  const Select = styled.select`
  border: 1px solid #CECECE;
  border-radius: 30px;
  height: 36px;
  padding: 10px;
  color: #7d7d7d;
  font-size: 12px;
  `

  const P = styled.p`
  color: #7d7d7d;
  font-size: 14px;
  `

  const Classification = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

  const tempTitle = '안녕하세요 제목입니당 당당당'
  const tempContent = '안녕하세요 더미글입니다. 자신의 강아지를 소개해보세요. 아주 유용할 것 입니다. 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 이 사이트는 다양한 정보를 공유하기에 매우 좋습니다. 어쩌구 저쩌구...더보기'

  return (
    <>
      <div className="main">
        <Container>
            <Banner src={homefeedImg} alt="강아지가 뛰어노는 배너 이미지" />
            <CommunitySearch/>
          <ContentContainer>
            <Left>
              <HomeOption>
                <Classification>
                  <P>분류:</P>
                  <Select className="category">
                    <option value="category">카테고리</option>
                  </Select>
                  <Select className="group">
                    <option value="group">그룹</option>
                  </Select>
                </Classification>
                <WritingButton buttonText="글 작성하기" />
              </HomeOption>
              <div className="feed-list">
                <FeedBox title={tempTitle} content={tempContent} src={profileImg} nickname='냥멍이' uploadedDate="업로드 날짜" />
              </div>
            </Left>
            <Right>
              <CommunitySuggestor/>
            </Right>
          </ContentContainer>
        </Container>
      </div>
    </>
  );
}