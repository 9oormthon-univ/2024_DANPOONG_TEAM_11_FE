import React, { useState } from "react";
import styled from "styled-components";
import DownArrow from "../../assets/image/common/down.svg";

const BusinessInfoSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <SectionContainer>
            <SectionHeader onClick={toggleSection}>
                <Title>사업자정보</Title>
                <Arrow src={DownArrow} isOpen={isOpen} />
            </SectionHeader>
            {isOpen && (
                <Details>
                    <DetailItem>
                        <Label>상호명</Label>
                        <Value>모먼트</Value>
                    </DetailItem>
                    <DetailItem>
                        <Label>사업장 소재지</Label>
                        <Value>경기도 용인시 수지구 호수로 126번길 14-1</Value>
                    </DetailItem>
                    <DetailItem>
                        <Label>대표자</Label>
                        <Value>김순간</Value>
                    </DetailItem>
                    <DetailItem>
                        <Label>고객센터</Label>
                        <Value>010-8989-2323</Value>
                    </DetailItem>
                </Details>
            )}
        </SectionContainer>
    );
};

export default BusinessInfoSection;

const SectionContainer = styled.div`
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
`;

const Title = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #333;
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
    color: #333;
    flex: 1; /* Label이 일정한 공간 차지 */
`;

const Value = styled.span`
    color: #555;
    text-align: right; /* Value를 오른쪽 정렬 */
    flex: 2; /* Value가 더 넓은 공간 차지 */
`;