import React from 'react';
import GlobalStyle from '../../components/GlobalStyle';
import styled from 'styled-components';

const Group: React.FC = () => {
  const GroupContainer = styled.div``;

  return (
    <>
      <div className="main">
        <GlobalStyle />
        <GroupContainer>
          <h1>강아지 고양이 선택 탭</h1>
          <h1>그룹 컴포넌트</h1>
        </GroupContainer>
      </div>
    </>
  );
}

export default Group;