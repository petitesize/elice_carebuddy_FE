// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { LuMessagesSquare } from 'react-icons/lu';
// import { LuCheck } from 'react-icons/lu';
// import Button from '../../components/baseComponent/Button';
// import { useRecoilState } from 'recoil';
// import { userState } from '../../recoil/atoms';

// type GroupCardProps = {
//   name: string;
//   introduction: string;
//   groupId: string;
//   onClick: () => void;
// };

// const StyledGroupCard = styled(Link)`
//   display: flex;
//   justify-content: flex-start;
//   border: solid 1px var(--color-grey-2);
//   border-radius: 5px;
//   box-sizing: border-box;
//   height: 150px;
//   width: 240px;
//   margin: 5px;
//   margin-bottom: 10px;
//   padding: 15px;
//   text-decoration: none;
//   color: inherit;
// `;

// const IconWrapper = styled.div`
//   color: var(--color-green-main);
//   width: 20%;
//   font-size: 20px;
// `;

// const GroupIntroduction = styled.p`
//   font-size: var(--font-size-ft-1);
//   font-weight: var(--font-weight-regular);
//   color: var(--color-grey-1);
//   margin: 12px 0;
//   line-height: 1.2;
//   height: 50px;
//   display: block;
// `;

// const GroupInfoWrapper = styled.div`
//   padding-left: 10px;
// `;

// const MemberCheck = styled.div`
//   display: flex;
//   font-size: var(--font-size-ft-1);
//   color: var(--color-green-main);
//   padding-top: 10px;

//   p {
//     font-size: var(--font-size-ft-1);
//     font-weight: var(--font-weight-regular);
//     color: var(--color-grey-1);
//   }
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const GroupCard: React.FC<GroupCardProps> = ({
//   name,
//   introduction,
//   groupId,
//   onClick,
// }) => {
//   const [user] = useRecoilState(userState);

//   let isMember = false;
//   let groupIdArray = user?.categoryId.map((category) => category._id) ?? [];
//   isMember = groupIdArray?.includes(groupId);

//   return (
//     <StyledGroupCard to={`/group/${groupId}`}>
//       <IconWrapper>
//         <LuMessagesSquare />
//       </IconWrapper>
//       <GroupInfoWrapper>
//         <p>{name}</p>
//         <GroupIntroduction>{introduction}</GroupIntroduction>
//         {isMember ? (
//           <MemberCheck>
//             <LuCheck />
//             <p>이미 가입된 그룹입니다</p>
//           </MemberCheck>
//         ) : (
//           <ButtonWrapper>
//             <Button
//               variant="secondary"
//               height="28px"
//               padding="4px 10px"
//               fontSize="ft-1"
//               onClick={onClick}
//             >
//               가입
//             </Button>
//           </ButtonWrapper> 
//         )}
//       </GroupInfoWrapper>
//     </StyledGroupCard>
//   );
// };

// export default GroupCard;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LuMessagesSquare } from 'react-icons/lu';
import { LuCheck } from 'react-icons/lu';
import Button from '../../components/baseComponent/Button';
import { useRecoilState } from 'recoil';
import { userState } from '../../recoil/atoms';

type GroupCardProps = {
  name: string;
  introduction: string;
  groupId: string;
  onClick: () => void;
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

const MemberCheck = styled.div`
  display: flex;
  font-size: var(--font-size-ft-1);
  color: var(--color-green-main);
  padding-top: 10px;

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

const GroupCard: React.FC<GroupCardProps> = ({
  name,
  introduction,
  groupId,
  onClick,
}) => {
  const [user] = useRecoilState(userState);

  let isMember = false;
  let groupIdArray = user?.categoryId.map((category) => category._id) ?? [];
  isMember = groupIdArray?.includes(groupId);

  return (
    <StyledGroupCard to={`/group/${groupId}`}>
      <IconWrapper>
        <LuMessagesSquare />
      </IconWrapper>
      <GroupInfoWrapper>
        <p>{name}</p>
        <GroupIntroduction>{introduction}</GroupIntroduction>
        {isMember ? (
          <MemberCheck>
            <LuCheck />
            <p>이미 가입된 그룹입니다</p>
          </MemberCheck>
        ) : (
          <ButtonWrapper>
            <Button
              variant="secondary"
              height="28px"
              padding="4px 10px"
              fontSize="ft-1"
              onClick={(event) => {
                event.preventDefault();
                onClick();
              }}
            >
              가입
            </Button>
          </ButtonWrapper> 
        )}
      </GroupInfoWrapper>
    </StyledGroupCard>
  );
};

export default GroupCard;
