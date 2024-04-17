import React from 'react';
import styled from 'styled-components';
import { LuMapPin } from 'react-icons/lu';
import TableList from '../baseComponent/Table';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const MapLink = styled.a`
  text-decoration: none;
  color: var(--color-green-main);
`;

const DummyHospitalData: (string | JSX.Element)[][] = [
  [
    '광주광역시 북구 본촌마을길',
    '이태원동물병원',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '대구광역시 북구',
    '이태원동물병원2',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '경상남도 창녕군 창녕읍',
    '이태원동물병원3',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울특별시 용산구',
    '이태원동물병원4',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
  [
    '서울특별시 용산구',
    '이태원동물병원5',
    '02-797-6677',
    <MapLink href="">
      <LuMapPin />
    </MapLink>,
  ],
];

const HospitalResult: React.FC<{ filterData }> = ({ filterData }) => {
  const headersList = ['위치', '병원명', '전화번호', '지도'];

  return <TableList headers={headersList} data={filterData} />;
};

export default HospitalResult;
