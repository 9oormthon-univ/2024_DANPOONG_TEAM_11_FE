import styled from 'styled-components';

const DescriptionDetail = ({ icon, text }) => {
  return (
    <DetailSection>
      <Image src={icon} />
      <Text>{text}</Text>
    </DetailSection>
  );
}

export default DescriptionDetail;

const DetailSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 480px;
  gap: 10px;
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
`;

const Text = styled.div`
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  color: #323335;
`;