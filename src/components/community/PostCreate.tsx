import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userQuery } from '../../recoil/selectors.ts';

// 컴포넌트
import Hr from '../baseComponent/Hr.tsx';
import CommunitySelect from '../baseComponent/CommunitySelect.tsx';
import InputBox from '../baseComponent/InputBox.tsx';
import TextArea from '../baseComponent/TextArea.tsx';
import LinkButton from '../baseComponent/LinkButton.tsx';
import CategoryOptions from '../../constants/CategoryOptions.tsx';

interface ModalProps {
  onClose?: () => void;
  onSubmit: (formData: FormData) => void;
  onSubmitImage: (imageData: ImageFormData) => void;
}

interface FormData {
  //다 필수값이므로 나중에 물음표 제거
  userId?: string | null;
  categoryId?: string | null;
  title?: string | null;
  content?: string | null;
}

interface ImageFormData {
  postImage?: any;
}

interface Category {
  _id: string | null;
  group: string | null;
  name: string | null;
}

const PostCreate: React.FC<ModalProps> = ({ onSubmit, onSubmitImage }) => {
  // const [user] = useRecoilState(userState);
  const [user] = useRecoilState(userQuery);
  const [selectedCategoryValue, setSelectedCategotyValue] = useState(''); // 선택된 대분류
  const [selectedGroupOptions, setSelectedGroupOptions] = useState<any[]>([]); // 선택된 소분류. 타입 추후 수정.
  const [uploadedImg, setUploadedImg] = useState<string | null>(null); // 업로드된 이미지

  const [formData, setFormData] = useState<FormData>({
    userId: null,
    categoryId: null,
    title: null,
    content: null,
  });

  const [imageFormData, setImageFormData] = useState<ImageFormData>({
    postImage: null,
  });

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

  useEffect(() => {
    // 부모 컴포넌트에서 POST를 하기 위해 formData가 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmit(formData);
  }, [formData]);

  useEffect(() => {
    // 부모 컴포넌트에서 이미지를 POST 하기 위해 imageData 변경될 때마다 부모 컴포넌트로 데이터를 전송
    onSubmitImage(imageFormData);
  }, [imageFormData]);

  // select -> 현재 선택된 대분류를 받고, 그에 해당되는 그룹을 보여주는 형식
  const handleCategoryChange = (selectedOption: {
    value: string;
    label: string;
  }) => {
    setSelectedCategotyValue(selectedOption.value); // 현재 선택된 대분류를 상태에 업데이트(0 혹은 1)

    // 선택된 카테고리에 해당하는 그룹만 필터링하여 업데이트하고 받아오기
    const filteredGroupsOptions = user?.categoryId
      .filter(
        (category: Category) =>
          category.name?.toString() === selectedOption.value,
      )
      .map((category) => ({
        value: category._id,
        label: category.group,
      }));

    filteredGroupsOptions?.unshift({
      //대분류를 바꾸면 그룹 선택하도록 동작
      value: 'select',
      label: '그룹 선택',
    });

    setSelectedGroupOptions(filteredGroupsOptions);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, title: value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, content: value });
  };

  const handleSelectedGroup = (selectedOption: {
    // 현재 선택된 카테고리id를 post용 카테고리 id로 만들기
    value: string;
    label: string;
  }) => {
    const categoryId = selectedOption.value;
    setFormData({ ...formData, categoryId: categoryId });
  };

  return (
    <StyledPostCreate>
      <SelectContainer>
        <CommunitySelect
          options={CategoryOptions}
          width="100px"
          onChange={handleCategoryChange}
        />
        <CommunitySelect
          width="100px"
          options={selectedGroupOptions}
          onChange={handleSelectedGroup}
        />
      </SelectContainer>
      <InputBox
        placeholder="제목을 입력해 주세요"
        width="100%"
        padding="5px 10px"
        onChange={handleTitleChange}
      />
      <TextArea
        placeholder="내용을 입력해 주세요"
        width="100%"
        height="400px"
        padding="10px 10px"
        onChange={handleContentChange}
      />
      <ImageArea>
        <h3>첨부 사진</h3>
        <LinkButton onClick={handleImageUpload} text="사진 등록하기" />
      </ImageArea>
      <ImageBox hasImage={!!uploadedImg}>
        {uploadedImg && <img src={uploadedImg} alt="Uploaded" />}
      </ImageBox>
      <p>사진은 한 장만 업로드 가능합니다.</p>
      <Hr />
    </StyledPostCreate>
  );
};

export default PostCreate;

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

const ImageBox = styled.div`
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
