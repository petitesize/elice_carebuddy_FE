import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LuMessagesSquare } from 'react-icons/lu';
// import { LuCheck } from 'react-icons/lu'; // 나중에 동적 렌더링 시 추가
import Button from '../../components/baseComponent/Button';


type GroupCardProps = {
  name: string;
  introduction: string;
  groupId: string;
};

const StyledGroupCard = styled(Link)`
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
  text-decoration: none;
  color: inherit;
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
  height: 50px;
  display: block;
`;

const GroupInfoWrapper = styled.div`
  padding-left: 10px;
`;

// const MemberCheck = styled.div` // 나중에 동적 렌더링 시 추가
//   display: flex;
//   font-size: var(--font-size-ft-1);
//   color: var(--color-green-main);

//   p {
//     font-size: var(--font-size-ft-1);
//     font-weight: var(--font-weight-regular);
//     color: var(--color-grey-1);
//   }
// `;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const GroupCard: React.FC<GroupCardProps> = ({ name, introduction, groupId }) => (
  <>
    <StyledGroupCard to={`/group/${groupId}`}>
      <IconWrapper>
        <LuMessagesSquare />
      </IconWrapper>
      <GroupInfoWrapper>
        <GroupName>{name}</GroupName>
        <GroupIntroduction>{introduction}</GroupIntroduction>
        <ButtonWrapper>
          <Button
            variant="secondary"
            height="28px"
            padding="4px 10px"
            fontSize="ft-1"
          >
            가입
          </Button>
        </ButtonWrapper>
        {/* <MemberCheck> // 나중에 동적 렌더링 시 추가
        <LuCheck />
        <p>당신은 이 그룹의 멤버입니다</p>
      </MemberCheck> */}
      </GroupInfoWrapper>
    </StyledGroupCard>
  </>
);

export default GroupCard;
