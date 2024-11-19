import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/common/BottomNavigation.jsx';
import Header from '../components/common/Header.jsx';
export default function NavLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <BottomNavigation />
    </>
  );
}
