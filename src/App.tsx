import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { userQuery } from './recoil/selectors';
import { useRecoilValue } from 'recoil';
import React, { useEffect } from 'react';

import UserAPI from './services/userAPI';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://kdt-sw-8-team01.elicecoding.com/auth/checking',
          { withCredentials: true },
        );
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <AppRouter />
        <UserAPI />
      </RecoilRoot>
    </>
  );
};

export default App;
