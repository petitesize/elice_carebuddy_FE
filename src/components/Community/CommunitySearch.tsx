import styled from 'styled-components';

type CommunitySearchProps = {
  searchTerm: string
}

const Search = styled.input`
background: #FFFFFF;
border: 1px solid #CECECE;
border-radius: 30px;
margin-top: 30px;
height:35px;
width: 500px;
font-size: 16px;
padding: 5px 5px 5px 15px;
`
const CommunitySearch: React.FC<CommunitySearchProps> = ({ searchTerm }) => (
<Search type="string" placeholder="검색어를 입력하세요">{searchTerm}</Search>
)

export default CommunitySearch;