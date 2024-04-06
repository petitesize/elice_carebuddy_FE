import styled from 'styled-components';

const StyledPostControlBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: var(--color-grey-2) solid 1px;
  color: var(--color-grey-2);
  width: 36px;
  height: 36px;

  p {
    font-size: var(--font-size-hd-1);
    font-weight: var(--font-weight-bold);
  }
`;

const PostControlBox: React.FC = () => (
  <StyledPostControlBox>
    <p>...</p>
  </StyledPostControlBox>
);

export default PostControlBox;
