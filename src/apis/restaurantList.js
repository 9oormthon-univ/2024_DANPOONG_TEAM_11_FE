import axiosInstance from './index.js';

export const getRestaurantList = async (page = 0, size = 10) => {
  try {
    const response = await axiosInstance.get('/api/restaurants', {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
