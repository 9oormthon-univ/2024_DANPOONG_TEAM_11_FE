import index from './index.js';

export const refreshToken = async (refreshToken) => {
  return index.post('/auth/refresh', { refreshToken });
};

export const getUserInfo = async () => {
  return index.get('/auth/me');
};
