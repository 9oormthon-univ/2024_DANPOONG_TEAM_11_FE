// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function KakaoCallbackPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // URL에서 인증 코드 추출
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');
//     console.log("받은 인증 코드:", code); 
//     if (!code) {
//       console.error('인증 코드가 없습니다.');
//       navigate('/login');
//       return;
//     }

//     // GET 요청으로 ID 토큰 가져오기
//     axios
//       .get(`https://nongdam.store/api/oauth2/callback/kakao?code=${code}`, {
//         headers: {
//           Accept: '*/*', 
//         },
//       })
//       .then(({ data }) => {
//         const idToken = data.idToken;
//         console.log("받은 ID 토큰:", idToken);

//         if (!idToken) {
//           console.error("ID 토큰이 없습니다.");
//           navigate('/login');
//           return;
//         }
//         console.log("받은 인증 코드2:", code); 


//         // 인증 코드&idToken 전달하여 토큰 요청
//         axios
//           .post('https://nongdam.store/api/kakao/token', {
//             authCode: idToken
//           })
//           .then(({ data }) => {
//             const accessToken = data?.data?.accessToken; 
//             const refreshToken = data?.data?.refreshToken;
//             if (accessToken && refreshToken) {
//               // 토큰 저장
//               localStorage.setItem('provider', 'kakao');
//               localStorage.setItem('accessToken', accessToken);
//               localStorage.setItem('refreshToken', refreshToken);
//               console.log('토큰 저장 완료:', { accessToken, refreshToken });
//               navigate('/home'); // 홈으로 이동
//             } else {
//               console.error('토큰 응답에 문제가 있습니다.');
//             }
//           })
//           .catch((error) => {
//             console.error('토큰 요청 실패:', error.response?.data || error.message);
//             navigate('/login'); // 실패 시 로그인 페이지로 이동
//           });
//       })
//       .catch((error) => {
//         console.error('ID 토큰 요청 실패:', error.response?.data || error.message);
//         navigate('/login'); // 실패 시 로그인 페이지로 이동
//       });
//   }, [navigate]);


//   return <h1>로그인 처리 중...</h1>;
//   }


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Loading from '../../assets/image/login/Loading.svg'; // 로딩 이미지 경로 유지

export default function KakaoCallbackPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    // URL에서 인증 코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log("받은 인증 코드:", code);
    if (!code) {
      console.error('인증 코드가 없습니다.');
      setIsLoading(false); // 로딩 상태 해제
      navigate('/login');
      return;
    }

    // GET 요청으로 ID 토큰 가져오기
    axios
      .get(`https://nongdam.store/api/oauth2/callback/kakao?code=${code}`, {
        headers: {
          Accept: '*/*',
        },
      })
      .then(({ data }) => {
        const idToken = data.idToken;
        console.log("받은 ID 토큰:", idToken);

        if (!idToken) {
          console.error("ID 토큰이 없습니다.");
          setIsLoading(false); // 로딩 상태 해제
          navigate('/login');
          return;
        }

        // 인증 코드 & ID 토큰 전달하여 토큰 요청
        axios
          .post('https://nongdam.store/api/kakao/token', {
            authCode: idToken,
          })
          .then(({ data }) => {
            const accessToken = data?.data?.accessToken;
            const refreshToken = data?.data?.refreshToken;

            if (accessToken && refreshToken) {
              // 토큰 저장
              localStorage.setItem('provider', 'kakao');
              localStorage.setItem('accessToken', accessToken);
              localStorage.setItem('refreshToken', refreshToken);
              console.log('토큰 저장 완료:', { accessToken, refreshToken });
              setIsLoading(false); // 로딩 상태 해제
              navigate('/home'); // 홈으로 이동
            } else {
              console.error('토큰 응답에 문제가 있습니다.');
              setIsLoading(false); // 로딩 상태 해제
              navigate('/login');
            }
          })
          .catch((error) => {
            console.error('토큰 요청 실패:', error.response?.data || error.message);
            setIsLoading(false); // 로딩 상태 해제
            navigate('/login');
          });
      })
      .catch((error) => {
        console.error('ID 토큰 요청 실패:', error.response?.data || error.message);
        setIsLoading(false); // 로딩 상태 해제
        navigate('/login');
      });
  }, [navigate]);

  // 로딩 중이면 LoadingPage 렌더링
  if (isLoading) {
    return (
      <LoadingContainer>
        <img src={Loading} alt="Loading Logo" />
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
      </LoadingContainer>
    );
  }

  return <h1>로그인 처리 완료!</h1>; // 로딩 완료 후 다른 UI 표시
}

// Styled-components
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  padding-bottom: 5.2rem;
`;

const DotContainer = styled.div`
  display: flex;
  gap: 1rem; 
  margin-top: 2.4rem;
`;

const dotAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.3); 
  }
`;

const Dot = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  animation: ${dotAnimation} 1.3s infinite ease-in-out;
  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.6s; }
  &:nth-child(5) { animation-delay: 0.8s; }
`;
