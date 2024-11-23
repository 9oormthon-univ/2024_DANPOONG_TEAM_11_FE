import axiosInstance from './index.js';

export const getGpt = async (ingredientId) => {
  try {
    const response = await axiosInstance.get(`/api/ingredients/${ingredientId}/gpt`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
