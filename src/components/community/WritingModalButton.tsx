import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

// 컴포넌트
import Button from '../../components/baseComponent/Button';
import BigModal from '../../components/baseComponent/BigModal';
import PostCreate from '../../components/community/PostCreate';

const WritingModalButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userId: null,
    categoryId: null,
    title: null,
    content: null,
  });
  const [imageFormData, setImageFormData] = useState(null);

  const handleToggleModal = () => {
    setShowModal(prevState => !prevState);
  };

    const formDataForPOST = {
    ...formData,
    userId: useRecoilValue(userState)?._id,
  };

  const handlePostCreate = async () => {
    try {
      const response = await axios.post(`${API_URL}post`, formDataForPOST);
      const newPostId = response.data.data._id;

      setShowModal(false); // 모달 닫기
      setFormData({ // 데이터 초기화
        userId: null,
        categoryId: null,
        title: null,
        content: null,
      });

      // 이미지 함께 전송
      if (imageFormData) {
        await sendImage(imageFormData, newPostId);
      }
    } catch (error) {
      console.error('글 등록 실패:', error);
    }
  };

  const sendImage = async (imageFormData, postId) => {
    try {
      const response = await axios.post(
        `${API_URL}post/${postId}/postImage`,
        imageFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('이미지 업로드 성공:', response.data);
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  const handleData = formData => {
    setFormData(formData);
    // console.log(formData); 추후 삭제
  };

  const handleImageData = imageFormData => {
    setImageFormData(imageFormData);
    // console.log(imageFormData); 추후 삭제
  };

  return (
    <>
      <Button
        variant="primary"
        shape="round"
        padding="10px 15px"
        onClick={handleToggleModal}
      >
        글 작성하기
      </Button>
      {showModal && (
        <BigModal
          title="글쓰기"
          value="등록"
          component={<PostCreate onSubmit={handleData} onSubmitImage={handleImageData} />}
          onClose={handleToggleModal}
          onHandleClick={handlePostCreate}
        />
      )}
    </>
  );
};

export default WritingModalButton;
