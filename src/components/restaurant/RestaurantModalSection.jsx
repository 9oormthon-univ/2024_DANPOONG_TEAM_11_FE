import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../common/RestaurantModal.jsx';
import RightButton from '../../assets/image/restaurant/right.png';

const RestaurantModalSection = ({ description, name, image1, image2, menu, guide}) => {
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
                <Image src={image1} />
                <Description>{description}</Description>
                <ButtonImage src={RightButton} />
            </MenuSection>
            <InfoSection>
                <OtherMenu onClick={() => handleOpenModal('menu')}>{name}의 <br /> 다른메뉴</OtherMenu>
                <Guide onClick={() => handleOpenModal('guide')}>안내사항</Guide>
            </InfoSection>

            {/* 모달 창 */}
            <Modal isOpen={activeModal === 'description'} onClose={handleCloseModal}>
                <ModalContent>
                    <ModalImage src={image2} />
                    <Divider />
                    <ModalText>{description}</ModalText>
                </ModalContent>
            </Modal>

            <Modal isOpen={activeModal === 'menu'} onClose={handleCloseModal}>
                <ModalContent>
                    <ModalImage src={image2} alt="Dish" />
                    <DividerContainer>
                        <DividerLine />
                        <DividerText>MENU</DividerText>
                        <DividerLine />
                    </DividerContainer>
                    <OtherMenuSection>
                        {menu.map((item, index) => (
                            <MenuItem key={index}>
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
                        {guide.map((info, index) => (
                            <GuideItem key={index}>{info}</GuideItem>
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
    width: 50px;
    height: 50px;

`;

const Description = styled.div`
    display: flex;
    gap: 20px;
    font-weight: 500;
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
    padding: 20px;
    gap: 16px;
    align-items: center;
    justify-content: center;
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
  color: #333;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const OtherMenuSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const MenuItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 16px;
    
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
    justify-content: center; /* 수직 중앙 정렬 */
    align-items: center; /* 수평 중앙 정렬 */
    gap: 10px;
    width: 100%;
    height: 100%; /* 부모 요소의 크기에 의존 */
    padding: 20px; /* 여백 추가 */
    box-sizing: border-box; /* padding 포함 */
`;

const GuideItem = styled.li`
    font-size: 16px;
    color: #555;
    list-style-type: disc;
    list-style-position: inside;
    text-align: center;
    width: 100%;
`;