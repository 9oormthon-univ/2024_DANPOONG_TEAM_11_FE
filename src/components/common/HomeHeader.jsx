import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeLogo from '../../assets/image/home/home_logo.svg';
import Search from '../../assets/image/home/search.svg';
import { useState } from 'react';

const HomeHeader = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if(searchText === '양파') {
      navigate('/sales');
    }
    else{
      setSearchText('양파');
    }
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  }

  return (
    <HeaderContainer>
      <ButtonContainer onClick={() => navigate('/home')}>
        <img src={HomeLogo} alt="Back" />
      </ButtonContainer>
      <InputWrapper>
        <Icon src={Search} alt="Search" onClick={handleSearchClick} />
        <InputField placeholder="원하는 식재료를 검색하세요! ex)양파" value={searchText} onChange={handleSearchChange}/>
      </InputWrapper>
    </HeaderContainer>
  );
};

export default HomeHeader;

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 10;
    width: 100%;
    max-width: 480px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
`;

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black || '#000000'};

    &:hover {
        opacity: 0.8;
    }
`;

const InputWrapper = styled.div`
    position: relative;
    width: 306px;
    height: 34px;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 12px; /* 검색 아이콘 위치 조정 */
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
    z-index: 1;
    
  opacity: 0.7;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: #F1F1F1;
  color: gray; 
  padding: 8px 12px 8px 50px; /* 아이콘의 공간을 위해 왼쪽 여백 추가 */
  font-size: 12px;
  border: none;
  outline: none;
  backdrop-filter: blur(4px); 
  -webkit-backdrop-filter: blur(4px);

  &::placeholder {
    color: gray;
    opacity: 0.5;
    font-size: 12px;
  }
`;