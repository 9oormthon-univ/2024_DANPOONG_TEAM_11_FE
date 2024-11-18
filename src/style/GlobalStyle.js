import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    a {
        text-decoration: none;
        color: inherit;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    button {
        cursor: pointer;
    }
    
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #242424; 
        color: #213547;
        overflow-x: hidden; 
    }
    
    #root {
        max-width: 480px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        background-color: #ffffff;
    }

    /* 스크롤바 숨기기 */
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;
