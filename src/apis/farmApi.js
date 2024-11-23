import axiosInstance from './index.js';

// 농산물 생산자 등록 API 
export const registerFarm = async (form, accessToken) => {
  try {
    const response = await axiosInstance.post(
      '/api/farms',
      {
        farmName: form.shopName,
        farmRepresentative: form.representativeName,
        phoneNumber: form.contactNumber,
        businessRegistrationNumber: form.registrationNumber,
        address: form.address,
        latitude: 0, 
        longitude: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('농산물 생산자 등록 실패:', error.response?.data || error.message);
    throw error;
  }
};
