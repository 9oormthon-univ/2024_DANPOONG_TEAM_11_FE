import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/common/BottomNavigation.jsx';
import HomeHeader from '../components/common/HomeHeader.jsx';
export default function NavLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <BottomNavigation />
    </>
  );
}
