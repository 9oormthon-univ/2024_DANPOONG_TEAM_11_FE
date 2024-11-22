import React from 'react';
import styled from 'styled-components';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ restaurants }) => {
  return (
    <ListContainer>
      {restaurants.map((restaurant, key) => (
        <RestaurantItem
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.image.main}
          name={restaurant.name}
          tags={restaurant.tags}
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