import { createGlobalStyle } from "styled-components"
import "../assets/css/typography.css"
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    background-color: ${props => props.backgroundColor ? `#${props.backgroundColor}` : '#f6f7f8'};
    color: ${props => props.color ? `#${props.color}` : '#000'};
    transition: background-color 4s, color 4s;
    font-size: 18px;

    @media screen and (min-width: 600px) {
      font-size: 24px;
    }
  }

  body {
    font-family: Times, serif;
    padding-top: 60px;
    >header>nav {
      a,
      a:hover,
      a:focus,
      a:active {
        color: ${props => props.link ? `#${props.linkColor}` : '#c08497'};
      }
    }
  }

  a,
  a:hover,
  a:active,
  a:focus {
    font-family: "terminal_grotesque";
    font-size: 1.4em;
    text-decoration: none;
    transition: color 4s;
    color: ${props => props.linkColor ? `#${props.linkColor}` : '#c08497'};
  }

  h1, h2, h3, h4 {
    font-weight: bold;
  }

  h1 {
    font-size: 2.5rem;
    margin: 4rem 0 4rem 0;
  }

  h2 {
    font-size: 1.8rem;
    margin: 3rem 0 3rem 0;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.24em;
    margin: 1.1rem 0;
    text-indent: 1.1em;
  }
`
export default GlobalStyles
