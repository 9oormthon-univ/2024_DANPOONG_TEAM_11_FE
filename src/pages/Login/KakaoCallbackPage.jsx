// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function KakaoCallbackPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code'); // URL에서 인증 코드 추출

//     if (code) {
//       // POST 요청으로 인증 코드 전달
//       axios
//         .post('https://nongdam.store/api/kakao/token', {
//           authCode: code, // 요청 본문에 인증 코드 포함
//         })
//         .then((response) => {
//           const { accessToken, refreshToken } = response.data;

//           // 토큰 저장
//           localStorage.setItem('accessToken', accessToken);
//           localStorage.setItem('refreshToken', refreshToken);

//           console.log('토큰 발급 성공:', response.data);

//           // 로그인 완료 후 홈으로 리디렉션
//           navigate('/home');
//         })
//         .catch((error) => {
//           console.error('토큰 발급 실패:', error.response?.data || error.message);
//         });
//     }
//   }, [navigate]);

//   return <h1>로그인 처리 중...</h1>;
// }

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function KakaoCallbackPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code'); // URL에서 인증 코드 추출

//     if (code) {
//       console.log('인증 코드:', code); // 디버깅 로그

//       // 인증 코드를 서버로 전달하여 토큰 요청
//       axios
//         .post(
//           'https://nongdam.store/api/kakao/token',
//           { authCode: code }, // 요청 본문에 인증 코드 포함
//           { headers: { 'Content-Type': 'application/json' } } // 헤더 명시
//         )
//         .then((response) => {
//           console.log('서버 응답:', response.data); // 서버 응답 로그
//           const { accessToken, refreshToken, idToken } = response.data;

//           // 토큰 저장
//           localStorage.setItem('accessToken', accessToken);
//           localStorage.setItem('refreshToken', refreshToken);
//           if (idToken) {
//             localStorage.setItem('idToken', idToken); // idToken 저장
//           }

//           // 로그인 완료 후 홈으로 이동
//           navigate('/home');
//         })
//         .catch((error) => {
//           console.error('토큰 발급 실패:', error.response?.data || error.message);
//         });
//     }
//   }, [navigate]);

//   return <h1>로그인 처리 중...</h1>;
// }

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function KakaoCallbackPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log('KakaoCallbackPage 시작'); // 디버깅 시작 로그

//     // URL에서 인증 코드를 추출
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code'); 

//     console.log('추출된 인증 코드:', code); // 인증 코드 확인 로그

//     if (code) {
//       // 인증 코드를 서버로 전달하여 토큰 요청
//       axios
//         .post(
//           'https://nongdam.store/api/kakao/token',
//           { authCode: code }, // 요청 본문에 인증 코드 포함
//           {
//             headers: {
//               'Content-Type': 'application/json', // 요청 헤더 설정
//             },
//           }
//         )
//         .then((response) => {
//           console.log('서버 응답 받음:', response.data); // 서버 응답 확인 로그
//           const { accessToken, refreshToken, idToken } = response.data;
//           localStorage.setItem("accessToken", response.data.accessToken);

//           // 서버 응답 디버깅
//           if (!accessToken) {
//             console.error('accessToken이 응답에 포함되지 않았습니다.');
//           }
//           if (!refreshToken) {
//             console.error('refreshToken이 응답에 포함되지 않았습니다.');
//           }
//           if (!idToken) {
//             console.warn('idToken이 응답에 포함되지 않았습니다. OpenID Connect를 확인하세요.');
//           }

//           // 발급된 토큰 저장
//           localStorage.setItem('accessToken', accessToken);
//           localStorage.setItem('refreshToken', refreshToken);
//           if (idToken) {
//             localStorage.setItem('idToken', idToken); // idToken 저장
//           }

//           console.log('토큰 저장 완료'); // 토큰 저장 완료 로그

//           // 로그인 완료 후 홈으로 이동
//           navigate('/home');
//           console.log('홈으로 이동'); // 홈 이동 로그
//         })
//         .catch((error) => {
//           // 에러 처리
//           console.error(
//             '토큰 발급 실패:',
//             error.response?.data || error.message
//           );

//           if (error.response) {
//             console.error('실패 응답 상태:', error.response.status);
//             console.error('실패 응답 데이터:', error.response.data);
//           } else {
//             console.error('요청 자체가 실패했습니다.');
//           }
//         });
//     } else {
//       console.warn('인증 코드가 URL에 포함되지 않았습니다.'); // 인증 코드 없을 때 경고 로그
//     }
//   }, [navigate]);

//   return <h1>로그인 처리 중...</h1>;
// }




import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function KakaoCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 인증 코드 추출
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!code) {
      console.error('인증 코드가 URL에 없습니다.');
      navigate('/login');
      return;
    }

    // 인증 코드를 서버에 전달하여 토큰 요청
    axios
      .post(
        'https://nongdam.store/api/kakao/token',
        { authCode: code },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then(({ data }) => {
        const { accessToken, refreshToken } = data;
        if (accessToken && refreshToken) {
          localStorage.setItem('provider', 'kakao');
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          console.log('토큰 저장 완료');
          navigate('/home');
        } else {
          console.error('토큰 응답에 문제가 있습니다.');
        }
      })
      .catch((error) => {
        console.error('토큰 요청 실패:', error.response?.data || error.message);
      });
  }, [navigate]);

  return <h1>로그인 처리 중...</h1>;
}
