import React from 'react';
import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;