import axiosInstance from './index.js';

// 요식업 종사자 등록 API
export const registerRestaurant = async (form, accessToken) => {
  try {
    const response = await axiosInstance.post(
      '/api/restaurants',
      {
        restaurantName: form.shopName,
        restaurantRepresentative: form.representativeName,
        phoneNumber: form.contactNumber,
        businessRegistrationNumber: form.registrationNumber,
        address: form.address,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('요식업 종사자 등록 실패:', error.response?.data || error.message);
    throw error;
  }
};
