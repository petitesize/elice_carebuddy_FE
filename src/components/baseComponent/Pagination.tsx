// 페이지네이션 - 거의 미시작

import React from 'react';
import styled from 'styled-components';

type PaginationProps = {
  totalPage: number, 
  limit: number, 
  page: number, 
  setPage: (page: number) => void
};

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 25px 0;
`;

const Pagination: React.FC<PaginationProps> = ({ totalPage, page, setPage }) => {
  return ( 
    <StyledPagination>
    </StyledPagination>
  );
};

export default Pagination;
