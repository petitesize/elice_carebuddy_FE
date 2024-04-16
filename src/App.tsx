import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import UserAPI from './services/userAPI';

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
