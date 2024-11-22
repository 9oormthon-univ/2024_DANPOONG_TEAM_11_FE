import styled from 'styled-components';
import HomeBanner from '../../assets/image/home/homeBanner.png';
import TodaySection from './TodaySection.jsx';
import RecommendSection from './RecommendSection.jsx';
import Banner from '../../assets/image/home/banner2.png';
import HomeReviewSection from "./HomeReviewSection.jsx";
import {BuyerReviewItems, SellerReviewItems} from "../../apis/mock/reviews.js";

const HomeScreen = () => {
    return (
        <HomeScreenContainer>
            <ImageSection>
                <Image src={HomeBanner} alt="home_banner"/>
            </ImageSection>
            <RecommendContainer>
                <TodaySection/>
                <RecommendSection title={"이런 농산물 어떠세요?"} type={"recommended"}/>
                <RecommendSection title={"내가 버려질 뻔 했던 이유"} type={"rejected"}/>
            </RecommendContainer>
            <BannerImage src={Banner}/>
            <HomeReviewSection title={"판매자 후기"} emoji={"👨🏻‍🌾"} reviews={BuyerReviewItems}/>
            <HomeReviewSection title={"구매자 후기"} emoji={"👩🏻‍🍳"} reviews={SellerReviewItems}/>
        </HomeScreenContainer>
    );
};

export default HomeScreen;

const HomeScreenContainer = styled.div`
    overflow-y: auto; // 필수~
    align-items: center;
    margin-bottom: 100px;
`;

const ImageSection = styled.div`
    width: 100%;
    padding-top: 50px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const RecommendContainer = styled.div`
    width: 100%;
    padding: 20px;
`;

const BannerImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-top: 10px;
    margin-bottom: 20px;
`;