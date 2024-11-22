import styled from 'styled-components';
import restaurants from '../../apis/mock/restaurants.js';
import { useParams } from 'react-router-dom';
import DescriptionDetail from './DescriptionDetail.jsx';
import Location from '../../assets/image/restaurant/location.png';
import Time from '../../assets/image/restaurant/time.png';
import Badge from '../../assets/image/restaurant/badge.png';
import RestaurantModalSection from './RestaurantModalSection.jsx';
import RestaurantReviewSection from './RestaurantReviewSection.jsx';
import BusinessInfoSection from '../common/BusinessInfoSection.jsx';

const RestaurantDetailScreen = () => {
    const { restaurantId } = useParams();
    const restaurant = restaurants.find((r) => r.id === parseInt(restaurantId, 10));

    if (!restaurant) {
        return <ScreenContainer>레스토랑 정보를 찾을 수 없습니다.</ScreenContainer>;
    }

    return (
        <ScreenContainer>
            <DescriptionSection>
                <ImageContainer>
                    <Image src={restaurant.image.main} />
                </ImageContainer>
                <Name>{restaurant.name}</Name>
                <Description>
                    <DescriptionDetail icon={Badge} text={restaurant.badge} />
                    <DescriptionDetail icon={Location} text={restaurant.location} />
                    <DescriptionDetail icon={Time} text={restaurant.time} />
                </Description>
            </DescriptionSection>
            <DetailSection>
                <RestaurantModalSection
                    description={restaurant.description}
                    name={restaurant.name}
                    image1={restaurant.image.detail}
                    image2={restaurant.image.main}
                    menu={restaurant.menu}
                    guide={restaurant.guide}
                />
            </DetailSection>
            <RestaurantReviewSection />
            <BusinessInfoSection />
        </ScreenContainer>
    );
};

export default RestaurantDetailScreen;

const ScreenContainer = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    overflow-y: auto;
`;

const DescriptionSection = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Name = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #323335;
    padding: 20px;
    border-bottom: 1px solid #f3f3f3;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    padding: 20px;
`;

const DetailSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 16px;
    padding: 20px;

    p {
        font-size: 16px;
        font-weight: 600;
        font-family: 'Noto Sans KR', sans-serif;
        color: #323335;
    }
`;