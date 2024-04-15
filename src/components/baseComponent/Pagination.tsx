// 페이지네이션 - 거의 미시작
// 나중에 children 받지 않는 것으로 결론 난다면 self closing tag로 작성하는 것이 가독성이 좋음

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
