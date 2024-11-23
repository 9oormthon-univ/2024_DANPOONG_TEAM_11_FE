import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from "./ProductCard";
import FilterModal from "./FilterModal";
import FilterButton from "./FilterButton";
import { useQuery } from "@tanstack/react-query";
import { getSalesList } from "../../../apis/saleList.js";

const categories = ['전체', '과일', '고구마/감자/밤', '쌈채소', '쌀/옥수수/콩', '고추/마늘/양파', '배추/무', '홍삼/인삼/새싹삼', '오이/파', '버섯', '나물', '기타'];
const regions = ['전체', '서울', '경기/인천', '강원', '대전/세종', '충남/충북', '경남/경북', '전남/전북', '부산', '제주'];

const SalesListScreen = () => {
    // 필터 상태
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const [selectedRegion, setSelectedRegion] = useState('전체');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // React Query로 데이터 가져오기
    const { data, isLoading, error } = useQuery({
        queryKey: ['ingredientsList', { category: selectedCategory, region: selectedRegion }],
        queryFn: ({ queryKey }) => {
            const [_key, { category, region }] = queryKey;
            return getSalesList(category, region, 0, 10); // API 호출
        },
        staleTime: 1000 * 60 * 5, // 5분 동안 데이터를 새로 요청하지 않음
        cacheTime: 1000 * 60 * 10, // 10분 동안 데이터를 캐싱
    });

    // 로딩 및 에러 처리
    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }
    console.log(data);

    // 받아온 데이터 매핑
    const products = data?.data?.ingredientInfoResponseDTOs || [];

    return (
        <Container>
            {/* 필터 버튼 */}
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
                    const imageUrl = product.ingredientImages?.[0] || 'https://via.placeholder.com/150'; // 기본 이미지 추가
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
                        />
                    );
                })}
            </ProductList>

            {/* 필터 모달 */}
            {isFilterOpen && (
                <FilterModal
                    isOpen={isFilterOpen}
                    categories={categories}
                    regions={regions}
                    selectedCategory={selectedCategory}
                    selectedRegion={selectedRegion}
                    onCategorySelect={(category) => {
                        setSelectedCategory(category === selectedCategory ? '전체' : category);
                        setIsFilterOpen(false); // 모달 닫기
                    }}
                    onRegionSelect={(region) => {
                        setSelectedRegion(region === selectedRegion ? '전체' : region);
                        setIsFilterOpen(false); // 모달 닫기
                    }}
                    onClose={() => setIsFilterOpen(false)}
                />
            )}
        </Container>
    );
};

export default SalesListScreen;

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 1.3rem;
    background-color: ${({ theme }) => theme.colors.white};
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