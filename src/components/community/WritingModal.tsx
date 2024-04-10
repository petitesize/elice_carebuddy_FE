import React from 'react';
import styled from 'styled-components';

import Select from '../baseComponent/Select.tsx';
import InputBox from '../baseComponent/InputBox.tsx';
import TextArea from '../baseComponent/TextArea.tsx';
import Hr from '../baseComponent/Hr.tsx';

//임시 select option
import { SelectDummyWritingGroupOptions } from '../../../temp-data-community.tsx';

const StyledWritingModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    margin: 10px;
  }
`;

const StyledInputBox = styled(InputBox)`
  color: red;
`;

const WritingModal: React.FC = () => {
  return (
    <>
      <StyledWritingModal>
        <Select options={SelectDummyWritingGroupOptions} width="200px" />
        <StyledInputBox
          placeholder="제목을 입력해 주세요"
          width="970px"
          padding="5px"
        />
        <TextArea placeholder="내용을 입력해 주세요" margin="0" width="970px" />
        <Hr />
      </StyledWritingModal>
    </>
  );
};

// placeholder?: string;
// width?: string;
// height?: string;
// fontSize?: string;
// padding?: string;
// margin?: string;

export default WritingModal;
