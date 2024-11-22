import axiosInstance from './index.js';

export const getRestaurantList = async (page = 0, size = 10) => {
  try {
    const response = await axiosInstance.get('/api/restaurants', {
      params: { page, size }, // 쿼리 파라미터 전달
    });
    return response.data; // 응답 데이터 반환
  } catch (error) {
    throw error; // 에러 발생 시 throw
  }
};
