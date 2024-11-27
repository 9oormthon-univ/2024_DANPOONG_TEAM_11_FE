import styled from 'styled-components';
import RestaurantsListScreen from '../../components/restaurant/RestaurantListScreen.jsx'; // 경로 오타 수정


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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: 50px;
    overflow-y: auto;
`;
