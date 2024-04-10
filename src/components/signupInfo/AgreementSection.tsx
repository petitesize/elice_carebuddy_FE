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
  font-size: var(--font-size-md-2); //20
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
  height: ${({ show }) => (show ? '400px' : '200px')};
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 30px;
  width: 400px;
`;

const ToggleButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  padding-left: 10px;
`;

// 더미데이터 약관동의
const dummyAgreementText = `이용약관`;

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
          </CheckBoxLabel>
        </CheckBoxContainer>

        <AgreementText show={showAgreementText}>
          {dummyAgreementText}
        </AgreementText>
        </Content>
    </Container>
  );
};

export default AgreementSection;
