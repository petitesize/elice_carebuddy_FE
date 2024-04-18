import React, { useState, useEffect } from 'react';
// import HospitalSearch from '../../components/information/HospitalSearch';
import SearchResult from '../../components/information/HostpitalSearchResult';
import InfoPageContainer from '../../components/information/InfoPageContainer';
import SearchBox from '../../components/information/SearchBox';
import { LuMapPin } from 'react-icons/lu';
import styled from 'styled-components';
import { API_URL } from '../../constants/constants';
import Pagination from 'rc-pagination';

const StyledPagination = styled(Pagination)`
  .rc-pagination-item-link:hover {
    color: var(--color-green-main);
    border-color: var(--color-green-main);
  }

  .rc-pagination-item-active,
  .rc-pagination-item:hover {
    border-color: var(--color-green-main);
  }
  .rc-pagination-item-active a,
  .rc-pagination-item:hover a,
  .rc-pagination-item-link:hover {
    color: var(--color-green-main);
  }
`;

const MapLink = styled.a`
  text-decoration: none;
  color: var(--color-green-main);
`;

const Information: React.FC = () => {
  // 선택된 시/도와 구/군 정보를 저장할 상태
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [hospitalData, setHospitalData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`${API_URL}search/AllH?page=${page}`);
      const data = await response.json();
      setHospitalData(data.message.datas);
      setTotalPages(data.message.totalPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (selectedCity != '') {
      fetchSearchData(currentPage, selectedCity, selectedDistrict);
    } else {
      fetchData(currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };
  // 검색 버튼 클릭 시 호출될 함수
  const handleSearch = () => {
    // 검색을 수행하고 결과를 상태로 업데이트
    fetchSearchData(1, selectedCity, selectedDistrict);
  };

  const fetchSearchData = async (page, city, district) => {
    try {
      const response = await fetch(
        `${API_URL}search/hospitals?address=${city} ${district}&page=${page}`,
      );
      const data = await response.json();
      setHospitalData(data.hospitals.datas);
      setTotalPages(data.hospitals.totalPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <InfoPageContainer>
      <SearchBox
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        selectedDistrict={selectedDistrict}
        setSelectedDistrict={setSelectedDistrict}
        onSearch={handleSearch}
      />
      <SearchResult data={hospitalData} />
      <StyledPagination
        current={currentPage}
        total={totalPages}
        onChange={handlePageChange}
      />
    </InfoPageContainer>
  );
};

export default Information;
