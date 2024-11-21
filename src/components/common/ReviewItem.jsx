import styled from 'styled-components';

const ReviewItem = ({ name, icon, review, rating }) => {
    return (
        <ReviewCard>
            <ProfileSection>
                <ItemIcon src={icon} alt={`${name}의 프로필 사진`} />
                <Name>{name}</Name>
            </ProfileSection>
            <RatingSection>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i}>★</StarIcon>
                    ))}
            </RatingSection>
            <ReviewSection>{review}</ReviewSection>
        </ReviewCard>
    );
};

export default ReviewItem;

const ReviewCard = styled.div`
    width: 181px; /* 고정된 가로 길이 */
    height: 200px; /* 고정된 높이 */
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 18px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0; /* 부모에 의해 크기 줄어들지 않음 */
    align-items: center;
    box-sizing: border-box; /* 패딩 포함 크기 계산 */
`;

const ProfileSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const ItemIcon = styled.img`
    width: 33px;
    height: 33px;
    border-radius: 100%;
    object-fit: cover;

`;

const Name = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #333;
`;

const RatingSection = styled.div`
    display: flex;
    justify-content: flex-start; 
    gap: 4px; /* 별 간격 */
    margin-top: 10px;
    width: 100%;
    overflow: hidden; 
`;

const ReviewSection = styled.p`
    font-size: 14px;
    color: #555;
    line-height: 1.5;
    text-align: center;
    height: auto;
    margin-top: 10px;

    /* 텍스트가 너무 길 경우 줄 수 제한 후 "..." 처리 */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
const StarIcon = styled.span`
    font-size: 20px;
    color: #f4c150; /* 별 색상 */
`;