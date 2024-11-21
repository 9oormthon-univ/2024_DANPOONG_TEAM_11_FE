import styled from 'styled-components';
import RestaurantsListScreen from '../../components/restaurant/RestaurantLIstScreen.jsx';

const RestaurantsListPage = () => {
    return (
        <RestaurantListPageContainer>
            <RestaurantsListScreen />
        </RestaurantListPageContainer>
    );
};

export default RestaurantsListPage;

const RestaurantListPageContainer = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 100vh; /* 최소 높이 설정 */
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 50px;
    overflow-y: auto; /* 스크롤 허용 */
`;