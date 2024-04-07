import styled from 'styled-components';
import { LuMoreHorizontal } from 'react-icons/lu';

const StyledPostControlBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: var(--color-grey-2) solid 1px;
  color: var(--color-grey-2);
  width: 36px;
  height: 36px;
  margin-left: 10px;
`;

const StyledIcon = styled(LuMoreHorizontal)`
  font-size: 24px;
`;

const PostControlBox: React.FC = () => (
  <StyledPostControlBox>
    <StyledIcon />
  </StyledPostControlBox>
);

export default PostControlBox;
