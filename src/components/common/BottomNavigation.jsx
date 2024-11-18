import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import HomeIcon from '../../assets/image/home/Home.svg';
import HomeIconActive from '../../assets/image/home/Home_active.svg';
import MarketIcon from '../../assets/image/Basket.svg';
import MarketIconActive from '../../assets/image/Basket_active.svg';
import RestaurantIcon from '../../assets/image/burger.svg';
import RestaurantIconActive from '../../assets/image/burger_active.svg';

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <NavigationContainer>
      <NavItem to="/home" $isActive={location.pathname === '/home'}>
        <Icon src={location.pathname === '/home' ? HomeIconActive : HomeIcon} alt="Home" />
        <NavText $isActive={location.pathname === '/home'}>홈</NavText>
      </NavItem>
      <NavItem to="/sales" $isActive={location.pathname === '/sales'}>
        <Icon src={location.pathname === '/sales' ? MarketIconActive : MarketIcon} alt="Market" />
        <NavText $isActive={location.pathname === '/sales'}>농담마켓</NavText>
      </NavItem>
      <NavItem to="/restaurants" $isActive={location.pathname === '/restaurants'}>
        <Icon src={location.pathname === '/restaurants' ? RestaurantIconActive : RestaurantIcon} alt="Restaurant" />
        <NavText $isActive={location.pathname === '/restaurants'}>농담식당</NavText>
      </NavItem>
    </NavigationContainer>
  );
};

export default BottomNavigation;

const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    z-index: 10; /* 네비게이션을 맨 위로 표시 */
    align-items: center;
    width: 100%;
    max-width: 480px;
    height: 100px;
    background-color: white;
    border-top: none;
`;

const NavItem = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3px;
    text-decoration: none;
    color: ${({ $isActive }) => ($isActive ? '#FFA500' : '#333')};
`;

const Icon = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const NavText = styled.p`
    font-size: 13px;
    font-family: 'Noto Sans KR', sans-serif;
    color: ${({ $isActive }) => ($isActive ? '#FFA500' : '#333')};
    margin: 0;
    cursor: pointer;
`;