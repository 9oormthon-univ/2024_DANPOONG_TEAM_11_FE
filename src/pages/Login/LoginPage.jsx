// import styled from 'styled-components';
// import loginLogo from '../../assets/image/login/loginLogo.svg';
// import kakaoButton from '../../assets/image/login/kakaoButton.svg';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function LoginPage() {
//   const navigate = useNavigate();

//   // 카카오 로그인 요청을 보낼 함수
//   const handleKakaoLogin = () => {
//     const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
//     const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

//     window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
//   };

//   // const link = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

//   // const loginHandler = () => {
//   //   window.location.href = link;
//   // };



//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code'); // 리다이렉트된 URL에서 `code` 추출

//     if (code) {
//       // `POST /api/kakao/token`으로 토큰 요청
//       axios
//       .post('/api/kakao/token', { authCode: code }) // authCode로 전달
//       .then((response) => {
//         const { accessToken, refreshToken } = response.data;
    
//         localStorage.setItem('accessToken', accessToken);
//         localStorage.setItem('refreshToken', refreshToken);
//         localStorage.setItem('idToken', idToken);

//         navigate('/home');
//       })
//       .catch((error) => {
//         console.error('로그인 실패:', error);
//       });
    
//     }
//   }, [navigate]);

//   return (
//     <LoginContainer>
//       <img src={loginLogo} alt="Login Logo" />
//       <KakaoButton src={kakaoButton} alt="kakao Button" onClick={handleKakaoLogin} />
//     </LoginContainer>
//   );
// }

// const LoginContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   max-width: 480px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem 0;
// `;

// const KakaoButton = styled.img`
//   padding-top: 5rem;
//   cursor: pointer;
// `;



import React from 'react';
import styled from 'styled-components';
import loginLogo from '../../assets/image/login/loginLogo.svg';
import kakaoButton from '../../assets/image/login/kakaoButton.svg';

export default function LoginPage() {
  // 카카오 로그인 요청을 보낼 함수
  // const handleKakaoLogin = () => {
  //   const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY; // 환경 변수에서 REST API 키 가져오기
  //   const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI; // 환경 변수에서 Redirect URI 가져오기

  //   console.log('REST_API_KEY:', REST_API_KEY);
  //   console.log('REDIRECT_URI:', REDIRECT_URI);

  //   // 카카오 인증 URL로 이동 (scope에 openid 추가)
  //   // window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid`;
  //   window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // };

  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY; // 환경 변수에서 REST API 키 가져오기
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI; // 환경 변수에서 Redirect URI 가져오기
    
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
    window.location.href = kakaoAuthUrl;
  };

  // window.location.href =  `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=$%7B%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%7D&redirect_uri=$%7B%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%7D%27`;
  // };
  // const handleKakaoLogin = () => {
  //   const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY; // 환경 변수에서 REST API 키 가져오기
  //   const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI; // 환경 변수에서 Redirect URI 가져오기
  
  //   // 카카오 인증 URL로 이동 (scope에 openid 추가)
  //   window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid`;
  // };

  
  
  return (
    <LoginContainer>
      <img src={loginLogo} alt="Login Logo" />
      <KakaoButton src={kakaoButton} alt="kakao Button" onClick={handleKakaoLogin} />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const KakaoButton = styled.img`
  padding-top: 5rem;
  cursor: pointer;
`;
