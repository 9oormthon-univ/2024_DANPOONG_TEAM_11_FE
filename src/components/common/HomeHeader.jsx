import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HomeLogo from '../../assets/image/home/home_logo.svg';
import Search from '../../assets/image/home/search.svg';
import { useState } from 'react';

const HomeHeader = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    if (searchText.trim()) {
      // 검색어를 URL 쿼리 파라미터에 추가
      navigate(`/sales?category=${searchText}&region=전체&page=0&size=10`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
      <HeaderContainer>
        <ButtonContainer onClick={() => navigate('/home')}>
          <img src={HomeLogo} alt="Back" />
        </ButtonContainer>
        <InputWrapper>
          <Icon src={Search} alt="Search" onClick={handleSearchClick} />
          <InputField
              placeholder="원하는 카테고리 또는 지역을 검색하세요!"
              value={searchText}
              onChange={handleSearchChange}
          />
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
`;

const InputWrapper = styled.div`
  position: relative;
  width: 306px;
  height: 34px;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  z-index: 1;
  opacity: 0.7;
  cursor: pointer;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: #f1f1f1;
  color: gray;
  padding: 8px 12px 8px 50px;
  font-size: 12px;
  border: none;
  outline: none;

  &::placeholder {
    color: gray;
    opacity: 0.5;
    font-size: 12px;
  }
`;