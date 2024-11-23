import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header.jsx';
import DetailBottomNavigation from '../components/common/DetailBottomNavigation.jsx';

export default function DetailLayout() {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    // 페이지별 버튼 구성
    const getButtons = () => {
        if (location.pathname.startsWith('/details/sales')) {
            const { ingredientId } = params;
            return [
                { label: '장바구니'},
                { label: '구매하기'},
            ];
        } else if (location.pathname.startsWith('/details/seller')) {
            const { farmId } = params;
            return [
                { label: '1:1 채팅', onClick: () => navigate(`/chat`) },
                { label: '전화하기' },
            ];
        } else if (location.pathname.startsWith('/details/restaurant')) {
            const { restaurantId } = params;
            return [
                { label: '전화로 예약하기'},
            ];
        }
        return [];
    };

    return (
        <>
            <Header />
            <Outlet />
            <DetailBottomNavigation buttons={getButtons()} />
        </>
    );
}