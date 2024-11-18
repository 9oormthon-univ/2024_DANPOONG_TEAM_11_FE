import styled from 'styled-components';
import heart from '../../assets/image/heart.svg';

const DetailBottomNavigation = () => {
  return (
    <NavigationContainer>
      <NavItem>
        <IconImage src={heart} alt="Heart" />
      </NavItem>
      <ButtonSection>
        <NavText>전화로 예약하기</NavText>
      </ButtonSection>
    </NavigationContainer>
  );
};

export default DetailBottomNavigation;

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around; 
    position: fixed;
    bottom: 0;
    align-items: center;
    width: 100%;
    max-width: 480px;
    height: 100px;
    background-color: white;
    padding: 10px 0;
    border-top: 1px solid #e0e0e0;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3px;
`;

const ButtonSection = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.main};
    width: 295px;
    height: 38px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const IconImage = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const NavText = styled.p`
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: white;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
`;