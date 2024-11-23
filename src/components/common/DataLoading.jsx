import { FadeLoader } from 'react-spinners';
import styled from 'styled-components';

const DataLoading = () => {
    return (
        <LoadingContainer>
            <FadeLoader
                color= "#FFD700"
            />
        </LoadingContainer>
    );
};

export default DataLoading;

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;