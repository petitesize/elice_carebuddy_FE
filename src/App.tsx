import React from 'react';
import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import UserAPI from './services/userState';

const App = () => {
  return (
    <>
      <RecoilRoot>
        <UserAPI />
        <GlobalStyle />
        <AppRouter />
      </RecoilRoot>
    </>
  );
};

export default App;
