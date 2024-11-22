import React from 'react';
import styled from 'styled-components';

const FilterButton = ({ isSelected, label, onClick }) => (
  <Button isSelected={isSelected} onClick={onClick}>
    {label}
  </Button>
);

export default FilterButton;

const Button = styled.button`
  padding: 0.3rem 0.9rem;
  border: 1px solid ${({ isSelected }) => (isSelected ? '#FFA726' : '#CECECF')};
  border-radius: 0.5rem;
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#545556')};
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.orange : theme.colors.white};
  cursor: pointer;

    &:focus {
    outline: none;
    border:  1px solid #CECECF;
  }
`;

// import React from 'react';
// import styled from 'styled-components';

// const FilterButton = ({ isSelected, label }) => (
//   <Button isSelected={isSelected}>
//     {label}
//   </Button>
// );

// export default FilterButton;

// const Button = styled.button`
//   padding: 0.3rem 0.9rem;
//   border: 1px solid ${({ isSelected }) => (isSelected ? '#FFA726' : '#CECECF')};
//   border-radius: 0.5rem;
//   color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#545556')};
//   background-color: ${({ isSelected, theme }) =>
//     isSelected ? theme.colors.orange : theme.colors.white};
//   cursor: pointer;

//   &:focus {
//     outline: none;
//   }
// `;
