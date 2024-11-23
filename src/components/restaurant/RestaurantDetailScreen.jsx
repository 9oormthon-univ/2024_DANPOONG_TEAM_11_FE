import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import DescriptionDetail from './DescriptionDetail.jsx';
import Location from '../../assets/image/restaurant/location.png';
import Time from '../../assets/image/restaurant/time.png';
import Badge from '../../assets/image/restaurant/badge.png';
import RestaurantModalSection from './RestaurantModalSection.jsx';
import RestaurantReviewSection from './RestaurantReviewSection.jsx';
import BusinessInfoSection from '../common/BusinessInfoSection.jsx';
import {useQuery} from "@tanstack/react-query";
import {getRestaurantDetail} from "../../apis/restaurantDetail.js";
import DataLoading from "../common/DataLoading.jsx";

const RestaurantDetailScreen = () => {
    const { restaurantId } = useParams();
    const {data, isPending, error} = useQuery({
        queryKey: ['restaurantDetail', restaurantId], // 캐싱 Key
        queryFn: () => getRestaurantDetail(restaurantId),
    });

    if (isPending) {
        return(
            <Wrapper>
                <DataLoading />
            </Wrapper>
        )
    }

    if (error) {
        return <ScreenContainer>데이터를 불러오는 중 오류가 발생했습니다.</ScreenContainer>;
    }

    const restaurant = data?.data || {};
    const menu = data?.data.menuInfoResponseDTOs.menuInfoResponseDTOs || [];


    const mainMenu = menu.find((menu) => menu.isMainMenu);
    const image1 = mainMenu?.farmProduceImage || 'default-main-menu-image-url'; // 이미지가 없을 경우 기본 URL

    const secondMenu = menu[1];
    const image2 = secondMenu?.menuImage || 'default-second-menu-image-url'; // 이미지가 없을 경우 기본 URL


    const time = "매일" + restaurant.openTime + ' ~ ' + restaurant.closeTime;
    const guideItems = restaurant.precautions.split('\n');

    return (
        <ScreenContainer>
            <DescriptionSection>
                <ImageContainer>
                    <Image src={mainMenu.menuImage} />
                </ImageContainer>
                <Name>{restaurant.restaurantName}</Name>
                <Description>
                    <DescriptionDetail icon={Badge} text={"농담 인증 식당"} />
                    <DescriptionDetail icon={Location} text={restaurant.address} />
                    <DescriptionDetail icon={Time} text={time} />
                </Description>
            </DescriptionSection>
            <DetailSection>
                <RestaurantModalSection
                    farmProduce={menu.farmProduce}
                    menuName={menu.name}
                    name={restaurant.restaurantName}
                    menu={menu}
                    mainMenuImage={mainMenu.menuImage}
                    image1={image1}
                    image2={image2}
                    guide={guideItems}
                />
            </DetailSection>
            <RestaurantReviewSection />
            <BusinessInfoSection />
        </ScreenContainer>
    );
};

export default RestaurantDetailScreen;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

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