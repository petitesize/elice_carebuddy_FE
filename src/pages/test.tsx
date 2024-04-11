import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants/constants';
import FeedBox from '../components/community/FeedBox';

 
import axios from 'axios';

axios.get('/auth/checkToken')
  .then(response => {
    // 응답에서 토큰이 존재하는지 확인
    const tokenExists = response.data.token ? true : false;
    console.log('백엔드에 저장된 토큰 여부:', tokenExists);
  })
  .catch(error => {
    console.error('토큰 확인 중 오류 발생:', error);
  });