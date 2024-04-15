import axios from 'axios';
import { API_URL } from '../../constants/constants';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const code = new URL(window.location.href).searchParams.get('code');
const navigate = useNavigate();
const token = window.localStorage.getItem('token');

useEffect(() => {
  (async () => {
    try {
      // 코드가 존재하는지 확인하고 API에 요청하여 토큰을 받아옴
      const res = await axios.get(`api/code=${code}`);
      const token = res.headers.authorization;

      // 받아온 토큰을 로컬 스토리지에 저장
      window.localStorage.setItem('token', token);

      // 데이터를 서버에 보냄
      const postData = {
        // 데이터 예시
      };

      const response = await axios.post('/api/post', postData, {
        headers: {
          Authorization: token,
        },
      });

      // 메인 페이지로 이동
      navigate('/main');
    } catch (error) {
      console.error(error);
      // 오류가 발생하면 메인 페이지로 이동
      navigate('/main');
    }
  })();
}, [code]); // code가 변경될 때마다 useEffect가 실행되도록 배열에 추가
