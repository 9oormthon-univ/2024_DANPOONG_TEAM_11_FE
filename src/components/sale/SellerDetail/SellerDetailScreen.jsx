import React from "react";
import styled from "styled-components";
import SellerIcon from "../../../assets/image/sales/SellerIcon.svg";
import Certify from "../../../assets/image/sales/Certify.svg";
import NotoggleSaleInfoSection from "./NotoggleSaleInfoSection.jsx";

const SellerDetailScreen = () => {
    const sellerInfo = {
        name: "전남손맛",
        region: "전라남도",
        quickResponse: "빠른 답장",
        products: [
            { name: "무안 양파", image: "https://health.chosun.com/site/data/img_dir/2024/08/13/2024081302145_0.jpg" },
            { name: "해남 코끼리마늘", image: "https://health.chosun.com/site/data/img_dir/2024/08/13/2024081302145_0.jpg" },
        ],
        certifications: [
            "원산지",
            "판매자 신분증, 연락처",
            "사업자 등록증",
        ],
    };

    return (
        <Box>
            <Container>
                {/* 판매자 설명 */}
                <Header>
                    <SellerImage src={SellerIcon} alt="판매자 아이콘" />
                    <SellerInfo>
                        <SellerName>{sellerInfo.name}</SellerName>
                        <Badges>
                            <Badge>{sellerInfo.region}</Badge>
                            <Badge>{sellerInfo.quickResponse}</Badge>
                        </Badges>
                    </SellerInfo>
                </Header>

                {/* 상품 설명 */}
                <Section>
                    <SectionTitle>{sellerInfo.name}님이 팔아요</SectionTitle>
                    <Products>
                        {sellerInfo.products.map((product, index) => (
                            <ProductCard key={index}>
                                <ProductImage src={product.image} alt={product.name} />
                                <ProductName>{product.name}</ProductName>
                            </ProductCard>
                        ))}
                    </Products>
                </Section>

                <GrayLine /> {/* 구분선 */}

                {/* 인증 기록 */}
                <Section>
                    <SectionTitle>{sellerInfo.name}님이 인증했어요</SectionTitle>
                    <CertificationList>
                        {sellerInfo.certifications.map((cert, index) => (
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
                <NotoggleSaleInfoSection />
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
    font-weight: 800;
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
    font-weight: 600;
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
    font-weight: 800;
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
    font-weight: 700;
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
    font-weight: 600;
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