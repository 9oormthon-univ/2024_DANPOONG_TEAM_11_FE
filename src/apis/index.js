// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   // withCredentials: true,
// });

// export default axiosInstance;

import axios from 'axios';
import useAuthStore from '../stores/authStore.js'; // zustand 스토어 import

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'https://nongdam.store',
});

// 요청 인터셉터: Authorization 헤더와 Content-Type 동적 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = useAuthStore.getState(); // zustand에서 accessToken 가져오기

    // Authorization 헤더 추가
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Content-Type 조건부 설정
    if (config.data instanceof FormData) {
      delete config.headers['Content-Type']; // FormData는 Content-Type을 자동 생성
    } else {
      config.headers['Content-Type'] = 'application/json'; // JSON 데이터
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 토큰 만료 시 갱신
axiosInstance.interceptors.response.use(
  (response) => response, // 성공적인 응답은 그대로 반환
  async (error) => {
    const originalRequest = error.config;
    const { refreshToken, setTokens, clearAuth } = useAuthStore.getState(); // zustand 상태 사용

    // 401 Unauthorized 에러 처리
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한 루프 방지 플래그

      try {
        // 리프레시 토큰이 없으면 로그아웃 처리
        if (!refreshToken) {
          console.error('리프레시 토큰이 없습니다.');
          clearAuth();
          window.location.href = '/login';
          return Promise.reject(error);
        }

        // 새 토큰 요청
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;

        // 새 토큰 저장
        setTokens(newAccessToken, newRefreshToken);

        // 실패했던 요청에 새 토큰 추가
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
        clearAuth(); // 상태 초기화
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
