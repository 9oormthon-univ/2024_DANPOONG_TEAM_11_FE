import axiosInstance from './index.js';

export const getRestaurantDetail = async (restaurantId) => {
  try {
    const response = await axiosInstance.get(`/api/restaurants/${restaurantId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
