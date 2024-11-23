import React from 'react';
import styled from 'styled-components';

const ProductCard = ({ product }) => {

    return (
        <Card>
            <ImageBox>
                <Image src={product.image} alt={product.name} />
            </ImageBox>
            <Name>{product.name}</Name>
            <Info>
                <Price>1kg 당 {product.price}원</Price>
            </Info>
        </Card>
    )
};

export default ProductCard;

const Card = styled.div`
  border: 1px solid #DDD;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImageBox = styled.div`
  width: 100%;
  height: 11.8rem;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  margin-left: 0.7rem;
  margin-bottom: 0.2rem;
  padding: 0.7rem 0.1rem 0 0.1rem;
  font-weight: bold;
  color: #323335;
`;

const Info = styled.div`
  display: flex;
  padding: 0.75rem 0.8rem;
  color: ${({ theme }) => theme.colors.orange};
  gap: 0.7rem;
`;



const Price = styled.span`
  font-size: 0.9rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 0.5rem;
  padding: 0.3rem 0.7rem;
`;