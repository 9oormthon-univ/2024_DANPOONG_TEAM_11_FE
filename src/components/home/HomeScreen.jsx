import styled from 'styled-components';
import HomeBanner from '../../assets/image/home/homeBanner.png';
import TodaySection from './TodaySection.jsx';
import RecommendSection from './RecommendSection.jsx';

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <ImageSection>
        <Image src={HomeBanner} alt="home_banner" />
      </ImageSection>
      <RecommendContainer>
        <TodaySection />
        <RecommendSection title={"이런 농산물 어떠세요?"} type={"recommended"}/>
        <RecommendSection title={"내가 버려질 뻔 했던 이유"} type={"rejected"}/>
      </RecommendContainer>
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
    padding-top: 50px; // 헤더를 position: fix로 해둬서 padding을 50만큼 줘야 함
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

