import React from 'react';
import styled from 'styled-components';
import ReviewItem from "../common/ReviewItem.jsx";
import reviewerIcon1 from "../../assets/image/common/reviewer1.png";
import reviewerIcon2 from "../../assets/image/common/reviewer2.png";
import reviewerIcon3 from "../../assets/image/common/reviewer3.png";
import reviewerIcon4 from "../../assets/image/common/reviewer4.png";

const ReviewItems = [
    {name: '맛집탐방', icon: reviewerIcon1, rating: 5, review: '매운 양파 맛을 싫어했는데 잼으로 만드니 달콤하네요! 그리고 우리 농산물을 사용해서…'},
    {name: '꿀꿀', icon: reviewerIcon2, rating: 5, review: '샌드위치에 양파잼? 처음에는 거부감이 들었는데 먹자마자 사라졌네요 ㅋㅋ'},
    {name: '고독한미식가', icon: reviewerIcon3, rating: 5, review: '원래 있던 메뉴들이랑 양파잼 샌드위치 너무 잘 어울리네요! 브런치로 딱입니다.'},
    {name: '다들힘내', icon: reviewerIcon4, rating: 5, review: '편식하는 우리 아이도 샌드위치라고 하니 잘 먹네요ㅎㅎ'},
];

const RestaurantReviewSection = () => {
    return (
        <ReviewSectionContainer>
            <SectionTitle>후기(94개)</SectionTitle>
            <ItemList>
                {ReviewItems.map((item, index) => (
                    <ReviewItem key={index} name={item.name} icon={item.icon} rating={item.rating}
                                review={item.review}/>
                ))}
            </ItemList>
        </ReviewSectionContainer>
    );
};

export default RestaurantReviewSection;

const ReviewSectionContainer = styled.div`
    width: 100%;
    max-width: 480px;
    padding: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    gap: 20px;
    overflow-x: auto; /* 가로 스크롤 활성화 */
`;

