import styled from 'styled-components';


const RecommendItem = ({ title, icon }) => {
  return (
    <ItemCard>
      <IconSection>
        <ItemIcon src={icon} alt={title} />
      </IconSection>
      <TitleSection>
        <ItemTitle>{title}</ItemTitle>
      </TitleSection>
    </ItemCard>
  );
};

export default RecommendItem;

const ItemCard = styled.div`
  width: 85px;
  max-width: 85px;
  height: 110px;
  background-color: #EDEDED;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const IconSection = styled.div`
  display: flex;  
  width: 85px;
  height: 80px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ItemIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const TitleSection = styled.div`
    width: 85px;
    height: 30px;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 0 0 8px 8px;
    text-align: center;
`;

const ItemTitle = styled.p`
  font-size: 12px;
  font-family: 'Noto Sans KR', sans-serif;
  color: #545556;
  font-weight: 500;
`;