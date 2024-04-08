import React from 'react';
import styled from 'styled-components';
import { LuMapPin } from 'react-icons/lu';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10% 0;
`;

const DummyHospitalData: Hospital[] = [
  {
    location: '서울 용산구',
    name: '이태원동물병원',
    tel: '02-797-6677',
    map: '',
  },
  {
    location: '서울 용산구',
    name: '이태원동물병원2',
    tel: '02-797-6677',
    map: '',
  },
  {
    location: '서울 용산구',
    name: '이태원동물병원3',
    tel: '02-797-6677',
    map: '',
  },
  {
    location: '서울 용산구',
    name: '이태원동물병원4',
    tel: '02-797-6677',
    map: '',
  },
  {
    location: '서울 용산구',
    name: '이태원동물병원5',
    tel: '02-797-6677',
    map: '',
  },
];

interface Hospital {
  location: string;
  name: string;
  tel: string;
  map: string;
}

interface HospitalSearchProps {
  hospitals: Hospital[];
}

const UserTable: React.FC<HospitalSearchProps> = ({ hospitals }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>위치</th>
          <th>병원명</th>
          <th>전화번호</th>
          <th>지도</th>
        </tr>
      </thead>

      <tbody>
        {hospitals.length > 0 ? (
          hospitals.map(({ location, name, tel, map }) => (
            <tr>
              <td>{location}</td>
              <td>{name}</td>
              <td>{tel}</td>
              <td>
                <MapLink href={map}>
                  <LuMapPin />
                </MapLink>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>데이터가 없습니다.</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const MapLink = styled.a`
  text-decoration: none;
  color: var(--color-green-main);
`;

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;

  th:first-child {
    border-top-left-radius: 6px;
  }

  th:last-child {
    border-top-right-radius: 6px;
  }

  th,
  td {
    padding: 12px;
    min-width: 200px;
    border-bottom: 1px solid var(--color-grey-1);
  }

  th {
    background: var(--color-green-main);
    color: var(--color-white);
    font-weight: var(--font-weight-medium);
  }

  tr:hover {
    background: var(--color-beige-sub);
  }
`;

const HospitalResult: React.FC = () => {
  return (
    <Container>
      <UserTable hospitals={DummyHospitalData}></UserTable>
    </Container>
  );
};

export default HospitalResult;
