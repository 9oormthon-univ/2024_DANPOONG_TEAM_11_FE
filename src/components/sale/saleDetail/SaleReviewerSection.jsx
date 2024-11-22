import React from 'react';
import styled from 'styled-components';
import ReviewItem from "../../common/ReviewItem.jsx";
import reviewerIcon1 from "../../../assets/image/common/saleReview/saleReview1.png";
import reviewerIcon2 from "../../../assets/image/common/saleReview/saleReview2.png";
import reviewerIcon3 from "../../../assets/image/common/saleReview/saleReview3.png";
import reviewerIcon4 from "../../../assets/image/common/saleReview/saleReview4.png";

const ReviewItems = [
    {name: '과일천국', icon: reviewerIcon1, rating: 5, review: '받아보고 신선해서 놀랐습니다. 훨씬 저렴하게 잘 산 것 같아요. 생산지에서 바로 가져왔다고 하니 홍보 효과도 톡톡!'},
    {name: '건강한쌈', icon: reviewerIcon2, rating: 5, review: '유통 단계에서 값이 확 뛰어서 항상 고민이었는데 직거래가 되니까 비용이 거의 반으로 줄어서 맘이 가볍네요.'},
    {name: '한방삼계탕', icon: reviewerIcon3, rating: 5, review: '말만 못난이지 상태와 맛은 맛난이입니다.'},
    {name: '비빔비빔', icon: reviewerIcon4, rating: 5, review: '앞으로도 계속 여기서만 구매하려고요. 손님도 많아졌습니다.'},
];

const SaleReviewSection = () => {
    return (
        <ReviewSectionContainer>
            <SectionTitle>후기(112개)</SectionTitle>
            <ItemList>
                {ReviewItems.map((item, index) => (
                    <ReviewItem key={index} name={item.name} icon={item.icon} rating={item.rating}
                                review={item.review}/>
                ))}
            </ItemList>
        </ReviewSectionContainer>
    );
};

export default SaleReviewSection;

const ReviewSectionContainer = styled.div`
    width: 100%;
    max-width: 480px;
    scroll-snap-align: start; /* 스냅 정렬 */
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    font-weight: 700;
    color: #323335;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    gap: 20px;
    overflow-x: auto; /* 가로 스크롤 활성화 */

    scroll-snap-type: x mandatory; /* 스크롤 스냅 활성화 */
    -webkit-overflow-scrolling: touch; /* 부드러운 스크롤 */

    &::-webkit-scrollbar {
        display: none; /* 스크롤 바 숨기기 */
    }
`;