import React from 'react';
import styled from 'styled-components';

const Community: React.FC = () => {
  const All = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: yellow;
  `;

  const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: green;
  `;

  const CommunityContainer = styled.div`
    max-width: 100%;
    width: 100%;
    text-align: center;
  `;

  const GroupOption = styled.div`
  display: flex;
  flex-direction: row;
  `

  const WritingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

  return (
    <>
      <div className="main">
        <CommunityContainer>
          <input type="text"></input>
          <All>
            <Left>
              <WritingButton>
              <p>함께 나누고 싶은 이야기가 있나요?</p>
              <button>글 작성하기</button>
              </WritingButton>
              <h1>글 하나 컴포넌트</h1>
              <h1>페이지 넘김 표시</h1>
            </Left>
            <Right>
              <GroupOption>
              <a>그룹 탈퇴</a>
              <a>다른 그룹 둘러보기</a>
              </GroupOption>
              <h1>그룹멤버 컴포넌트</h1>
            </Right>
          </All>
        </CommunityContainer>
      </div>
    </>
  );
}

export default Community;