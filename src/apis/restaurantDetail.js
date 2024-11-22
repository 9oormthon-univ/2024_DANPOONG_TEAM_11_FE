import axiosInstance from './index.js';

export const getRestaurantDetail = async (restaurantId) => {
  try {
    if (!restaurantId) throw new Error('restaurantId is required');
    const response = await axiosInstance.get(`/api/restaurants/${restaurantId}`);
    return response.data;
  } catch (error) {
    console.error(`레스토랑 상세 정보를 가져오는 데 실패했습니다:`, error);
    throw error;
  }
};
