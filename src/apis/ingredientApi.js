import axiosInstance from './index.js';

// 농산물 등록 API 요청 함수
export const registerIngredient = async (farmId, formData) => {
  try {
    const accessToken = localStorage.getItem('accessToken'); // 토큰 가져오기
    if (!accessToken) {
      throw new Error('로그인이 필요합니다.');
    }

    console.log('보낼 데이터:', formData);
    const response = await axiosInstance.post(`/api/ingredients/${farmId}`, formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // 토큰 추가
        'Content-Type': 'multipart/form-data', // 멀티파트 폼 데이터 설정
      },
    });
    return response.data;
  } catch (error) {
    console.error('API 요청 실패:', error.response?.data || error.message);
    throw error;
  }
};
