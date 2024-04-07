import React from 'react';
import styled from 'styled-components';
import GroupCard from '../../components/community/GroupCard';

import { tempGroupName, tempGroupIntroduction2 } from '/Users/using/Desktop/front/temp-data-community.tsx'

const Group: React.FC = () => {
  const Tab = styled.div`
  margin: 15px 0;
  
  button { //선택되고 안될 때 상태 관리로 넣어야함

  }
  `;

  const GroupCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  `;


  return (
    <>
      <Tab>
        <button>강아지</button>
        <button>고양이</button>
      </Tab>
      <GroupCardWrapper>
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      <GroupCard name={tempGroupName} introduction={tempGroupIntroduction2} />
      </GroupCardWrapper>
    </>
  );
};

export default Group;
