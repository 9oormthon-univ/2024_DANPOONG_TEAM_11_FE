import React, { useState } from 'react';
import styled from 'styled-components';

const UserSelectionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { emoji: '👨🏻‍🌾', label: '농산물 생산자' },
    { emoji: '🧑🏻‍🍳', label: '요식업 종사자' },
    { emoji: '🙋🏻‍♀️', label: '일반 사용자' },
  ];

  const handleOptionClick = (index) => {
    // 선택된 옵션을 다시 클릭하면 선택 해제
    if (selectedOption === index) {
      setSelectedOption(null);
    } else {
      setSelectedOption(index);
    }
  };
  
  const handleNextClick = () => {
    if (selectedOption !== null) {
      // 다음 단계로 이동하는 로직 여기에 추가 예정!
      console.log(`선택된 옵션: ${options[selectedOption].label}`);
    }
  };

  return (
    <Container>
      <Title><User>사용자</User>를 선택해 주세요.</Title>
      <Options>
        {options.map((option, index) => (
          <Option
            key={index}
            isSelected={selectedOption === index}
            onClick={() => handleOptionClick(index)}
          >
            <Emoji>{option.emoji}</Emoji>
            <OptionText>{option.label}</OptionText>
          </Option>
        ))}
      </Options>
      <NextButton onClick={handleNextClick} disabled={selectedOption === null}>
        다음
      </NextButton>
    </Container>
  );
};

export default UserSelectionPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 30rem; //480px
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 6rem 0;
  padding-bottom: 7.5rem;
`;

const Title = styled.h1`
  font-size: 1.25rem; 
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3rem; 
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem; 
  flex-wrap: wrap;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  border: 0.125rem solid ${({ theme }) => theme.colors.orange};
  border: ${({ isSelected }) => (isSelected ? 'none' : '0.11rem solid #FFA726')};
  border-radius: 0.625rem;
  width: 5.203rem; 
  height: 7rem;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); 
  // background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.orange : 'white')};
  background-color: ${({ isSelected }) => (isSelected ? '#FFEFD9' : '#fff')};
  
  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); 
    background-color: '#FFEFD9';
  }
`;


const User = styled.span`
  font-size: 1.25rem; 
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 3rem; 
`;

const Emoji = styled.span`
  font-size: 2.8rem; 
  margin-bottom: 0.85rem; 
`;

const OptionText = styled.p`
  font-size: 0.688rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

const NextButton = styled.button`
  margin-top: 4rem;
  width: 21.769rem;
  padding: 0.95rem;
  font-size: 1rem;
  color: white;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.button : theme.colors.orange)};
  border: none;
  border-radius: 0.5rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3); 

  &:hover {
    background-color: ${({ theme, disabled }) => !disabled && theme.colors.orange};
  }
`;