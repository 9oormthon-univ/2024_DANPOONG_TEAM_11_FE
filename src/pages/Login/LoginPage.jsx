import styled from 'styled-components';
import loginLogo from '../../assets/image/login/loginLogo.svg';
import kakaoButton from '../../assets/image/login/kakaoButton.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

export default function LoginPage() {
  // 카카오 로그인 요청을 보낼 함수
  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      axios
        .post('https://{YOUR_BACKEND_DOMAIN}/api/kakao/token', { code })
        .then((response) => {
          const { accessToken, refreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          console.log('로그인 성공:', response.data);

          // 로그인 후 홈 페이지로 이동
          navigate('/home'); // useNavigate로 페이지 이동
        })
        .catch((error) => {
          console.error('로그인 오류:', error);
        });
    }
  }, [navigate]); // navigate를 의존성으로 추가
  
  return (
    <LoginContainer>
      <img src={loginLogo} alt="Login Logo" />
      <KakaoButton src={kakaoButton} alt="kakao Button" onClick={handleKakaoLogin} />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh; /* 전체 뷰포트 높이를 차지하도록 변경 */
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem 0;
  padding-top: 3.8rem;
`;

const KakaoButton = styled.img`
  padding-top: 5rem;
  cursor: pointer;
`;