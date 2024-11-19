import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header.jsx';
export default function NavLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
