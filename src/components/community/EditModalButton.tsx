import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

// 컴포넌트
import ActionButton from '../../components/baseComponent/ActionButton';
import BigModal from '../../components/baseComponent/BigModal';
import PostEdit from '../../components/community/PostEdit';

const EditModalButton = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>(); // 현재 포스트 _id값

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    userId: null,
    categoryId: null,
    title: null,
    content: null,
  });
  const [imageFormData, setImageFormData] = useState(null);

  const formDataForPOST = {
    ...formData,
    userId: useRecoilValue(userState)?._id,
  };

  const handlePostEdit = async () => { 
    try {
      const response = await axios.put(`${API_URL}post/${postId}`, formDataForPOST);
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

      window.location.reload(); // 글 수정 후 새로고침
      console.log('글 수정 성공')
    } catch (error) {
      console.error('글 수정 실패:', error);
    }
  };

  const sendImage = async (imageFormData, postId: string) => {
    try {
      await axios.post(
        `${API_URL}post/${postId}/postImage`,
        imageFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log('이미지 업로드 성공');
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  };

  const handleData = (formData) => {
    setFormData(formData);
  };

  const handleImageData = (imageFormData) => {
    setImageFormData(imageFormData);
    // console.log('이미지 폼 데이터', imageFormData); // 추후 삭제
  };

  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleDeleteButton = () => {
    // 알럿창, 확인 누를 시 글 삭제 요청
    const fetchData = async () => {
      const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');

      if (confirmDelete) {
        try {
          const response = await axios.put(`${API_URL}post/${postId}/w`);
          console.log('글 삭제 성공', response.data.message);
          navigate(`/group/${post?.categoryId}`); // 커뮤니티 페이지로 리다이렉트 -> 이전 화면으로 리다이렉트할 수도 있음
        } catch (error) {
          console.error('글 삭제 실패', error);
        }
      }
    };
    fetchData();
  };

  return (
    <>
      <ActionButton
        border="default"
        direction="horizontal"
        onEdit={handleToggleModal}
        onDelete={handleDeleteButton}
      />
      {showModal && (
        <BigModal
          title="글 수정하기"
          value="수정"
          component={
            <PostEdit onSubmit={handleData} onSubmitImage={handleImageData} />
          }
          onClose={handleToggleModal}
          onHandleClick={handlePostEdit}
        />
      )}
    </>
  );
};

export default EditModalButton;
