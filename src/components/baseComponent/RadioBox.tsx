import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label``;

const Input = styled.input``;

interface RadioBoxProps {
  labelText: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void; // 수정: 선택 값 변경 핸들러
}

const RadioBox: React.FC<RadioBoxProps> = ({
  labelText,
  onChange,
  value,
  checked,
}) => {
  // 라디오 버튼 변경 핸들러 변경 전: 확인 후 다음 MERGE 때 삭제해주세요!
  // const [selectedOption, setSelectedOption] = useState<string>(''); // 선택된 라디오 버튼 값 상태

  // const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedOption(event.target.value); // 선택된 라디오 버튼 값 업데이트
  // };

  const handleOptionChange = () => {
    onChange(value); // 선택된 값 전달
  };

  return (
    <>
      <Input
        type="radio"
        checked={checked} // 선택 여부에 따라 체크 여부 설정
        onChange={handleOptionChange} // 변경된 핸들러 연결
        name="radioGroup" // 같은 그룹 내에서 중복선택 불가하게 설정
      />
      <Label>{labelText}</Label>
    </>
  );
};

export default RadioBox;
