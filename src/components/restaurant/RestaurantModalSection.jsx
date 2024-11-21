import styled from 'styled-components';
import RightButton from '../../assets/image/restaurant/right.png';

const RestaurantModalSection = ({description, name, image}) => {
    return (
        <Container>
            <SectionTitle>상세설명</SectionTitle>
            <MenuSection>
                <Image src={image}/>
                <Description>
                    {description}
                </Description>
                <ButtonImage src={RightButton}/>
            </MenuSection>
            <InfoSection>
                <OtherMenu name={name}>{name}의 <br/> 다른메뉴 </OtherMenu>
                <Guide>안내사항</Guide>
            </InfoSection>
        </Container>
    );
};

export default RestaurantModalSection;

const SectionTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #333;
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`;

const MenuSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
    background-color: #FFF7EC;
    border-radius: 8px;
`;

const Image = styled.img`
    border-radius: 100px;
    width: 50px;
    height: 50px;
`;

const ButtonImage = styled.img`
    width: 30px;
    height: 30px;

`;

const Description = styled.div`
    display: flex;
    gap: 20px;
    font-weight: 500;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
`;

const OtherMenu = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    line-height: 1.5rem;
    width: 50%;
    height: 110px;
    background-color: #FFF7EC;

`;

const Guide = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    width: 50%;
    height: 110px;
    background-color: #FFF7EC;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;


