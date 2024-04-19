import React, { useEffect } from 'react'; // React에서 useEffect를 가져옴
import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { userQuery } from './recoil/selectors';
import { useRecoilValue } from 'recoil';

import UserAPI from './services/userAPI';
import axios from 'axios';

const App = () => {
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
