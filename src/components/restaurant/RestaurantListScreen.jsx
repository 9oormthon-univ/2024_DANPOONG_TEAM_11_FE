import React, { useState } from 'react';
import styled from 'styled-components';
import Map from '../../apis/kakao/Map.jsx';
import LocationSection from './LocationSection.jsx';
import RestaurantList from './RestaurantList.jsx';
import CustomTabs from '../common/CustomTabs.jsx'; // 분리된 컴포넌트 import
import restaurants  from '../../apis/mock/restaurants.js';


const RestaurantsListScreen = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <ScreenContainer>
            <CustomTabs activeTab={activeTab} onChange={handleChange} />
            <TabContent>
                {activeTab === 0 && (
                    <>
                        <LocationSection />
                        <MapContainer>
                            <Map />
                        </MapContainer>
                    </>
                )}
                {activeTab === 1 && <RestaurantList />}
            </TabContent>
        </ScreenContainer>
    );
};

export default RestaurantsListScreen;

const ScreenContainer = styled.div`
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    padding-top: 50px;
`;

const MapContainer = styled.div`
    width: 100%;
    max-width: 480px;
    height: calc(100vh - 100px); /* 전체 뷰 높이에서 네비게이션 높이를 제외 */
`;

const TabContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;