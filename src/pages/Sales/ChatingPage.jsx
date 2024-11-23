import React from 'react';
import styled from 'styled-components';
import chatingImage from '../../assets/image/sales/chatImage.png';

const ChatingPage = () => {
    return (
        <PageContainer>
            <ChatImage src={chatingImage} alt="채팅 페이지" />
        </PageContainer>
    );
};

export default ChatingPage;

const PageContainer = styled.div`
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
`;

const ChatImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover; 
`;