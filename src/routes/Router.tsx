import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/global/Layout';
import LoginPage from '../pages/signup/Signup';
import Mypage from '../pages/mypage/Mypage';
import Home from '../pages/home/Home';
import Community from '../pages/community/Community';
import Post from '../pages/post/Post';
import Group from '../pages/group/Group';
import Diary from '../pages/diary/Diary';
import HospitalInfo from '../pages/hospitalInfo/HospitalInfo';
import PetRegister from '../pages/petRegister/PetRegister';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* 여기에 자기 페이지 경로 설정하면 됨 component는 main(body)안에 들어갈 컴포넌트 요소*/}
        <Route path="/signup" element={<Layout component={LoginPage} />} />
        <Route path="/mypage" element={<Layout component={Mypage} />} />
        <Route path="/" element={<Layout component={Home} />} />
        <Route path="/community" element={<Layout component={Community} />} />
        <Route
          path="/pet-register"
          element={<Layout component={PetRegister} />}
        />
        <Route path="/post" element={<Layout component={Post} />} />
        <Route path="/group" element={<Layout component={Group} />} />
        <Route path="/diary" element={<Layout component={Diary} />} />
        <Route
          path="/hospital-info"
          element={<Layout component={HospitalInfo} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
