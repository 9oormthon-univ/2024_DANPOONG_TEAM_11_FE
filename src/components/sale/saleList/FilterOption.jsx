import React from 'react';
import styled from 'styled-components';

const FilterOption = ({ selected, onClick, children }) => (
  <Option selected={selected} onClick={onClick}>
    {children}
  </Option>
);

export default FilterOption;

const Option = styled.button`
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ selected }) => (selected ? '#FFA726' : '#CECECF')};
  border-radius: 0.5rem;
  color: ${({ selected }) => (selected ? '#FFA500' : '#545556')};
  background: ${({ selected }) => (selected ? '#FFF2D7' : 'white')};
  cursor: pointer;

    &:focus {
    outline: none;
    border:  1px solid #FFA726;
  }
`;