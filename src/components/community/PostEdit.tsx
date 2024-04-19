// 포스트에딧

import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../constants/constants.tsx';
import { UPLOADED_IMG_URL } from '../../constants/constants.tsx';

// 컴포넌트
import Hr from '../baseComponent/Hr.tsx';
import InputBox from '../baseComponent/InputBox.tsx';
import TextArea from '../baseComponent/TextArea.tsx';
import LinkButton from '../baseComponent/LinkButton.tsx';

interface ModalProps {
  // submit 두 개 다 필수값이므로 나중에 물음표 제거
  onClose?: () => void;
  onSubmit?: (formData: FormData) => void;
  onSubmitImage?: (imageData: ImageFormData) => void;
}

interface FormData {
  //다 필수값이므로 나중에 물음표 제거
  userId?: string | null;
  categoryId?: string | null;
  title?: string | null;
  content?: string | null;
}

interface ImageFormData {
  postImage?: any; // 이미지 타입 뭘로 보내야할지 모르겠음. 나중에 추가
}

const PostEdit: React.FC<ModalProps> = ({ onSubmit, onSubmitImage }) => {
  const { postId } = useParams<{ postId: string }>();

  const [formData, setFormData] = useState<FormData | null>(null); // 입력값 받아서 수정되면 업데이트
  const [imageFormData, setImageFormData] = useState<FormData | null>(null); // 이미지 받아서 수정되면 업데이트
  const [uploadedImg, setUploadedImg] = useState<string | null>(null); // 이미 입력되어있던 이미지, 수정되면 업데이트
  const [defaultCategory, setDefaultCategory] = useState(''); // 선택된 대분류(수정 불가능)
  const [defaultGroupOption, setDefaultGroupOption] = useState(''); // 선택된 소분류(수정 불가능)


  useEffect(() => {
    // 작성된 글 불러오기
    const fetchDefaultPost = async () => {
      try {
        const response = await axios.get(`${API_URL}post/${postId}`);
        console.log('postId', postId);
        const responseData = response.data.message;

        const formData = responseData[0];
        setFormData(formData);

        // default 대분류 넣어주기
        if (formData?.categoryId.name === 0) { 
          setDefaultCategory('강아지');
        } else {
          setDefaultCategory('고양이');
        }

        // default 그룹 값 넣어주기
        setDefaultGroupOption(`${formData?.categoryId.group}`);

        // default 이미지 넣어주기
        setUploadedImg(`${UPLOADED_IMG_URL}${formData?.postImage}`)

        console.log('글 불러오기 성공');
      } catch (error) {
        console.error('글 불러오기 실패', error);
      }
    };

    fetchDefaultPost();
  }, [postId]);

  useEffect(() => {
    // 부모 컴포넌트에서 POST를 하기 위해 formData가 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmit(formData);
  }, [formData]);

  useEffect(() => {
    // 부모 컴포넌트에서 이미지를 POST 하기 위해 imageData 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmitImage(imageFormData);
  }, [imageFormData]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, title: value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, content: value });
  };

  // 이미지 업로드(프론트 코드, 모달 내에서 이미지 업로드하고 보여주기)
  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile); // 프론트에 업로드
        setUploadedImg(imageUrl);

        const ImageFormData = new FormData(); // 백에 업로드
        ImageFormData.append('postImage', selectedFile);
        setImageFormData(ImageFormData);
      }
    };
    input.click();
  };


  return (
    <StyledPostCreate>
      <SelectContainer>
        <DefaultCategory>{defaultCategory}</DefaultCategory>
        <DefaultGroupOption>{defaultGroupOption}</DefaultGroupOption> 
      </SelectContainer>
      <InputBox
        placeholder="제목을 입력해 주세요"
        width="100%"
        padding="5px 10px"
        onChange={handleTitleChange}
        value={formData?.title}
      />
      <TextArea
        placeholder="내용을 입력해 주세요"
        width="100%"
        height="400px"
        padding="10px 10px"
        onChange={handleContentChange}
        value={formData?.content}
      />
      <ImageArea>
        <h3>첨부 사진</h3>
        <LinkButton onClick={handleImageUpload} text="사진 등록하기" />
      </ImageArea>
      <ImageBox hasImage={!!uploadedImg}>
        {uploadedImg && <img src={uploadedImg} alt="Uploaded Image" />}
      </ImageBox>
      <p>사진을 수정하시려면 새로운 사진을 등록해주세요.(사진은 한 장만 업로드 가능합니다)</p>
      <Hr />
    </StyledPostCreate>
  );
};

export default PostEdit;


const StyledPostCreate = styled.div`
  & > * {
    margin: 10px 0 10px 0;
  }
`;

const SelectContainer = styled.div`
  width: 255px;
  display: flex;
  justify-content: flex-start;

  & > * {
    margin-right: 10px;
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

const StyledP = styled.p`
  border-radius: 3px;
  font-size: var(--font-size-ft-1);
  display: flex;
  justify-content: flex-start;
  padding: 8px 8px;
  border: 1px solid var(--color-grey-2);
`;

const DefaultCategory = styled(StyledP)`
  width: auto;
`;

const DefaultGroupOption = styled(StyledP)`
  width: 100px;
`;