import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
`;

const Input = styled.input``;

interface RadioBoxProps {
  labelText: string; // 라벨 텍스트 prop
}

const RadioBox: React.FC<RadioBoxProps> = ({ labelText }) => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // 선택된 라디오 버튼 값 상태

  // 라디오 버튼 변경 핸들러
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value); // 선택된 라디오 버튼 값 업데이트
  };

  return (
    <>
      <Input
        type="radio"
        value="yes"
        checked={selectedOption === 'yes'} // 선택 여부에 따라 체크 여부 설정
        onChange={handleOptionChange} // 변경 핸들러 연결
        name="radioGroup" // 같은 그룹 내에서 중복선택 불가하게 설정
      />
      <Label>{labelText}</Label>
    </>
  );
};

export default RadioBox;
