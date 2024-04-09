import React from 'react';
import styled from 'styled-components';

import Select from '../baseComponent/BasedSelect';
import InputBox from '../baseComponent/InputBox';
import TextArea from '../baseComponent/TextArea';
import Hr from '../baseComponent/Hr.tsx';

import { SelectDummyWritingGroupOptions } from '../../../temp-data-community.tsx';

const WritingForModal: React.FC = () => {
  const StyledWritingForModal = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <StyledWritingForModal>
        <Select options={SelectDummyWritingGroupOptions} />
        <InputBox placeholder="제목을 입력해 주세요"></InputBox>
        <TextArea placeholder="내용을 입력해 주세요" margin="0"></TextArea>
        <Hr />
      </StyledWritingForModal>
    </>
  );
};

export default WritingForModal;
