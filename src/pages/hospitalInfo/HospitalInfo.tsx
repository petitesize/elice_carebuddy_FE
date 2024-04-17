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
  const [selectedCity, setSelectedCity] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [hospitalData, setHospitalData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (page) => {
    try {
      const response = await fetch(`${API_URL}search/hospitals?page=${page}`);
      const data = await response.json();
      setHospitalData(data.message.datas);
      setTotalPages(data.message.totalPage);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCityChange = (e) => {
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  };
  const handleSearchButtonClick = () => {
    // 검색 버튼 클릭 시, 해당 시/도 값과 검색어를 전달
    console.log('선택된 시/도:', selectedCity);
  };

  return (
    <InfoPageContainer>
      <SearchBox
        onCityChange={handleCityChange}
        onSearch={handleSearchButtonClick}
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
