import styled from 'styled-components';

// 아직 미완성 입니다
// components 따로 정리 해서 빼기

const Container = styled.div`
`

const Profile = styled.div`
  position: relative;
`;

const SectionWrapper = styled.div`
  margin-top: 70px;

  h4 {
    font: 700 26px/31px 'Pretendard', sans-serif;
    display: flex;
    align-items: center;
    text-align: center;
    color: #6D987A;
    margin-bottom: 30px;
    margin-top: 70px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const PetProfileContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0;
  background: rgba(152, 185, 156, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PetProfileImg = styled.img`
  ${PetProfileContainer} {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 440px;
  height: 40px;
  right: 1086px;
  top: 684px;
  background: #FFFFFF;
  border: 1px solid #CECECE;
`;

const PetSpecies = styled.div`
  position: relative;
  display: flex;
  margin-top: 30px;
`;

const Select = styled.select`
  box-sizing: border-box;
  width: 170px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #CECECE;
  margin-right: 30px;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 180px;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid #CECECE;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 500 18px/21px 'Pretendard';
  margin-right: 30px;
  color: #7D7D7D;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 30px;
`;

const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 70px 0;
`;

export default function PetRegister() {
  const renderSection = (title: string, text: string = "", inputClassName: string = "") => {
    return (
      <SectionWrapper>
        <h4>{title}</h4>
        <p>{text}</p>
        {inputClassName === 'name' && <Input className={inputClassName} type="text" placeholder="이름을 입력해주세요" />}
        {inputClassName === 'age' && <Input className={inputClassName} type="text" placeholder="나이를 입력해주세요" />}
        {inputClassName === '체중' && <Input className={inputClassName} type="text" placeholder="체중을 입력해주세요" />}
      </SectionWrapper>
    );
  };

  return (
    <>
      <div className="main">
        <Container>
          <Profile>
              {renderSection("프로필 등록")}
                <PetProfileContainer>
                  <PetProfileImg src="" alt="프로필 이미지" />
                </PetProfileContainer>
              {renderSection("반려동물 이름", " ", "name")}
              {renderSection("반려동물 종")}
              <PetSpecies>
                {/* 체크박스 넣기 */}
                <Select className="dog">
                  <option value="dog">강아지</option>
                </Select>
                {/* 체크박스 넣기 */}
                <Select className="cat">
                  <option value="cat">고양이</option>
                </Select>
              </PetSpecies>
              {renderSection("반려동물 나이", " ", "age")}
              {renderSection("반려동물 성별")}
              <ButtonGroup>
                <Button className='man'>남자 아이</Button>
                <Button className='woman'>여자 아이</Button>
              </ButtonGroup>
              {renderSection("중성화 여부")}
              <ButtonGroup>
                <Button className='neutered'>중성화 전</Button>
                <Button className='neutered'>중성화 완료</Button>
              </ButtonGroup>
              {renderSection("반려동물 체중", " ", "체중")}
              <CenteredButtonWrapper>
                <Button>완료</Button>
              </CenteredButtonWrapper>
          </Profile>
        </Container>
      </div>
    </>
  );
}