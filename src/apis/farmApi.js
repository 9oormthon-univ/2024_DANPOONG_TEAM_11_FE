import axiosInstance from './index.js';

// 농산물 생산자 등록 API 
export const registerFarm = async (form, accessToken) => {
  try {
    console.log('registrationNumber 타입:', typeof form.registrationNumber);
    console.log('registrationNumber 값:', form.registrationNumber);

    const response = await axiosInstance.post(
      '/api/farms',
      {
        farmName: form.shopName,
        farmRepresentative: form.representativeName,
        phoneNumber: form.contactNumber,
        businessRegistrationNumber: Number(form.registrationNumber), // 숫자
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
    console.error('농산물 생산자 등록 실패:', error.response?.data || error.message);
    throw error;
  }
};
