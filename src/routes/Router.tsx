import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/global/Layout';
import LoginPage from '../pages/signup/Signup';
import Mypage from '../pages/mypage/Mypage';
import Userpage from '../pages/userpage/Userpage';
import Home from '../pages/home/Home';
import Community from '../pages/community/Community';
import Post from '../pages/post/Post';
import Group from '../pages/group/Group';
import Diary from '../pages/diary/Diary';
import HospitalInfo from '../pages/hospitalInfo/HospitalInfo';
import PharmacyInfo from '../pages/pharmacyInfo/PharmacyInfo';
import PetRegister from '../pages/petRegister/PetRegister';
import PetEdit from '../pages/petEdit/PetEdit';
import WritingForModal from '../components/community/WritingModal'; //테스트용 - 추후 삭제 예정
import NotFound from '../pages/notFound/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* 여기에 자기 페이지 경로 설정하면 됨 component는 main(body)안에 들어갈 컴포넌트 요소*/}
        <Route path="/signup" element={<Layout component={LoginPage} />} />
        <Route path="/mypage" element={<Layout component={Mypage} />} />
        <Route path="/userpage" element={<Layout component={Userpage} />} />
        <Route path="/" element={<Layout component={Home} />} />
        <Route path="/community" element={<Layout component={Community} />} />
        <Route
          path="/pet-register"
          element={<Layout component={PetRegister} />}
        />
        <Route path="/pet-edit" element={<Layout component={PetEdit} />} />
        <Route path="/post" element={<Layout component={Post} />} />
        <Route path="/group" element={<Layout component={Group} />} />
        <Route path="/diary" element={<Layout component={Diary} />} />
        <Route
          path="/hospital-info"
          element={<Layout component={HospitalInfo} />}
        />
        <Route
          path="/pharmacy-info"
          element={<Layout component={PharmacyInfo} />}
        />
        <Route
          path="/writing-for-modal"
          element={<Layout component={WritingForModal} />}
        />{' '}
        {/* 테스트용 - 추후 삭제 예정 */}
        {/* 모든 경로에 대한 매칭을 시도한 후 NotFound 컴포넌트를 렌더링합니다. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
