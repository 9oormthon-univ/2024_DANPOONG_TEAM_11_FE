import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import Check from "../../../assets/image/sales/gpt2.png";
import DataLoading from "../../common/DataLoading.jsx";
import { getGpt } from "../../../apis/saleGpt.js";

const GptSection = ({ ingredientName, ingredientId }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const { data, isFetching, refetch } = useQuery({
        queryKey: ["gptAnswer", ingredientId],
        queryFn: () => getGpt(ingredientId),
        enabled: false, // 기본적으로 비활성화
    });

    const handleCheckAnswer = async () => {
        setShowAnswer(true);
        await refetch(); // AI 답변 호출
    };

    const answerText = data?.data.content || ""; // 기본값 추가
    const paragraphs = answerText.split("\n\n"); // \n\n 기준으로 단락 나누기

    return (
        <SectionContainer>
            <QuestionText>
                "<Highlight>{ingredientName}</Highlight>",<br /> 지금 사도 될까?
            </QuestionText>
            <SubText>
                지금 보고 있는 상품이 신선한지,<br />가격은 적당한지 궁금하다면?
            </SubText>
            {!showAnswer ? (
                <CheckAnswerButton onClick={handleCheckAnswer} disabled={isFetching}>
                    <Image src={Check} />
                    {isFetching ? "AI 답변 준비 중..." : "AI 답변 확인하기"}
                </CheckAnswerButton>
            ) : (
                <AnswerContainer>
                    {isFetching ? (
                        <DataLoading />
                    ) : (
                        <>
                            <AnswerTitle>🤖 AI 답변</AnswerTitle>
                            {paragraphs.map((paragraph, index) => (
                                <AnswerText key={index}>{paragraph}</AnswerText>
                            ))}
                        </>
                    )}
                </AnswerContainer>
            )}
        </SectionContainer>
    );
};

export default GptSection;

// 스타일 컴포넌트
const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    background-color: #fcf4e8;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Highlight = styled.span`
    color: #ff9800;
    font-weight: 500;
`;

const QuestionText = styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 10px;
    color: #333;
`;

const SubText = styled.p`
    font-size: 0.9rem;
    margin-bottom: 20px;
    color: #666;
    line-height: 1.5;
`;

const Image = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`;

const CheckAnswerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: white;
    background-color: #ffa726;
    border: none;
    padding: 0.7rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #ff9800;
    }

    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
`;

const AnswerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 20px;
    padding: 0.5rem;
    border: 1px solid #FFA726;
    border-radius: 8px;
    line-height: 1.5;
`;

const AnswerTitle = styled.h4`
    font-size: 1rem;
    font-weight: 500;
    color: black;
    margin-bottom: 8px;
`;

const AnswerText = styled.p`
    font-size: 0.9rem;
    color: black;
    margin-bottom: 10px; /* 단락 간 간격 추가 */
`;

const Arrow = styled.div`
    font-size: 1.2rem;
    text-align: center;
    margin-top: 10px;
    color: #999;
`;