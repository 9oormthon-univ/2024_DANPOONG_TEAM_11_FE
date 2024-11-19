import styled from 'styled-components';

const HomePage = () => {
  return (
    <HomeContainer>
      <p>home</p>
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
