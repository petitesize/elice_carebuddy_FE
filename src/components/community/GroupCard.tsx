import styled from 'styled-components';
import { LuMessagesSquare } from 'react-icons/lu';

type GroupCardProps = {
  name: string;
  introduction: string;
};



const StyledGroupCard = styled.div`
display: flex;
justify-content: flex-start;
  border: solid 1px var(--color-grey-2);
  border-radius: 5px;
  box-sizing: border-box;
  height: 150px;
  width: 240px;
  margin: 5px;
  margin-bottom: 10px;
  padding: 15px;

  display: flex;
  flex-direction: row;
`;

const IconWrapper = styled.div`
color: var(--color-green-main);
width: 20%;
font-size: 20px;
`;


const GroupName = styled.p`
font-size: ;

`;

const GroupIntroduction = styled.p`
font-size: var(--font-size-ft-1);
font-weight: var(--font-weight-regular);
color: var(--color-grey-1);
margin-top: 10px;
line-height: 1.2;
`;

const GroupInfoWrapper = styled.div`
padding-left: 10px;`


const GroupCard: React.FC<GroupCardProps> = ({ name, introduction }) => (
  <>
    <StyledGroupCard>
      <IconWrapper>
      <LuMessagesSquare />
      </IconWrapper>
      <GroupInfoWrapper>
      <GroupName>{name}</GroupName>
      <GroupIntroduction>{introduction}</GroupIntroduction>
      {/* <p>가입버튼 or 가입되었다는 안내멘트</p> */}
      </GroupInfoWrapper>
    </StyledGroupCard>
  </>
);

export default GroupCard;
