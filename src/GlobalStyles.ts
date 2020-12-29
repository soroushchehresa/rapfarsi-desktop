import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: rgb(24,24,24);
    background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(25,25,25,1) 65%, rgba(43,43,43,1) 84%, rgba(63,63,63,1) 100%);background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-y: hidden;
  }
  
  *,
  *::after,
  *::before {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    cursor: default !important;
    -webkit-app-region: drag;
  }
`;
