import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab, Box } from '@mui/material';

const CustomTabs = ({ activeTab, onChange }) => {
  return (
    <CustomBox>
      <StyledTabs value={activeTab} onChange={onChange}>
        <StyledTab label="지도보기" />
        <StyledTab label="목록보기" />
      </StyledTabs>
    </CustomBox>
  );
};

export default CustomTabs;

const CustomBox = styled(Box)`
    position: fixed; /* 화면에 고정 */
    top: 50px;
    width: 100%;
    max-width: 480px;
    z-index: 10;
    background-color: white;
    border-bottom: 1px solid #ddd;
`;

const StyledTabs = styled(Tabs)`
    .MuiTabs-indicator {
        background-color: #ffa726;
        height: 3px;
    }
`;

const StyledTab = styled(Tab)`
    color: gray !important;
    font-size: 12px;
    font-weight: 400 !important;
    flex: 1;
    text-align: center;

    &.Mui-selected {
        color: #ffa726 !important;
        font-weight: 500 !important;
    }
`;