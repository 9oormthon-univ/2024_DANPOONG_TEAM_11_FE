//주스탠드 -> 인증 토큰 관리 

import { create } from 'zustand';

const useAuthStore = create((set) => ({
  accessToken: null,
  refreshToken: null,
  user: null, // 사용자 정보 저장

  // 토큰 저장 함수
  setTokens: (accessToken, refreshToken) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    set({ accessToken, refreshToken });
  },

  // 사용자 정보 저장 함수
  setUser: (user) => set({ user }),

  // 로그아웃 함수
  clearAuth: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ accessToken: null, refreshToken: null, user: null });
  },
}));

export default useAuthStore;
