import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GroupCard from '../../components/community/GroupCard';
import { API_URL } from '../../constants/constants';

const Tab = styled.div`
  margin: 20px 0 15px 0;
  width: 21%;
  display: flex;
  justify-content: space-between;
`;

const GroupCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`;

const Button = styled.button<{ isActive: boolean }>`
  padding: 12px 12px;
  font-size: var(--font-size-md-2);
  width: 100px;
  background-color: ${(props) =>
    props.isActive ? 'var(--color-green-main)' : 'var(--color-white)'};
  border: 1px solid
    ${(props) =>
      props.isActive ? 'var(--color-green-main)' : 'var(--color-grey-1)'};
  color: ${(props) =>
    props.isActive ? 'var(--color-white)' : 'var(--color-black)'};
`;

interface Group {
  name: number;
  group: string;
  introduction: string;
}

const Group: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [clickedTab, setClickedTab] = useState(0);

  // 그룹 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}groups`);
        setGroups(response.data.message);
        console.log(response.data.message);
        console.log('전체 그룹 조회 성공');
      } catch (error) {
        console.error('게시글 조회 실패', error);
      }
    };

    fetchData();
  }, []);

  const filteredGroups = groups.filter((group) => group.name === clickedTab);

  return (
    <>
      <Tab>
        <Button isActive={clickedTab === 0} onClick={() => setClickedTab(0)}>
          강아지
        </Button>
        <Button isActive={clickedTab === 1} onClick={() => setClickedTab(1)}>
          고양이
        </Button>
      </Tab>
      <GroupCardWrapper>
        {filteredGroups.map((group, index) => (
          <GroupCard
            key={index}
            groupId={group._id}
            name={group.group}
            introduction={group.introduction}
          />
        ))}
      </GroupCardWrapper>
    </>
  );
};

export default Group;
