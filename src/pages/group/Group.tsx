import React from 'react';
import styled from 'styled-components';
import GroupCard from '../../components/community/GroupCard';

import { tempGroupName, tempGroupIntroduction2 } from '../../../temp-data-community'

const Group: React.FC = () => {
  const Tab = styled.div`
  margin: 20px 0 15px 0;
  width: 21%;
  display: flex;
  justify-content: space-between;
  
  button { //선택되고 안될 때 상태 관리로 넣어야함
    padding: 10px 12px;
    font-size: var(--font-size-md-2);
    width: 100px;
    background-color: var(--color-white);
    border: 1px solid var(--color-grey-1);
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
