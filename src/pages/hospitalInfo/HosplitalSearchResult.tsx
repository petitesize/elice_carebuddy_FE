import React from 'react';
import styled from 'styled-components';
import { Space, Table, Tag, ConfigProvider } from 'antd';
import type { TableProps } from 'antd';
// import { ColumnProps } from 'antd/es/table';
// import { BiBorderRadius } from 'react-icons/bi';
// import Column from 'antd/es/table/Column';
// import TextArea from 'antd/es/input/TextArea';
// 제 부분 아닌데 오류가 나서 일단 주석처리 해두었습니다! - 유신

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 204px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
`;

interface HospitalSearchProps {
  location: string;
  name: string;
  tel: string;
  map: string;
}

const DummyHospitalData: HospitalSearchProps[] = [
  {
    location: '서울 용산구',
    name: '이태원동물병원',
    tel: '02-797-6677',
    map: 'O',
  },
  {
    location: '서울 용산구',
    name: '이태원동물병원',
    tel: '02-797-6677',
    map: 'O',
  },
  {
    location: '서울 용산구',
    name: '이태원동물병원',
    tel: '02-797-6677',
    map: 'O',
  },
];
const columns: TableProps<HospitalSearchProps>['columns'] = [
  {
    title: '위치',
    dataIndex: 'location',
    key: 'location',
    align: 'center',
  },
  {
    title: '병원명',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '전화번호',
    dataIndex: 'tel',
    key: 'tel',
    align: 'center',
  },
  {
    title: '지도',
    dataIndex: 'map',
    key: 'map',
    align: 'center',
  },
];

const theme = {
  token: {
    fontFamily: '',
    colorText: '',
    fontSize: Number('var(--font-size-md-1)'),
    fontWeightStrong: 0,
  },
  components: {
    Table: {
      borderColor: 'var(--color-grey-1)',
      headerBg: 'var(--color-green-main)',
      headerColor: 'var(--color-white)',
      cellPaddingInline: 50,
      headerSplitColor: 'transparent',
    },
  },
};

const HospitalResult: React.FC = () => {
  return (
    <Container>
      <ConfigProvider theme={theme}>
        <Table
          dataSource={DummyHospitalData}
          columns={columns}
          pagination={false}
        ></Table>
      </ConfigProvider>
    </Container>
  );
};

export default HospitalResult;
