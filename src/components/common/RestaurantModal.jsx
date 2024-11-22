import React from 'react';
import styled from 'styled-components';
import Close from '../../assets/image/restaurant/close.png';

const RestaurantModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <Container onClick={(e) => e.stopPropagation()}>
                <CloseButton src={Close} onClick={onClose} />
                {children}
            </Container>
        </Overlay>
    );
};

export default RestaurantModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Container = styled.div`
    background: white;
    border-radius: 16px;
    width: 330px;
    height: 371px;
    max-width: 480px;
    padding: 20px;
    position: relative;
`;

const CloseButton = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 28px;
    height: 28px;
    cursor: pointer;
`;