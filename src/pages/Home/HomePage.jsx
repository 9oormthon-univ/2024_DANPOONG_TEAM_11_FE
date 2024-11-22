import styled from 'styled-components';
import HomeScreen from '../../components/home/HomeScreen.jsx';

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeScreen />
    </HomeContainer>
  );
}

export default HomePage;

const HomeContainer = styled.div`
    width: 100%;
    max-width: 480px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
`;
