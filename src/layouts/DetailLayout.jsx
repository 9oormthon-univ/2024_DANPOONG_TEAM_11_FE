import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header.jsx';
import DetailBottomNavigation from '../components/common/DetailBottomNavigation.jsx';
export default function NavLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <DetailBottomNavigation />
    </>
  );
}
