import axiosInstance from './index.js';

// 농산물 등록 API 요청 함수
export const registerIngredient = async (farmId, formData) => {
  try {
    const response = await axiosInstance.post(`/api/ingredients/${farmId}`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
        // Content-Type은 자동 설정되므로 추가하지 않음
      },
    });
    return response.data; 
  } catch (error) {
    console.error('API 요청 실패:', error);
    throw error; 
  }
};
