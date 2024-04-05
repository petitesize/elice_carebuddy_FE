import styled from 'styled-components';

const StyledPostControlBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: #cecece solid 1px;
  color: #cecece;
  width: 36px;
  height: 36px;

  p {
    font-size: 15px;
    font-weight: 500;
  }
`;

const PostControlBox: React.FC = () => (
  <StyledPostControlBox>
    <p>...</p>
  </StyledPostControlBox>
);

export default PostControlBox;
