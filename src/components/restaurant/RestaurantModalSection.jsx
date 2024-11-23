import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from '../common/RestaurantModal.jsx';
import RightButton from '../../assets/image/restaurant/right.png';

const RestaurantModalSection = ({mainMenuImage, menu, name, image1, image2, guide}) => {
    const [activeModal, setActiveModal] = useState(null);

    const handleOpenModal = (type) => {
        setActiveModal(type);
    };

    const handleCloseModal = () => {
        setActiveModal(null);
    };

    return (
        <Container>
            <SectionTitle>상세설명</SectionTitle>
            <MenuSection onClick={() => handleOpenModal('description')}>
                <Image src={image1} alt="menu image" />
                <Description>
                    <TextLine>
                        <Highlighted>{menu[0].farmProduce}</Highlighted>
                        <span>(으)로 만든</span>
                    </TextLine>
                    <MenuName>{menu[0].name}</MenuName>
                </Description>
                <ButtonImage src={RightButton} alt="right button" />
            </MenuSection>
            <InfoSection>
                <OtherMenu onClick={() => handleOpenModal('menu')}>{name}의 <br/> 다른메뉴</OtherMenu>
                <Guide onClick={() => handleOpenModal('guide')}>안내사항</Guide>
            </InfoSection>

            {/* 모달 창 */}
            <Modal isOpen={activeModal === 'description'} onClose={handleCloseModal}>
                <ModalContent>
                    <ModalImage src={mainMenuImage}/>
                    <Divider/>
                    <ModalText>
                        <MainDescription>{menu[0].mainDescription}</MainDescription>
                        <SubDescription>{menu[0].subDescription}</SubDescription>
                    </ModalText>
                </ModalContent>
            </Modal>

            <Modal isOpen={activeModal === 'menu'} onClose={handleCloseModal}>
                <ModalContent>
                    <ModalImage src={image2} alt="Dish"/>
                    <DividerContainer>
                        <DividerLine/>
                        <DividerText>MENU</DividerText>
                        <DividerLine/>
                    </DividerContainer>
                    <OtherMenuSection>
                        {menu.slice(1).map((item, index) => (
                            <MenuItem key={index + 1}>
                                <span>{item.name}</span>
                                <span>₩{item.price.toLocaleString()}</span>
                            </MenuItem>
                        ))}
                    </OtherMenuSection>
                </ModalContent>
            </Modal>

            <Modal isOpen={activeModal === 'guide'} onClose={handleCloseModal}>
                <ModalContent>
                    <GuideSection>
                        {guide.map((item, index) => (
                            <GuideItem key={index}>
                                {item.split('\n').map((line, i) => (
                                    <div key={i}>{line}</div>
                                ))}
                            </GuideItem>
                        ))}
                    </GuideSection>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default RestaurantModalSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`;

const SectionTitle = styled.h2`
    font-size: 16px;
    font-weight: 600;
    color: #333;
`;

const Divider = styled.div`
    width: 278px;
    height: 1px;
    background-color: #FFA726;
    margin: 15px;
`;


const MenuSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 110px;
    background-color: #fff7ec;
    border-radius: 8px;
    cursor: pointer;
`;
const Image = styled.img`
    border-radius: 100px;   
    width: 60px; 
    height: 60px; 
    object-fit: cover; 
`;


const Description = styled.div`
    display: flex;
    flex-direction: column; /* 텍스트를 세로로 배치 */
    align-items: flex-start; /* 왼쪽 정렬 */
    font-size: 16px;
    color: #333;
    gap: 4px; /* 텍스트 간격 */
`;

const TextLine = styled.div`
    display: flex;
    align-items: center;
    gap: 4px; /* 아이콘과 텍스트 간격 */
    flex-direction: row;
`;

const Highlighted = styled.span`
    font-weight: 500;
    color: #ffa500;
`;

const MenuName = styled.span`
    font-weight: 600;
    font-size: 18px;
    color: #333;
    margin-top: 8px; /* 메뉴 이름과 위 텍스트 간격 */
`;

const ButtonImage = styled.img`
    width: 30px;
    height: 30px;
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
    background-color: #fff7ec;
    cursor: pointer;
`;

const Guide = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 500;
    width: 50%;
    height: 110px;
    background-color: #fff7ec;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

// 모달 내용 스타일
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 모든 자식 요소 수평 중앙 정렬 */
    justify-content: center; /* 모든 자식 요소 수직 중앙 정렬 */
    gap: 16px;
    width: 100%;
    height: 100%; /* 모달의 전체 높이에 맞춤 */
    padding: 15px;
    box-sizing: border-box;
`;

const ModalImage = styled.img`
    width: 244px;
    height: 157px;
    border-radius: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    object-fit: cover;
`;

const ModalText = styled.div`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 텍스트를 왼쪽 정렬 */
    gap: 8px; 
    text-align: left; /* 텍스트 왼쪽 정렬 */
`;

const MainDescription = styled.div`
    font-weight: 500;
    color: black; /* 일반 텍스트 색상 */
    //word-break: keep-all; /* 텍스트 줄바꿈 방지 */
`;

const SubDescription = styled.div`
    font-weight: normal;
    color: gray; /* 부가 설명용 텍스트 색상 */
    line-height: 1.5; /* 줄 간격 */
    word-break: keep-all; /* 텍스트 줄바꿈 방지 */
`;

const OtherMenuSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const MenuItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    padding: 0 50px; 
`;
const DividerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    gap: 10px;
`;

const DividerLine = styled.div`
    width: 100px;
    height: 1px;
    background-color: #FFA726;
`;

const DividerText = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #FFA726;
`;

const GuideSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* 수평 중앙 정렬 */
    gap: 10px;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

const GuideItem = styled.li`
    font-size: 16px;
    color: black;
    list-style: none; /* 기본 리스트 스타일 제거 */
    display: flex;
    justify-content: center;
    align-items: center; 
    text-align: center;
    margin-bottom: 8px;
    position: relative; /* ::before 사용을 위한 상대 위치 지정 */
    padding-left: 20px; /* 아이콘(점)과 텍스트 간격 */

    /* 리스트 스타일 대체 */
    &::before {
        content: '•'; /* 리스트 아이콘 */
        color: #FFA500; /* 강조 색상 */
        font-size: 20px;
        position: absolute;
        left: 0; /* 텍스트 왼쪽에 위치 */
    }
`;