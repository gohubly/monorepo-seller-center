import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;

    outline: none;
  }

  body {
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #__next, div.app, main {
    height: 100%;
  }
`