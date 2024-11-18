import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackButton from'../../assets/image/backButton.svg';

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <ButtonContainer onClick={() => navigate(-1)}>
        <img src={BackButton} alt="Back" />
      </ButtonContainer>
      {title && <Title>{title}</Title>}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    top: 0;
    align-items: center;
    padding: 0 1rem;
    z-index: 10;
    width: 100%;
    max-width: 480px;
    height: 50px; /* 필요에 따라 높이 조정 */
    background-color: ${({ theme }) => theme.colors.white || '#ffffff'};
`;

const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black || '#000000'};

    &:hover {
        opacity: 0.8;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        cursor: pointer;
    }
`;



const Title = styled.h1`
    flex: 1;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black || '#000000'};
`;