import React from 'react';
import styled from 'styled-components';

// 컴포넌트
import LikeAndCommentCount from '../../components/community/LikeAndCommentCount';
import PostControlBox from '../../components/community/PostControlBox';
import Comment from '../../components/community/Comment';
import Pagination from '../../components/community/Pagination';
import CommentWritingBox from '../../components/community/CommentWritingBox';



// 아이콘
import { LuThumbsUp } from 'react-icons/lu';

// 임시 이미지
import tempImg from '../../assets/temp-img.png';

// 임시 데이터
const tempContent = `하다 법정만 이윽고 진단은 이유는, 입다 하고 수 1분 혼란스럽은지. 가슴은 하루와 이 아파트밖에 전 10개월 생산자를, 필요로 용공이 있다. 월별에서 시리즈로 서류에게 것 김치는 보고다, 몇 취객까지 우리는 대하다. "지대에 고장에 인, 위하는, 걸다" 첫 나타날 데 법적은 요구하여 미끄러지라. 모이어요 자세에서 삼월, 공구의 연도에 큼직한 충분하다 통신이다 중진은 쏠리다 없다.
가입으로 등 통일적을 역습을 사회에서 국민 계속 때에서 쓰다 모으자. "쇠보다 야단치는 약속의 개별을 특별하다 신봉하며 이 마크하다" 조사를 나오아야 개선한다 제시하기 협의는 고교의 42개 종목을 거의, 되다. 이미 중요성은 당기기 정부거나 데 약간을 그렇다. 비디오를 공조는 동원하여 교포를 콜레스테롤을 경제와 급성장한다 대할, 참관하여 지켜보다. 있다가 감독으로, 음란물의 폭넓고 던지게, 있은 방침에 적극인 물려받다. 선교회가 먼저 안을 이가 되다. 더 하나를 급커브에서 라면에 

가입으로 등 통일적을 역습을 사회에서 국민 계속 때에서 쓰다 모으자. "쇠보다 야단치는 약속의 개별을 특별하다 신봉하며 이 마크하다" 조사를 나오아야 개선한다 제시하기 협의는 고교의 42개 종목을 거의, 되다. 이미 중요성은 당기기 정부거나 데 약간을 그렇다. 비디오를 공조는 동원하여 교포를 콜레스테롤을 경제와 급성장한다 대할, 참관하여 지켜보다. 있다가 감독으로, 음란물의 폭넓고 던지게, 있은 방침에   적극인 물려받다. 선교회가 먼저 안을 이가 되다. 더 하나를 급커브에서 라면에 원작은 차지로서 주전에서 본격적도 않다.
`;
const tempTitle = '가입으로 등 통일적을 역습을';
const tempDate = '2024.03.27 23:10';

const tempLikeCount = 7;

const tempCommentNickname = 'NANA';
const tempComment = ` 육이구와 개사 한 따라서 가지는 정하여 안정에서 유해가 없다. "발표의 자체가 발전하는, 역성들 초기를 문전을 않은 출산에 체질화되다" 내 최고의 버틸 건전성은 들어가고 내놓는다 기대를 뒤돌 내어 막대하다. 시대가 설익다 정착되다 정책에 한 단체는 효과를 통장의 임신에 모으다. 한편 없는 시계에, 열띠는 오락, 있는 농도는 이곳을 힘드다. 편은 위하다 백화점에서 계열에 산다. 것 것 이래 우리말은 의견이 명칭이 부처의 같다. "소속이는 대통령과 51개 당연히 기능공까지 부처를 지난해는 살핀 음향으로, 전쟁을 가지라" 하다 팔다 지정의 준비와 있다.`;


const POST: React.FC = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    width: 100%;
  `;

  const LeftContainer = styled.div`
    font-size: var(--font-size-lg-1);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 25%;

    p {
      color: vat(--color-grey-1);
    }
  `;
  const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
  `;

  const PostTopArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 5px 0;
  `;

  const PostInformation = styled.div`
  `;

  const PostTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 10px 0;
  `;

  const PostUploadedDate = styled.p`
  font-size: 12px;
  font-weight: var(--font-weight-regular);
  color: var(--color-grey-1);
  `;


  const PostOption = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const PostContentArea = styled.div`
  margin: 10px 0 20px 0;
  font-size: 16px;
  line-height: 1.2rem;
  color: #343434;

  img {
    margin: 10px 0 20px 0;
  }
  `;

  const Likes = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  color: #7d7d7d;

  p {
    margin: 0 5px;
  }
  `

  const Hr = styled.hr`
    border-top: 1px solid #7d7d7d;
    width: 100%;
  `;

  const CommentArea = styled.div``;

  return (
    <>
      <Container>
        <LeftContainer>
          <p>글 목록 보기</p>
          <p>프로필 영역</p>
        </LeftContainer>
        <PostContainer>
          <PostTopArea>
            <PostInformation>
              <PostTitle>{tempTitle}</PostTitle>
              <PostUploadedDate>{tempDate}</PostUploadedDate>
            </PostInformation>
            <PostOption>
              <LikeAndCommentCount likeCount={1} commentCount={2} />
              <PostControlBox />
            </PostOption>
          </PostTopArea>
          <PostContentArea>
            <p>{tempContent}</p>
            <img src={tempImg} alt="이미지" />
            <Likes>
            <LuThumbsUp />
            <p>추천해요 {tempLikeCount}</p>
            </Likes>
          </PostContentArea>
          <Hr></Hr>
          <CommentArea>
            <CommentWritingBox text={tempComment} nickname={tempCommentNickname}></CommentWritingBox>
            <Comment text={tempComment} nickname={tempCommentNickname} profileImg={tempImg} date={tempDate}></Comment>
            <Pagination />
          </CommentArea>
        </PostContainer>
      </Container>
    </>
  );
};

export default POST;
