import apiClient from './apiClient';

// 농산물 등록 API 요청 함수
export const registerIngredient = async (farmId, formData) => {
    if (!farmId) throw new Error('farmId is required.');
    if (!formData || !(formData instanceof FormData)) {
      throw new Error('Valid FormData is required.');
    }
  
    try {
      const response = await apiClient.post(`/api/ingredients/${farmId}`, formData);
      return response.data;
    } catch (error) {
      console.error('API 요청 실패:', error);
      throw error;
    }
  };
  