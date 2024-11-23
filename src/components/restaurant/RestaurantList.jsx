import React from 'react';
import styled from 'styled-components';
import RestaurantItem from './RestaurantItem';
import {useQuery} from "@tanstack/react-query";
import {getRestaurantList} from "../../apis/restaurantList.js";

const RestaurantList = () => {

    const {data, isPending, error} = useQuery({
        queryKey: ['restaurantList'], // 캐싱 Key
        queryFn: () => getRestaurantList(0, 10), // 기본 페이지와 크기 설정
    });

    if (isPending) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>데이터를 가져오는 중 에러가 발생했습니다.</div>;
    }

    const restaurants = data?.data?.restaurantTagResponseDTOs || [];

    return (
        <ListContainer>
            {restaurants.map((restaurant) => (
                <RestaurantItem
                    key={restaurant.restaurantId} // Key로 유니크 값 전달
                    id={restaurant.restaurantId}
                    image={restaurant.restaurantImage}
                    name={restaurant.restaurantName}
                    address={restaurant.address}
                    farmProduce={restaurant.farmProduce}
                    menuName={restaurant.menuName}
                />
            ))}
        </ListContainer>
    );
};

export default RestaurantList;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    max-width: 480px;
    gap: 16px;
    padding: 16px;
`;