import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    max-width: 100vw;
    box-sizing: border-box;
}
    
    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--text-sand);
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 0 0 0 0;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-sand);
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 0 0 0 0;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-sand);
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 0 0 0 0;
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-sand);
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 0 0 0 0;
    }

    h5 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-sand);
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 0 0 0 0;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-sand);
      text-align: center;
      margin: 0 0 1rem 0;
      padding: 0 0 0 0;
    }

body {
    max-width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 0rem;
    background-color: var(--background-dark);
    color: var(--text-sand-light);

    @media only screen and (max-width: 600px) {
    height: auto;
    }

  @media only screen and (min-width: 601px) and (max-width: 992px) {
    }
}

:root {
  --background-dark: #0D0D0D;
  --background-brown: #282418;
  --background-brown-light: #473F2A;
  --background-gold: #A68863;
  --background-light: #D9A05B;

  --text-dark: #0D0D0D;
  --text-med: #3F4656;
  --text-light: #CDD9ED;
  --text-sand-dark: #806A42;
  --text-sand: #DCB773;
  --text-sand-light: #EDD9A9;

  --blue: #275EFE;
  --blue-light: #7699FF;
  --dark: #0D0D0D;
  --grey-dark: #3F4656;
  --grey: #6C7486;
  --grey-light: #CDD9ED;
  --white: #FFF;
  --green: #16BF78;
  --sand: #DCB773;
  --sand-light: #EDD9A9;
}

`;

export default GlobalStyle;
