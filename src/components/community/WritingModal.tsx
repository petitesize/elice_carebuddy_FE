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
  width: 970px;

  & > * {
    margin: 10px 0;
    // box-sizing: border-box;
  }
`;

const ImageArea = styled.div`
  display: flex;
  align-items: baseline;
  padding-top: 10px;

  & > * {
    padding-right: 10px;
  }

  h3 {
    font-size: var(--font-size-md-2);
  }

  a {
    font-size: var(--font-size-ft-1);
    margin: 0 5px 10px 5px;
    padding: 0 0 2px;
    border-bottom: solid 1px;
  }

  p {
    width: 600px;
    // background-color: aqua;
    font-size: var(--font-size-sm-1);
  }
`;

const ImageBox = styled.div`
  border: 1px dashed var(--color-grey-2);
  border-radius: 10px;
  height: 120px;
  margin: 0;
`;

const WritingModal: React.FC = () => {
  return (
    <>
      <StyledWritingModal>
        <Select options={SelectDummyWritingGroupOptions} width="200px" />
        <InputBox
          placeholder="제목을 입력해 주세요"
          width="100%"
          padding="5px 10px"
        />
        <TextArea
          placeholder="내용을 입력해 주세요"
          width="100%"
          height="400px"
          padding="5px 10px"
        />
        <ImageArea>
          <h3>첨부 사진</h3>
          <a>사진 등록하기</a>
        </ImageArea>
        <ImageBox>
          <p>
            개당 업로드 용량: 20MB, 첨부 파일의 경우 사진과 동영상을 합쳐 최대
            10개 업로드 가능합니다. - 이 부분 나중에 멘트, 위치 수정!
          </p>
        </ImageBox>
        <Hr />
      </StyledWritingModal>
    </>
  );
};

export default WritingModal;
