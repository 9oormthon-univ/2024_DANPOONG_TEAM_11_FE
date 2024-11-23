import React from 'react';
import styled from 'styled-components';
import ReviewItem from "../common/ReviewItem.jsx";

const HomeReviewSection = ({title, emoji, reviews}) => {
    return (
        <ReviewSectionContainer>
            <SectionTitle>
                <Emoji>{emoji}</Emoji> {title}
            </SectionTitle>
            <ItemList>
                {(reviews || []).map((item, index) => (
                    <ReviewItem
                        key={index}
                        name={item.name}
                        icon={item.icon}
                        rating={item.rating}
                        review={item.review}
                    />
                ))}
            </ItemList>
        </ReviewSectionContainer>
    );
};

export default HomeReviewSection;

const ReviewSectionContainer = styled.div`
    width: 100%;
    max-width: 480px;
    padding: 10px 20px;
`;

const SectionTitle = styled.h2`
    font-size: 20px; /* 이모지와 텍스트의 크기를 함께 변경 */
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Emoji = styled.span`
    font-size: 32px; /* 이모지 크기만 따로 변경 */
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    gap: 20px;
    overflow-x: auto; /* 가로 스크롤 활성화 */
`;

