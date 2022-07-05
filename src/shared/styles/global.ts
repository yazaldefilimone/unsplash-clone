import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html{
    --body-color: hsla(0, 0%, 100%, 1);
    --title-color:  hsla(0, 0%, 20%, 1);
    --text-color: hsla(0, 0%, 31%, 1);
    --green-color: hsla(144, 49%, 47%, 1);
    --red-color:hsla(0, 79%, 63%, 1);
    --gray-color: hsla(0, 0%, 74%, 1);
    --body-font:"Noto Sans", sans-serif;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.938rem;
    --smaller-font-size: 0.813rem;

    --font-medium: 500;
    --font-semi-bold: 600;
  }

  body{
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
    background-color: var(--body-color);
    margin: 0px;
    padding: 0px;
  }
  * {
    margin: 0px;
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
    padding: 0px;
    box-sizing: border-box;
    border: none;
    background: none;
    outline: none;
  }

  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
