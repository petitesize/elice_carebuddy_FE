import styled from 'styled-components';
import { LuMessagesSquare } from 'react-icons/lu';
import { LuCheck } from 'react-icons/lu';

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
  font-size:;
`;

const GroupIntroduction = styled.p`
  font-size: var(--font-size-ft-1);
  font-weight: var(--font-weight-regular);
  color: var(--color-grey-1);
  margin: 12px 0;
  line-height: 1.2;
`;

const GroupInfoWrapper = styled.div`
  padding-left: 10px;
`;

const Button = styled.button`
  padding: 3px 14px;
  border: 1px solid var(--color-grey-1);
  background-color: var(--color-white);
`;
const MemberCheck = styled.div`
  display: flex;
  font-size: var(--font-size-ft-1);
  color: var(--color-green-main);

  p {
    font-size: var(--font-size-ft-1);
    font-weight: var(--font-weight-regular);
    color: var(--color-grey-1);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GroupCard: React.FC<GroupCardProps> = ({ name, introduction }) => (
  <>
    <StyledGroupCard>
      <IconWrapper>
        <LuMessagesSquare />
      </IconWrapper>
      <GroupInfoWrapper>
        <GroupName>{name}</GroupName>
        <GroupIntroduction>{introduction}</GroupIntroduction>
        <ButtonWrapper>
          <Button>가입</Button>
        </ButtonWrapper>
        {/* <MemberCheck>
        <LuCheck />
        <p>당신은 이 그룹의 멤버입니다</p>
      </MemberCheck> */}
      </GroupInfoWrapper>
    </StyledGroupCard>
  </>
);

export default GroupCard;
