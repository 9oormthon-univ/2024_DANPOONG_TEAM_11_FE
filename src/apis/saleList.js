import axiosInstance from './index.js';

export const getSalesList = async (category = '전체', region = '전체', page = 0, size = 10) => {
  try {
    const response = await axiosInstance.get('/api/ingredients', {
      params: {
        category,
        region,
        page,
        size,
      },
    });
    return response.data;
  } catch (error) {
    console.error('식료품 리스트를 가져오는 중 오류 발생:', error);
    throw error;
  }
};
