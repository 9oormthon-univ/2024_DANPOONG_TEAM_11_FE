import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout.jsx';
import DetailLayout from '../layouts/DetailLayout.jsx';
import NavLayout from '../layouts/NavLayout.jsx';
import HomeLayout from '../layouts/HomeLayout.jsx';
import RegisterLayout from '../layouts/RegisterLayout.jsx';

import LoginPage from '../pages/Login/LoginPage';
import UserSelectionPage from '../pages/Login/UserSelectionPage.jsx';
import HomePage from '../pages/Home/HomePage.jsx';
import SalesListPage from '../pages/Sales/SalesListPage';
import SalesDetailPage from '../pages/Sales/SalesDetailPage';
import SellerDetailPage from '../pages/Sales/SellerDetailPage';
import RestaurantsListPage from '../pages/Restaurant/RestaurantsListPage';
import RestaurantDetailPage from '../pages/Restaurant/RestaurantsDetailPage';
import RegisterFormPage from '../pages/Login/RegisterFormPage';
import LoadingPage from '../pages/Login/LoadingPage';
import FarmRegisterFormPage from '../pages/Login/FarmRegisterFormPage';
import ChatingPage from '../pages/Sales/ChatingPage';
import KakaoCallbackPage from '../pages/Login/KakaoCallbackPage';

const router = createBrowserRouter([
  // 메인 Layout 경로 (로그인 관련)
  {
    path: '/',
    element: <Layout />, // 최상위 레이아웃
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'select-user', element: <UserSelectionPage /> },
      { path: 'loading', element: <LoadingPage /> },
      { path: 'chat', element: <ChatingPage />},
      {
        path: 'register',
        element: <RegisterLayout />,
        children: [
          { path: 'form', element: <RegisterFormPage /> },
          { path: 'farm-form', element: <FarmRegisterFormPage /> },

        ],
      },
      {
        path: 'details',
        element: <DetailLayout />,
        children: [
          { path: 'sales/:ingredientId', element: <SalesDetailPage /> },
          { path: 'seller/:farmId', element: <SellerDetailPage /> },
          { path: 'restaurant/:restaurantId', element: <RestaurantDetailPage /> },
        ],
      },
      {
        path: '',
        element: <NavLayout />,
        children: [
          { path: 'sales', element: <SalesListPage /> },
          { path: 'restaurants', element: <RestaurantsListPage /> },
        ],
      },
      {
        path: 'home',
        element: <HomeLayout />,
        children: [
          { path: '', element: <HomePage /> },
        ],
      },
      // 여기에 새로운 경로 추가
      {
        path: 'api/oauth2/callback/kakao',
        element: <KakaoCallbackPage />, // 콜백 처리를 위한 컴포넌트
      },
    ],
  },
]);

export default router;
