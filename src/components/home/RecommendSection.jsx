import React from 'react';
import styled from 'styled-components';
import RecommendItem from './RecommendItem.jsx';
import { Link } from 'react-router-dom';
import home1 from '../../assets/image/home/home_1.svg';
import home2 from '../../assets/image/home/home_2.svg';
import home3 from '../../assets/image/home/home_3.svg';
import home4 from '../../assets/image/home/home_4.svg';
import home1_1 from '../../assets/image/home/home_1_1.svg';
import home2_2 from '../../assets/image/home/home_2_2.svg';
import home3_3 from '../../assets/image/home/home_3_3.svg';
import home4_4 from '../../assets/image/home/home_4_4.svg';
import home5_5 from '../../assets/image/home/home_5_5.svg';

const RecommendSection = ({ title, type }) => {
  const recommendedItems = [
    { title: '양파', icon: home1, path: '/onion' },
    { title: '배추', icon: home2, path: '/cabbage' },
    { title: '토마토', icon: home3, path: '/tomato' },
    { title: '당근', icon: home4, path: '/carrot' },
  ];

  const rejectedItems = [
    { title: '작아요', icon: home1_1, path: '/small' },
    { title: '색이 변했어요', icon: home2_2, path: '/color-changed' },
    { title: '울퉁불퉁해요', icon: home3_3, path: '/bumpy' },
    { title: '상처났어요', icon: home4_4, path: '/bruised' },
    { title: '모양이 달라요', icon: home5_5, path: '/different-shape' },
  ];

  const items = type === 'recommended' ? recommendedItems : rejectedItems;

  return (
    <RecommendSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <ItemList>
        {items.map((item, index) => (
          <Link key={index} to={item.path}>
            <RecommendItem title={item.title} icon={item.icon} />
          </Link>
        ))}
      </ItemList>
    </RecommendSectionContainer>
  );
};

export default RecommendSection;

const RecommendSectionContainer = styled.div`
    width: 100%;
    max-width: 480px;
    margin-top: 35px;
`;

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: #323335;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px 5px;
    margin-top: 10px;
    overflow-x: auto; /* 가로 스크롤 활성화 */
    -webkit-overflow-scrolling: touch; /* iOS에서 부드러운 스크롤 */
    
    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #c4c4c4;
    }
    &::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }
`;
