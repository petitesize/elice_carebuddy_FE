import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ShowAgreementIcon from '../../assets/showAgreementText.png';
import HideAgreementIcon from '../../assets/hideAgreementText.png';

const Container = styled.div`
`;

const Content = styled.div`
  padding: 0 20px 20px 20px;
`
const Title = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md-2); //18
  margin-bottom: 10px;
`;

const Text = styled.a`
  border-bottom: 1px solid var(--color-black);
`;

const TextBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FlexBox = styled.div`
`

const CheckBoxContainer = styled.div`
  margin-bottom: 10px;
`;

const CheckBoxLabel = styled.label`

`;

const CheckBox = styled.input`

`;

const AgreementText = styled.div`
  height: ${({ show }) => (show ? '400px' : '150px')};
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 30px;
  width: 400px;
  line-height: 25px;
  font-size: var(--font-size-ft-1); //14
`;

const ToggleButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding-left: 10px;
`;

// 더미데이터 약관동의
const dummyAgreementText = `제1조(목적)
이 약관은 주식회사 십일리터(사업자등록번호 : 896-81-02510(본점), 290-85-01690(지점), 통신판매업신고번호 : 제2021-서울동대문-2105호, 제2021-서울강동-2095호, 대표자 : 김광현, 박주용)가 운영하는 온라인 웹사이트 케어버디 및 모바일 어플리케이션 케어버디(이하 두 서비스를 통칭하여 “케어버디”이라 함)에서 제공하는 전자상거래 관련 서비스(이하 “서비스”라 한다.)를 이용함에 있어 케어버디과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
PC통신, 스마트폰 앱, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 준용합니다.
제2조(정의)
① “케어버디"이란 주식회사 십일리터가 반려동물 정보 기준으로 상담, 재화 또는 용역(이하 “재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장 및 그에 부수되는 콘텐츠 서비스를 말하며, 아울러 서비스를 운영하는 사업자의 의미로도 사용합니다. ② “이용자"란 “케어버디"에 접속하여 이 약관에 따라 "케어버디"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③ “회원"이라 함은 “케어버디"에 회원등록을 한 자로서, 계속적으로 "케어버디"이 제공하는 서비스를 이용할 수 있는 자를 말합니다. ④ “비회원"이라 함은 회원으로 가입하지 않고 "케어버디"이 제공하는 서비스를 이용하는 자를 말합니다. ⑤ "반려동물서비스제공자"라 함은 수의사 및 반려동물 관련 서비스 업체 등 "케어버디" 내에서 "서비스" 제공을 하는 자를 말합니다.
제3조 (약관 등의 명시와 설명 및 개정)
① "케어버디"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 케어버디의 초기 서비스 화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다. ② "케어버디"은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회, 배송책임, 환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다. ③ "케어버디"은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. ④ "케어버디"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "케어버디"은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다. `;

const AgreementSection: React.FC = () => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [ageAgreed, setAgeAgreed] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showAgreementText, setShowAgreementText] = useState(false);

  useEffect(() => {
    if (ageAgreed && termsAgreed) {
      setAllAgreed(true);
    } else {
      setAllAgreed(false);
    }
  }, [ageAgreed, termsAgreed]);

  const handleAllAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAllAgreed(checked);
    setAgeAgreed(checked);
    setTermsAgreed(checked);
  };

  const handleAgeAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgeAgreed(e.target.checked);
  };

  const handleTermsAgreeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAgreed(e.target.checked);
  };

  const toggleAgreementText = () => {
    setShowAgreementText(!showAgreementText);
  };

  return (
    <Container>
        <Content>
          <Title>약관 동의</Title>
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="allAgree"
            checked={allAgreed}
            onChange={handleAllAgreeChange}
          />
          <CheckBoxLabel htmlFor="allAgree">모두 동의합니다.</CheckBoxLabel>
        </CheckBoxContainer>
        
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="ageAgree"
            checked={ageAgreed}
            onChange={handleAgeAgreeChange}
          />
          <CheckBoxLabel htmlFor="ageAgree">(필수) 만 14세 이상입니다.</CheckBoxLabel>
        </CheckBoxContainer>

        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="termsAgree"
            checked={termsAgreed}
            onChange={handleTermsAgreeChange}
          />
          <CheckBoxLabel htmlFor="termsAgree">
            (필수) 이용 약관 동의
          </CheckBoxLabel>
            <FlexBox>
              <TextBox>
              <Text>전문 보기</Text>
              <ToggleButton onClick={toggleAgreementText}>
                {showAgreementText ? (
                  <img src={HideAgreementIcon} alt="hide agreement" />
                ) : (
                  <img src={ShowAgreementIcon} alt="show agreement" />
                )}
              </ToggleButton>
            </TextBox>
            </FlexBox>

        </CheckBoxContainer>

        <AgreementText show={showAgreementText}>
          {dummyAgreementText}
        </AgreementText>
        </Content>
    </Container>
  );
};

export default AgreementSection;
