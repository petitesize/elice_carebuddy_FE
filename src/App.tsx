import { RecoilRoot } from 'recoil';
import GlobalStyle from './components/global/GlobalStyle';
import AppRouter from './routes/Router';

const App = () => {
  
  
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <AppRouter />
      </RecoilRoot>
    </>
  );
};

export default App;
