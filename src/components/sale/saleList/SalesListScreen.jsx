import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from "./ProductCard";
import FilterModal from "./FilterModal";
import FilterButton from "./FilterButton";

import Garlic from "../../../assets/image/sales/Garlic.svg";
import Persimmon from "../../../assets/image/sales/Persimmon.svg";
import SweetPotato from "../../../assets/image/sales/sweetPotato.svg";


const products = [
  { id: 1, name: '울퉁불퉁 해남 고구마', weight: '1kg 당 3,000원', image: SweetPotato },
  { id: 2, name: '여기저기 찍힌 진영 단감', weight: '1kg 당 3,000원', image: Persimmon },
  { id: 3, name: '점박힌 창녕 깐마늘', weight: '1kg 당 3,000원', image: Garlic },
];

const categories = ['전체', '과일', '고구마/감자/밤', '쌈채소', '쌀/옥수수/콩', '고추/마늘/양파', '배추/무', '홍삼/인삼/새싹삼', '오이/파', '버섯', '나물', '기타'];
const regions = ['전체', '서울', '경기/인천', '강원', '대전/세종', '충남/충북', '경남/경북', '전남/전북', '부산', '제주'];

const SalesListScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedRegion, setSelectedRegion] = useState('전체');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>

      {isFilterOpen && (
        <FilterModal
          isOpen={isFilterOpen}
          categories={categories}
          regions={regions}
          selectedCategory={selectedCategory}
          selectedRegion={selectedRegion}
          onCategorySelect={(category) => setSelectedCategory(category === selectedCategory ? '전체' : category)}
          onRegionSelect={(region) => setSelectedRegion(region === selectedRegion ? '전체' : region)}
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
