import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';


const RestaurantItem = ({ id, image, name, tags }) => {
  const nav = useNavigate();
  return (
    <RestaurantItemContainer onClick={() => {nav(`/details/restaurant/${id}`);}} >
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <Content>
        <Name>{name}</Name>
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      </Content>
    </RestaurantItemContainer>
  );
};

export default RestaurantItem;

const RestaurantItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 16px 0;
    width: 100%;
    max-width: 480px;
    height: 274px;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 190px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    padding: 16px;
`;

const Name = styled.h3`
    font-size: 20px;
    font-weight: 500;
    color: #333;
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 15px;
    gap: 8px;
`;

const Tag = styled.span`
    background-color: #ffa500;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
`;