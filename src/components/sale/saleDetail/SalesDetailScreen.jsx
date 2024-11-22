import React, { useState } from "react";
import styled from "styled-components";
import LeftArrowIcon from "../../../assets/image/sales/LeftArrowIcon.svg";
import RightArrowIcon from "../../../assets/image/sales/RightArrowIcon.svg"; 
import Badge from "../../../assets/image/sales/Badge.svg";
import PhoneNumberIcon from "../../../assets/image/sales/PhoneNumber.svg";
import CertifyIcon from "../../../assets/image/sales/Certify.svg";
import PressureIcon from "../../../assets/image/sales/Pressure.svg";
import SaleReviewSection from "./SaleReviewerSection.jsx";
import SaleInfoSection from "../../..//components/common/SaleInfoSection.jsx";
import MiniLight from "../../..//assets/image/sales/MiniLight.svg";

const ProductDetail = () => {
    const product = {
        name: "조금 작은 무안 양파",
        seller: "전남 손맛",
        originCertification: "원산지 인증",
        contact: "010-1234-5678",
        price: "1kg 당 3,000원",
        description: `보통 양파보다 크기가 작아요. 맛과 신선도는 똑같으니 걱정 마세요.
                        우리 양파는:
                        - 🧅 알맹이가 꽉 차있어요.
                        - 🧅 입 안에 달달함이 퍼져요.
                        - 🧅 수분을 잡았어요.

                        소량~대량 구매, 정기 구매 모두 가능하니 편하게 연락 주세요.`,
        images: [
            "https://health.chosun.com/site/data/img_dir/2024/08/13/2024081302145_0.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAG0hNdJhgMtsYd8e3FGuISM_tNeqH70Duxw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEQH1szv2FCXJW1daeXv6yhMyO0w78vUSGQ&s",
        ],
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Contain>
            <ImageContainer>
            <ArrowButton onClick={handlePrevClick}>
                <Arrow src={LeftArrowIcon} alt="이전 이미지" />
            </ArrowButton>
            <ProductImage
                src={product.images[currentImageIndex]}
                alt={`상품 이미지 ${currentImageIndex + 1}`}
            />
            <RightArrowButton onClick={handleNextClick}>
                <Arrow src={RightArrowIcon} alt="다음 이미지" />
            </RightArrowButton>
            </ImageContainer>
            <Container>
                <InfoSection>
                    <ProductName>{product.name}</ProductName>
                    <ProductBadge>
                        {product.seller}
                        <BadgeIcon src={Badge} alt="배지 아이콘" />
                        <MiniLightIcon src={MiniLight} alt="오른쪽 화살표" />
                    </ProductBadge>

                    <MiniLine/>

                    <DescriptionDetail>
                        <DetailItem>
                            <DetailIcon src={CertifyIcon} alt="원산지 인증 아이콘" />
                            {product.originCertification}
                        </DetailItem>
                        <DetailItem>
                            <DetailIcon src={PhoneNumberIcon} alt="전화번호 아이콘" />
                            {product.contact}
                        </DetailItem>
                        <DetailItem>
                            <DetailIcon src={PressureIcon} alt="가격 아이콘" />
                            {product.price}
                        </DetailItem>
                    </DescriptionDetail>
                </InfoSection>

                <HorizontalLine/>

                <DescriptionContent>
                    <SectionTitle>상세설명</SectionTitle>
                    <SectionQuestion>왜 못난이인가요?</SectionQuestion>
                    <SectionAnswer>크기가 작아요!</SectionAnswer>
                    <DetailSection>
                        <DetailText>{product.description}</DetailText>
                    </DetailSection>
                </DescriptionContent>
                <HorizontalLine/>
            
            {/* 리뷰 섹션 추가 */}
            <SaleReviewSection />
            <HorizontalLine/>
            </Container>
            <SaleInfoSection />
        </Contain>
    );
};

export default ProductDetail;

const Contain = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding-top: 4rem;
    padding-bottom: 8rem;
`;

const Container = styled.div`
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    padding-top: 0.5rem;
    padding-bottom: 0;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 18.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ArrowButton = styled.div`
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
    cursor: pointer;

    &:focus,
    &:focus-within {
    border: none;
    outline: none;
  }
`;

const RightArrowButton = styled.div`
    position: absolute;
    top: 50%;
    right: 2%;
    transform: translateY(-50%);
    cursor: pointer;

    &:focus,
    &:focus-within {
    border: none;
    outline: none;
  }
`;

const Arrow = styled.img`
    width: 30px;
    height: 30px;
    z-index: 100;
    cursor: pointer;
`;

const InfoSection = styled.div`
    margin-top: 20px;
`;

const ProductName = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #323335;
`;

const DescriptionContent = styled.div`
    padding-bottom: 1.2rem;
`;

const DescriptionDetail = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    color: #323335;
`;

const DetailItem = styled.div`
    display: flex;
    align-items: center; 
    gap: 3px; 
    font-size: 1rem;
    color: #323335;
    font-weight: 600;
`;

const DetailIcon = styled.img`
    width: 20px; 
    height: 20px;
    object-fit: contain;
`;


const DetailSection = styled.div`
    margin-top: 10px;
    padding: 30px 15px;
    background: #F3F3F3;
    border-radius: 0.5rem;
`;

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #323335;
    margin-top: 30px;
`;

const SectionQuestion = styled.p`
    font-size: 0.9rem;
    color: #323335;
    margin-top: 10px;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
`;
const SectionAnswer = styled.p`
    font-size: 0.9rem;
    color: #FFA726;
    margin-top: 0.5rem;
    margin-bottm: 3px;
    font-weight: bold;
    margin-bottom: 1rem;
`;

const DetailText = styled.p`
    font-size: 14px;
    color: #555;
    line-height: 1.6;
`;

const ProductBadge = styled.div`
    font-size: 1rem;
    color: #545556;
    margin-top: 5px;
    display: flex;
    align-items: center; 
    gap: 4px;
    font-weight: 500;
`;

const BadgeIcon = styled.img`
    width: 17.74px; 
    height: 23px;
    padding-bottom: 0.2rem;
`;

const MiniLightIcon = styled.img`
    width: 17px; 
    height: 17px;
    padding-bottom: 0.2rem;
`;

const MiniLine = styled.div`
    width: calc(100% + 40px);
    height: 0.1rem;
    background-color: #F3F3F3;
    margin: 18px -20px; 
    padding: 0rem;
    border: none;
    display: block;
`;

const HorizontalLine = styled.div`
    width: calc(100% + 40px);
    height: 0.5rem;
    background-color: #F3F3F3;
    margin: 18px -20px; 
    padding: 0rem;
    border: none;
    display: block;
`;
