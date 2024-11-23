import React, { useState } from "react";
import styled from "styled-components";
import DownArrow from "../../assets/image/common/down.svg";

const SaleInfoSection = ({name, address, phoneNumber, representative}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <SectionContainer>
            <SectionHeader onClick={toggleSection}>
                <Title>판매자정보</Title>
                <Arrow src={DownArrow} isOpen={isOpen} />
            </SectionHeader>
            {isOpen && (
                <Details>
                    <DetailItem>
                        <Label>상호명</Label>
                        <Value>{name}</Value>
                    </DetailItem>
                    <DetailItem>
                        <Label>사업장 소재지</Label>
                        <Value>{address}</Value>
                    </DetailItem>
                    <DetailItem>
                        <Label>대표자</Label>
                        <Value>{representative}</Value>
                    </DetailItem>
                    <DetailItem>
                        <Label>고객센터</Label>
                        <Value>{phoneNumber}</Value>
                    </DetailItem>
                </Details>
            )}
        </SectionContainer>
    );
};

export default SaleInfoSection;

const SectionContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 0;
    cursor: pointer;
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 800;
    color: #323335;
    padding-top: 0.5rem;
`;

const Arrow = styled.img` /* img로 변경 */
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.3s ease;
    width: 30px;
    height: 30px;
`;

const Details = styled.div`
    padding: 10px 20px;
    background-color: #fff;
`;

const DetailItem = styled.div`
    display: flex;
    flex-direction: row; /* 가로 정렬 */
    justify-content: space-between; /* Label과 Value 양 끝 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
    margin-bottom: 8px;
    font-size: 14px;
    color: #555;
    padding-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const Label = styled.span`
    font-weight: 600;
    color: #545556;
    flex: 1; /* Label이 일정한 공간 차지 */
`;

const Value = styled.span`
    color: #545556;
    text-align: left; /* Value를 오른쪽 정렬 */
    flex: 2; /* Value가 더 넓은 공간 차지 */
`;