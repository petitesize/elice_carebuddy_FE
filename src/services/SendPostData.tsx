// createPost post 등록 로직
// 네이밍은 (메서드명)(역할)

import axios from 'axios';
import { API_URL } from '../constants/constants';

interface PostData {
  userId: string;
  categoryId: string;
  title: string;
  content: string;
}

const SendPostData = async (postData: PostData): Promise<void> => {
  try {
    const response = await axios.post(`${API_URL}post`, postData);
    console.log('글 등록 성공');
    return response.data;
  } catch (error) {
    console.error('글 등록 실패', error);
    throw error;
  }
};

export default SendPostData;
