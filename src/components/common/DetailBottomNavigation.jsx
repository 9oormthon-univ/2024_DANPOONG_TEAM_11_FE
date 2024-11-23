import styled from 'styled-components';
import heart from '../../assets/image/heart.svg';

const DetailBottomNavigation = ({ buttons }) => {
    return (
        <NavigationContainer>
            <NavItem>
                <IconImage src={heart} alt="Heart" />
            </NavItem>
            <ButtonContainer>
                {buttons.map((button, index) => (
                    <ButtonSection key={index} onClick={button.onClick}>
                        <NavText>{button.label}</NavText>
                    </ButtonSection>
                ))}
            </ButtonContainer>
        </NavigationContainer>
    );
};

export default DetailBottomNavigation;

const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 480px;
    height: 100px;
    background-color: white;
    padding: 10px 20px;
    border-top: 1px solid #e0e0e0;
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px; /* 버튼 사이의 간격 */
    margin-left: 20px; /* 하트와 버튼 사이 간격 */
    flex-grow: 1;
    justify-content: center;
`;

const ButtonSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.main};
    flex-grow: 1;
    height: 38px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const IconImage = styled.img`
    width: 38px; 
    height: 38px;
    cursor: pointer;
`;

const NavText = styled.p`
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    color: white;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    align-items: center;
`;