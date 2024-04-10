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

interface TableProps {
  headers: string[]; // 테이블 헤더를 받는 props
  data: (string | JSX.Element)[][]; // 테이블 데이터를 받는 props
}

const TableList: React.FC<TableProps> = ({ headers, data }) => {
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
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
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
