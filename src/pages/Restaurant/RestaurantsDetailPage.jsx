import styled from 'styled-components';
import RestaurantDetailScreen from '../../components/restaurant/RestaurantDetailScreen.jsx';

const RestaurantsListPage = () => {
    return (
        <RestaurantDetailPageContainer>
            <RestaurantDetailScreen />
        </RestaurantDetailPageContainer>
    );
};

export default RestaurantsListPage;

const RestaurantDetailPageContainer = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 100vh; /* 최소 높이 설정 */
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 50px;
    padding-bottom: 100px;
    overflow-y: auto; /* 스크롤 허용 */
`;