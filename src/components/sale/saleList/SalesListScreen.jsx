import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from "./ProductCard";
import FilterModal from "./FilterModal";
import FilterButton from "./FilterButton";
import { useQuery } from "@tanstack/react-query";
import { getSalesList } from "../../../apis/saleList.js";
import DataLoading from "../../common/DataLoading.jsx";
import {useNavigate} from "react-router-dom";
import Write from '../../../assets/image/sales/Write.svg';

const categories = ['전체', '과일', '고구마/감자/밤', '쌈채소', '쌀/옥수수/콩', '고추/마늘/양파', '배추/무', '홍삼/인삼/새싹삼', '오이/파', '버섯', '나물', '기타'];
const regions = ['전체', '서울', '경기/인천', '강원', '대전/세종', '충남/충북', '경남/경북', '전남/전북', '부산', '제주'];

const SalesListScreen = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedRegion, setSelectedRegion] = useState('전체');

    const [pendingCategory, setPendingCategory] = useState('전체');
    const [pendingRegion, setPendingRegion] = useState('전체');

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const { data, isPending, error } = useQuery({
        queryKey: ['ingredientsList', { category: selectedCategory, region: selectedRegion }],
        queryFn: ({ queryKey }) => {
            const [_key, { category, region }] = queryKey;
            return getSalesList(category, region, 0, 10);
        },
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });

    if (isPending) {
        return <DataLoading />;
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

    const products = data?.data?.ingredientInfoResponseDTOs || [];

    const handleApplyFilter = () => {
        setSelectedCategory(pendingCategory);
        setSelectedRegion(pendingRegion);
        setIsFilterOpen(false); // 모달 닫기
    };

    const handleProductClick = (ingredientId) => {
        navigate(`/details/sales/${ingredientId}`);
    };

    return (
        <Container>
            <FilterButtonContainer>
                <FilterButton
                    isSelected={selectedCategory !== '전체'}
                    label={selectedCategory !== '전체' ? selectedCategory : '카테고리'}
                    onClick={() => setIsFilterOpen(true)}
                />
                <FilterButton
                    isSelected={selectedRegion !== '전체'}
                    label={selectedRegion !== '전체' ? selectedRegion : '지역'}
                    onClick={() => setIsFilterOpen(true)}
                />
            </FilterButtonContainer>

            {/* 상품 리스트 */}
            <ProductList>
                {products.map((product) => {
                    const imageUrl = product.ingredientImages?.[0] || 'https://via.placeholder.com/150';
                    return (
                        <ProductCard
                            key={product.ingredientId}
                            product={{
                                id: product.ingredientId,
                                name: product.ingredientName,
                                category: product.ingredientCategory,
                                price: product.price,
                                farmName: product.farmSummaryResponseDTO?.farmName,
                                image: imageUrl,
                            }}
                            onClick={() => handleProductClick(product.ingredientId)}
                        />
                    );
                })}
            </ProductList>

            {/* 필터 모달 */}
            {isFilterOpen && (
                <FilterModal
                    categories={categories}
                    regions={regions}
                    selectedCategory={pendingCategory}
                    selectedRegion={pendingRegion}
                    onCategorySelect={(category) => setPendingCategory(category)}
                    onRegionSelect={(region) => setPendingRegion(region)}
                    onApply={handleApplyFilter} // 필터 적용
                    onClose={() => setIsFilterOpen(false)} // 모달 닫기
                />
            )}
            <FixedWriteIcon onClick={() => navigate('/register/farm-form')}>
                <img src={Write} alt="Write Icon" />
            </FixedWriteIcon>
        </Container>
    );
};

export default SalesListScreen;

// 스타일링
const Container = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 1.3rem;
    background-color: ${({ theme }) => theme.colors.white}; 
    position: relative;
`;

const FilterButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.6rem;
    margin-top: 3.3rem;
`;

const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 7.188rem;
`;

const FixedWriteIcon = styled.div`
    position: fixed; /* 브라우저 창 기준 */
    bottom: 7rem; /* 브라우저 하단에서 7rem 위 */
    right: 38%; /* 브라우저 오른쪽에서 2rem 안쪽 */
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    display: flex;
    cursor: pointer;

    img {
        width: 58px;
        height: 58px;
    }
    
    @media (max-width: 768px) {
        bottom: 7rem;
        right: 1.5rem;
        width: 45px;
        height: 45px;

        img {
            width: 50px;
            height: 50px;
        }
    
    @media (max-width: 390px) {
        bottom: 7rem;
        right: 1.5rem;
        width: 45px;
        height: 45px;

        img {
            width: 50px;
            height: 50px;
        }

`;

