import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { useRecoilValue } from 'recoil';
import { userQuery } from '../../recoil/selectors.ts';

// 컴포넌트
import Button from '../../components/baseComponent/Button';
import BigModal from '../../components/baseComponent/BigModal';
import PostCreate from '../../components/community/PostCreate';

const WritingModalButton = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userId: null,
    categoryId: null,
    title: null,
    content: null,
  });
  const [imageFormData, setImageFormData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 페이지가 로드될 때 쿠키를 확인하여 로그인 여부를 결정
    const checkLoggedInStatus = () => {
      const accessTokenExists = document.cookie
        .split(';')
        .some((cookie) => cookie.trim().startsWith('accessToken='));
      setIsLoggedIn(accessTokenExists);
    };

    checkLoggedInStatus();
  }, []); // 페이지 로드 시 한 번만 실행되도록 빈 배열을 전달

  const handleToggleModal = () => {
    if (!isLoggedIn) {
      window.alert('로그인이 필요한 기능입니다.');
      window.location.reload();
      return;
    }
    setShowModal((prevState) => !prevState);
  };

  const formDataForPOST = {
    ...formData,
    userId: useRecoilValue(userQuery)?._id,
  };

  const handlePostCreate = async () => {
    try {
      const response = await axios.post(`${API_URL}post`, formDataForPOST);
      const createdPostId = response.data.data._id;

      setShowModal(false); // 모달 닫기
      setFormData({
        // 데이터 초기화
        userId: null,
        categoryId: null,
        title: null,
        content: null,
      });

      // 이미지 함께 전송
      if (imageFormData) {
        await sendImage(imageFormData, createdPostId);
      }

      // 페이지 리다이렉트
      navigate(`/post/${createdPostId}`);
    } catch (error) {
      console.error('글 등록 실패:', error);
    }
  };

  const sendImage = async (imageFormData, postId: string) => {
    try {
      const response = await axios.post(
        `${API_URL}post/${postId}/postImage`,
        imageFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('이미지 업로드 성공:', response.data);
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  const handleData = (formData) => {
    setFormData(formData);
  };

  const handleImageData = (imageFormData) => {
    setImageFormData(imageFormData);
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
          component={
            <PostCreate onSubmit={handleData} onSubmitImage={handleImageData} />
          }
          onClose={handleToggleModal}
          onHandleClick={handlePostCreate}
        />
      )}
    </>
  );
};

export default WritingModalButton;
