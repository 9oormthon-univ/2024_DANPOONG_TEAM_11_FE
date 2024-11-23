import axiosInstance from './index.js';

export const getSaleDetail = async (ingredientId) => {
  try {
    const response = await axiosInstance.get(`/api/ingredients/${ingredientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
