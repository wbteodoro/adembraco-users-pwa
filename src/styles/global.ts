import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    font-weight: 400;
    src: local('Roboto'), url(/fonts/Roboto-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: Roboto;
    font-weight: 500;
    src: local('Roboto'), url(/fonts/Roboto-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: Roboto;
    font-weight: 700;
    src: local('Roboto'), url(/fonts/Roboto-Bold.ttf) format('truetype');
  }

  ${({ theme }) => css`
    * {
      box-sizing: border-box;
      margin: 0;
      outline: 0;
      padding: 0;
    }

    html,
    body {
      min-height: 100%;
      background-color: ${theme.colors.white};
    }

    body {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      font-family: ${theme.font.family};
    }

    body,
    input,
    select,
    button {
      font-size: ${theme.font.sizes.small};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    strong {
      font-weight: ${theme.font.bold};
    }

    button {
      border: 0;
    }

    button:not(:disabled) {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    li {
      list-style: none;
    }

    html {
      font-size: 62.5%;
    }

    #__next {
      height: 100%;
    }
  `}`
