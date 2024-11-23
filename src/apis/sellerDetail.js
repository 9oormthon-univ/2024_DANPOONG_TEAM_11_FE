import axiosInstance from './index.js';

export const getFarmDetail = async (farmId) => {
  try {
    const response = await axiosInstance.get(`/api/farms/${farmId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
