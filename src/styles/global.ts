import { createGlobalStyle } from 'styled-components';

const fontSize = {
  desktop: '93.75%',
  tablet: '85.5%',
};

/* 
  1REM = page's font-size
  1REM = 16px or 1REM = 14px
*/

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;

    --shape: #ffffff;
   
    --red: #e52e4d;
   
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-body: #969cb3;
    --text-title: #363f5f;
  }

  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    }

  html {
    @media (max-width: 1080px) {
      font-size: ${fontSize.desktop};
    }

    @media (max-width: 720px) {
      font-size: ${fontSize.tablet};
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600; 
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
