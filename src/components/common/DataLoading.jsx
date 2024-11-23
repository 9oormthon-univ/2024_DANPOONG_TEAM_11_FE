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
                height={15}
                width={5}
                margin={2}
                radius={2}
            />
        </LoadingContainer>
    );
};

export default DataLoading;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: white; 
`;