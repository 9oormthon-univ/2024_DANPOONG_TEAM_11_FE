import React from "react";
import styled from "styled-components";

const NotoggleSaleInfoSection = () => {
    return (
        <SectionContainer>
            <SectionHeader>
                <Title>판매자정보</Title>
            </SectionHeader>
            <Details>
                <DetailItem>
                    <Label>상호명</Label>
                    <Value>전남손맛</Value>
                </DetailItem>
                <DetailItem>
                    <Label>사업장 소재지</Label>
                    <Value>전라남도 무안군 무안읍 무안호 530</Value>
                </DetailItem>
                <DetailItem>
                    <Label>대표자</Label>
                    <Value>김태지</Value>
                </DetailItem>
                <DetailItem>
                    <Label>고객센터</Label>
                    <Value>010-1234-5678</Value>
                </DetailItem>
            </Details>
        </SectionContainer>
    );
};

export default NotoggleSaleInfoSection;

const SectionContainer = styled.div`
    width: 100%;
    // border-radius: 8px;
    overflow: hidden;
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    padding-top: 0;
`;

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 800;
    color: #323335;
    padding-top: 0.5rem;
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