import { FadeLoader } from 'react-spinners';
import styled from 'styled-components';

const DataLoading = () => {
    return (
        <LoadingContainer>
            <span role="status" aria-live="polite" style={{ visibility: 'hidden' }}>
        Loading...
      </span>
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