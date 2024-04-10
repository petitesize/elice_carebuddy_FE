import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/constants';

const YourComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}users`);

        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default YourComponent;
