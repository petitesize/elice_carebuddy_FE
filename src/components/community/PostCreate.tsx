import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '../baseComponent/Select.tsx';
import InputBox from '../baseComponent/InputBox.tsx';
import TextArea from '../baseComponent/TextArea.tsx';
import Hr from '../baseComponent/Hr.tsx';
import LinkButton from '../baseComponent/LinkButton.tsx';

//임시 select option
import { SelectDummyWritingGroupOptions } from '../../../temp-data-community.tsx';

const StyledPostCreate = styled.div`

  & > * {
    margin: 10px 0 10px 0;
  }
`;

const ImageArea = styled.div`
  display: flex;

  & > * {
    //padding-right: 10px;
  }

  h3 {
    font-size: var(--font-size-md-2);
    margin-right: 10px;
  }
`;

const ImageBox = styled.div<{ hasImage: boolean }>`
  padding: 10px;
  border: 1px dashed var(--color-grey-2);
  border-radius: 10px;
  height: 140px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  position: relative;

  img {
    max-width: 100%;
    max-height: 80%;
    object-fit: cover;
    position: absolute;
  }
`;

const Text = styled.p`
`

const PostCreate: React.FC = () => {
  const [uploadedImg, setUploadedImg] = useState('');

  const SendPostData = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
      setContent(e.target.value);
    }
  }


  

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setUploadedImg(imageUrl);
      }
    };
    input.click();
  };

  return (
      <StyledPostCreate>
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
          padding="10px 10px"
        />
        <ImageArea>
          <h3>첨부 사진</h3>
          <LinkButton onClick={handleImageUpload} text="사진 등록하기" />
        </ImageArea>
        <ImageBox hasImage={!!uploadedImg}>
          {uploadedImg && <img src={uploadedImg} alt="Uploaded" />}
        </ImageBox>
        <Text>
          개당 업로드 용량: 20MB, 첨부 파일의 경우 사진과 동영상을 합쳐 최대
          10개 업로드 가능합니다. - 이 부분 나중에 멘트수정!
        </Text>
        <Hr />
      </StyledPostCreate>
  );
};

export default PostCreate;
