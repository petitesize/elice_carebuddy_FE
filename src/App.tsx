import AppRouter from './routes/Router';
import GlobalStyle from './components/global/GlobalStyle';
import { RecoilRoot } from 'recoil';
import UserAPI from './services/userAPI';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auth/checking', { withCredentials: true });
        console.log(response)
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
