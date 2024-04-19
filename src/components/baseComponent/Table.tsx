import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 10% 0;
`;

const Table = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  width: 80%;

  th:first-child {
    border-top-left-radius: 6px;
  }

  th:last-child {
    border-top-right-radius: 6px;
  }

  th,
  td {
    padding: 12px;
    width: 200px;

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

interface TableProps {
  headers: string[]; // 테이블 헤더를 받는 props
  data: { [key: string]: string }[];
}

const TableList: React.FC<TableProps> = ({ headers, data }) => {
  // console.log(data); // 테이블에 렌더링 될 데이터 배열을 확인할 수 있습니다
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {/* props로 받은 헤더 정보를 동적으로 생성 */}
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data && data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* 헤더와 일치하는 속성 값을 직접 사용: 전달할 때, 위치(헤더label): address(속성명) 으로 전달해줘야함*/}
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex}>{row[header]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableList;
