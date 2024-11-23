import React from "react";
import styled from "styled-components";
import SellerIcon from "../../../assets/image/sales/SellerIcon.svg";
import Certify from "../../../assets/image/sales/Certify.svg";
import NotoggleSaleInfoSection from "./NotoggleSaleInfoSection.jsx";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getFarmDetail} from "../../../apis/sellerDetail.js";
import DataLoading from "../../common/DataLoading.jsx";

const sellerData = {
    certifications: [
        "원산지",
        "판매자 신분증, 연락처",
        "사업자 등록증",
    ],
};

const SellerDetailScreen = () => {

    const { farmId } = useParams();

    const { data, isPending, error } = useQuery({
        queryKey: ['farmDetail', farmId],
        queryFn: () => {
            return getFarmDetail(farmId);
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });

    if (isPending) {
        return (
            <Container>
                <DataLoading />
            </Container>
        );
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    const sellerInfo = data?.data || {};


    return (
        <Box>
            <Container>
                {/* 판매자 설명 */}
                <Header>
                    <SellerImage src={SellerIcon} alt="판매자 아이콘" />
                    <SellerInfo>
                        <SellerName>{sellerInfo.farmName}</SellerName>
                        <Badges>
                            <Badge>{sellerInfo.badges[2].badgeName}</Badge>
                            <Badge>{sellerInfo.badges[1].badgeName}</Badge>
                        </Badges>
                    </SellerInfo>
                </Header>

                {/* 상품 설명 */}
                <Section>
                    <SectionTitle>{sellerInfo.farmName}님이 팔아요</SectionTitle>
                    <Products>
                        {sellerInfo.ingredients.map((product, index) => (
                            <ProductCard key={index}>
                                <ProductImage src={product.ingredientImages[0]} alt={product.name} />
                                <ProductName>{product.ingredientName}</ProductName>
                            </ProductCard>
                        ))}
                    </Products>
                </Section>

                <GrayLine /> {/* 구분선 */}

                {/* 인증 기록 */}
                <Section>
                    <SectionTitle>{sellerInfo.farmName}님이 인증했어요</SectionTitle>
                    <CertificationList>
                        {sellerData.certifications.map((cert, index) => (
                            <CertificationItem key={index}>
                                <CertifyImage src={Certify} alt="인증 아이콘" />
                                {cert}
                            </CertificationItem>
                        ))}
                    </CertificationList>
                </Section>

                <GrayLine /> {/* 구분선 */}
            </Container>

            {/* 판매자 정보 */}
            <Section>
                <NotoggleSaleInfoSection
                    name={sellerInfo.farmName}
                    address={sellerInfo.address}
                    representative={sellerInfo.farmRepresentative}
                    phoneNumber={sellerInfo.phoneNumber}
                />
            </Section>
        </Box>
    );
};

export default SellerDetailScreen;

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    padding-top: 5.5rem;
`;

const Box = styled.div`
    padding-bottom: 5rem;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const SellerImage = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 13px;
`;

const SellerInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const SellerName = styled.h1`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #323335;
`;

const Badges = styled.div`
    display: flex;
    gap: 8px;
`;

const Badge = styled.div`
    padding: 7px 13px;
    font-size: 12px;
    font-weight: 500;
    color: white;
    background-color: #FFA726;
    border-radius: 0.5rem;
`;

const Section = styled.div`
    margin-bottom: 20px;
    padding-top: 0.5rem;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 10px;
    color: #323335;
`;

const Products = styled.div`
    display: flex;
    justify-content: space-between; 
    gap: 10px; 
    margin-top: 1.2rem;
    margin-bottom: 3.2rem;
`;

const ProductCard = styled.div`
    flex: 1;
    max-width: calc(50% - 5px); 
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
`;

const ProductImage = styled.img`
    width: 100%;
    aspect-ratio: 1.6; /* 이미지 비율 고정 */
    object-fit: cover;
`;

const ProductName = styled.span`
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: #323335;
`;

const CertificationList = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.2rem;
    margin-bottom: 2.4rem;
`;

const CertificationItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.125rem;
    font-size: 1rem;
    color: #323335;
    font-weight: 400;
`;

const CertifyImage = styled.img`
    width: 1.75rem;
    height: 1.75rem;
`;

const GrayLine = styled.hr`
    border: 0;
    height: 1.5px;
    background: #EDEDED; 
    margin: 20px 30px;
`;
