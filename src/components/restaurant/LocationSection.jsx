import styled from 'styled-components';
import Pin from '../../assets/image/restaurant/pin.svg';

const LocationSection = () => {
    return (
        <LocationContainer>
            <ImageSection>
                <Image src={Pin} alt="pin" />
            </ImageSection>
            <Text>경기도 용인시 수지구 호수로96번길 7</Text>
        </LocationContainer>
    );
};

export default LocationSection;

const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    position: fixed;
    top: 98px;
    z-index: 10;
    background-color: white;
    width: 100%;
    max-width: 480px;
`;

const ImageSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
`;

const Image = styled.img` 
    width: 30px;
    height: 30px;
`;

const Text = styled.div`
    font-size: 12px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    color: #323335;
`;