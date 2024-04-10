import React from 'react';
import styled from 'styled-components';

import Select from '../baseComponent/BasedSelect.tsx';
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

const ImageArea = styled.div`
display: grid;
grid-template-columns: 100px 90px 500px;
grid-template-rows: 30px ;
gap: 10px 20px;
align-items: baseline;

h3{
  background-color: yellow;
  font-size: var(--font-size-md-2);
  font-weight: var();

}

a{
  font-size: var(--font-size-ft-1);
  margin: 0 5px 10px 5px;
  padding: 0 0 2px;
  border-bottom: solid 1px ;
  background-color: green;
}

p{
  width: 600px;
  background-color: aqua;
}
`;

const ImageBox = styled.div`
background-color: red;
grid-column-start: 1;
grid-column-end: 4;
height: 120px;
width: 970px;
`;

const WritingModal: React.FC = () => {
  return (
    <>
      <StyledWritingModal>
        <Select options={SelectDummyWritingGroupOptions} width="200px" />
        <InputBox placeholder="제목을 입력해 주세요" width="970px" padding="5px" />
        <TextArea placeholder="내용을 입력해 주세요" width="970px" height="400px" />
        <ImageArea>
          <h3>첨부 사진</h3>
          <a>사진 등록하기</a>
          <p>개당 업로드 용량: 20MB, 첨부 파일의 경우 사진과 동영상을 합쳐 최대 10개 업로드 가능합니다.(수정 필요)</p>
          <ImageBox>사진 박스</ImageBox>

        </ImageArea>
        <Hr />
      </StyledWritingModal>
    </>
  );
};

export default WritingModal;
