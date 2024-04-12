import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { userState } from '../recoil/atoms';
import { API_URL } from '../constants/constants';

const UserAPI = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_URL}users/6617b4493122a35bf1a26f8d`,
        );
        const userData = response.data.message;
        setUser(userData);
        console.log(user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default UserAPI;
