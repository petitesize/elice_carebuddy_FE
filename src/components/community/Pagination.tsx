// 완전히 미완성 컴포넌트입니다!

import styled from 'styled-components';

// type PaginationProps = {

// };

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 25px 0;
`;

const Pagination: React.FC = () => (
  <StyledPagination>
    <p>1, 2, 3, 4</p>
  </StyledPagination>
);

export default Pagination;
