// 페이지네이션 - 거의 미시작

import React from 'react';
import styled from 'styled-components';

type PaginationProps = {
  totalPage: number, 
  limit: number, 
  page: number, 
  setPage: (page: number) => void // Corrected setPage type
};

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 25px 0;
`;

const Pagination: React.FC<PaginationProps> = ({ totalPage, page, setPage }) => {
  // Generate an array of page numbers from 1 to totalPage
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return ( 
    <StyledPagination>
      {pages.map((pageNumber) => (
        <p key={pageNumber} onClick={() => setPage(pageNumber)}>
          {pageNumber}
        </p>
      ))}
    </StyledPagination>
  );
};

export default Pagination;
