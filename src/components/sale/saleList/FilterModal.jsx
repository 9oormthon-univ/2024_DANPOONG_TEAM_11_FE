import React from 'react';
import styled from 'styled-components';
import FilterOption from './FilterOption';
import Close_ring from '../../../assets/image/sales/Close_ring.svg';

const FilterModal = ({
                         categories,
                         regions,
                         selectedCategory,
                         selectedRegion,
                         onCategorySelect,
                         onRegionSelect,
                         onApply,
                         onClose,
                     }) => {
    return (
        <Modal>
            <Content>
                <CloseButton onClick={onClose}>
                    <img src={Close_ring} alt="닫기 버튼"/>
                </CloseButton>

                <Section>
                    <Title>카테고리 선택</Title>
                    <Options>
                        {categories.map((category) => (
                            <FilterOption
                                key={category}
                                selected={selectedCategory === category}
                                onClick={() => onCategorySelect(category)}
                            >
                                {category}
                            </FilterOption>
                        ))}
                    </Options>
                </Section>

                <Section>
                    <Title>지역 선택</Title>
                    <Options>
                        {regions.map((region) => (
                            <FilterOption
                                key={region}
                                selected={selectedRegion === region}
                                onClick={() => onRegionSelect(region)}
                            >
                                {region}
                            </FilterOption>
                        ))}
                    </Options>
                </Section>

                <ApplyButton onClick={onApply}>적용하기</ApplyButton>
            </Content>
        </Modal>
    );
};

export default FilterModal;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const Content = styled.div`
    background: white;
    border-radius: 0.5rem;
    padding: 1.2rem;
    width: 90%;
    max-width: 350px;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.8rem;
    right: 0.3rem;
    width: 1.9rem;
    height: 1.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    cursor: pointer;
    border: none;
`;

const Section = styled.div`
    margin-bottom: 1.5rem;
    margin-top: 2rem;
`;

const Title = styled.h4`
    color: ${({theme}) => theme.colors.black};
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
`;

const ApplyButton = styled.button`
    width: 100%;
    padding: 0.95rem;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.orange};
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    margin-top: 1.8rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
`;