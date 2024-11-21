import React from 'react';
import styled from 'styled-components';
import LocationIcon from '../../assets/image/home/location.png'; // 경로에 맞게 아이콘을 추가하세요.
import SandwichImage from '../../assets/image/home/sandwich.png'; // 샌드위치 이미지 추가.

const TodaySection = () => {
  return (
    <TodaySectionContainer>
      <HeaderText>오늘의 농담식당</HeaderText>
      <LocationSection>
        <Icon src={LocationIcon} alt="location_icon" />
        <SubText>모먼트 강남</SubText>
      </LocationSection>
      <TodayMenuCard>
        <TodayTextSection>
          <MainText>
            서울에서 <Highlighted>전라남도</Highlighted> 무안 <Highlighted>양파</Highlighted>를 즐겨요!
          </MainText>
          <Description>무안 양파로 양파잼을 만들고, 샌드위치에 활용했어요.</Description>
        </TodayTextSection>
        <TodayImageSection>
          <PriceTag>7,500원 (2조각)</PriceTag>
          <Image src={SandwichImage} alt="sandwich" />
        </TodayImageSection>
      </TodayMenuCard>
    </TodaySectionContainer>
  );
};

export default TodaySection;

const TodaySectionContainer = styled.div`
    width: 100%;
    max-width: 480px; /* 전체 컨테이너의 최대 너비 */
    margin-top: 10px;
`;

const HeaderText = styled.h1`
    font-size: 20px;
    font-weight: 500;
`;

const LocationSection = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 15px;
`;

const Icon = styled.img`
    width: 27px;
    height: 26px;
`;

const SubText = styled.p`
    font-size: 16px;
    font-weight: 400;
`;

const TodayMenuCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffa500;
    border-radius: 8px;
    margin-top: 16px;
    width: 100%;
    height: 180px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TodayTextSection = styled.div`
    width: 48%;
    padding: 14px;
`;

const MainText = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #323335;
    line-height: 1.4;
`;

const Highlighted = styled.span`
    color: #ffa500;
    font-weight: 500;
`;

const Description = styled.p`
    font-size: 12px;
    line-height: 1.4;
    color: #666;
    margin-top: 8px;
`;

const TodayImageSection = styled.div`
    position: relative;
    width: 52%;
    height: 100%;
`;

const PriceTag = styled.div`
    position: absolute;
    top: 12px;
    right: 5px;
    font-size: 12px;
    color: #ffa500;
    background: #fdf2e9;
    padding: 8px 10px;
    border: 1px solid #ffa500;
    border-radius: 8px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 8px 8px 0;
`;
