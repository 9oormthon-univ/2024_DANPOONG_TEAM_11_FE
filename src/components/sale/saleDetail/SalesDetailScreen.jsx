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
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getSaleDetail} from "../../../apis/saleDetail.js";
import DataLoading from "../../common/DataLoading.jsx";
import GptSection from "./GptSection.jsx";

const ProductDetail = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nav = useNavigate();
    const { ingredientId } = useParams();

    const { data, isPending, error } = useQuery({
        queryKey: ['ingredientDetail', ingredientId],
        queryFn: () => {
            return getSaleDetail(ingredientId);
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });

    if (isPending) {
        return (
            <Contain>
                <DataLoading />
            </Contain>
            )
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    const handleNavigateToSeller = () => {
        if (farmDto.farmId) {
            nav(`/details/seller/${farmDto.farmId}`); // 앞에 '/' 추가
        }
    };


    const product = data?.data || {};
    const farmDto = data?.data.farmSummaryResponseDTO || {};

    const images = product?.ingredientImages || [];


    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const paragraphs = product.ingredientDescription.split("\n");

    return (
        <Contain>
            <ImageContainer>
            <ArrowButton onClick={handlePrevClick}>
                <Arrow src={LeftArrowIcon} alt="이전 이미지" />
            </ArrowButton>
                <ProductImage
                    src={product?.ingredientImages?.[currentImageIndex] || 'default-image-url'}
                    alt={`상품 이미지 ${currentImageIndex + 1}`}
                />
            <RightArrowButton onClick={handleNextClick}>
                <Arrow src={RightArrowIcon} alt="다음 이미지" />
            </RightArrowButton>
            </ImageContainer>
            <Container>
                <InfoSection>
                    <ProductName onClick={handleNavigateToSeller}>{product.ingredientName}</ProductName>
                    <ProductBadge onClick={handleNavigateToSeller}>
                        {farmDto.farmName}
                        <BadgeIcon src={Badge} alt="배지 아이콘" />
                        <MiniLightIcon src={MiniLight} alt="오른쪽 화살표" />
                    </ProductBadge>

                    <MiniLine/>

                    <DescriptionDetail>
                        <DetailItem>
                            <DetailIcon src={CertifyIcon} alt="원산지 인증 아이콘" />
                            {"원산지 인증"}
                        </DetailItem>
                        <DetailItem>
                            <DetailIcon src={PhoneNumberIcon} alt="전화번호 아이콘" />
                            {farmDto.phoneNumber}
                        </DetailItem>
                        <DetailItem>
                            <DetailIcon src={PressureIcon} alt="가격 아이콘" />
                            1kg당 {product.price}원
                        </DetailItem>
                    </DescriptionDetail>
                    <GptSection ingredientName={product.ingredientName} ingredientId={product.ingredientId}/>
                </InfoSection>

                <HorizontalLine/>

                <DescriptionContent>
                    <SectionTitle>상세설명</SectionTitle>
                    <SectionQuestion>왜 못난이인가요?</SectionQuestion>
                    <SectionAnswer>{product.uglyReason}</SectionAnswer>
                    <DetailSection>
                        {paragraphs.map((paragraph, index) => (
                            <DetailText key={index}>{paragraph}</DetailText>
                        ))}
                    </DetailSection>
                </DescriptionContent>
                <HorizontalLine/>
            
            {/* 리뷰 섹션 추가 */}
            <SaleReviewSection />
            <HorizontalLine/>
            </Container>
            <SaleInfoSection
                name={farmDto.farmName}
                address={farmDto.address}
                representative={farmDto.farmRepresentative}
                phoneNumber={farmDto.phoneNumber}
            />
        </Contain>
    );
};

export default ProductDetail;


const Contain = styled.div`
    width: 100%;
    max-width: 480px;
    justify-content: center;
    align-items: center;
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
    font-weight: 400;
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
