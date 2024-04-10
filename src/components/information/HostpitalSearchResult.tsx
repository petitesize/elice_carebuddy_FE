import React from 'react';
import styled from 'styled-components';
import { LuMapPin } from 'react-icons/lu';
import TableList from '../baseComponent/Table';

const MapLink = styled.a`
  text-decoration: none;
  color: var(--color-green-main);
`;

const DummyHospitalData: (string | JSX.Element)[][] = [
  [
    '서울 용산구',
    '이태원동물병원',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울 용산구',
    '이태원동물병원2',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울 용산구',
    '이태원동물병원3',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울 용산구',
    '이태원동물병원4',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울 용산구',
    '이태원동물병원5',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
];

const HospitalResult: React.FC = () => {
  const headersList = ['위치', '병원명', '전화번호', '지도'];
  return <TableList headers={headersList} data={DummyHospitalData} />;
};

export default HospitalResult;
