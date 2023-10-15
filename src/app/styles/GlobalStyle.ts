import { css } from 'styled-components'
import { createGlobalStyle } from 'styled-components/macro'

const burgerTransitionstyle = css`
  .icon-transition-enter {
    transform: rotate(0deg);
    transition: transform 0.3s;
  }

  .icon-transition-enter-active {
    transform: rotate(45deg);
    transition: transform 0.3s;
  }

  .icon-transition-exit {
    transform: rotate(45deg);
    transition: transform 0.3s;
  }

  .icon-transition-exit-active {
    transform: rotate(0deg);
    transition: transform 0.3s;
  }

  .icon-transition-enter,
  .icon-transition-exit {
    display: block;
  }

  .icon-transition-exit-done {
    display: none;
  }

  .modal-transition-enter {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .modal-transition-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .modal-transition-exit {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .modal-transition-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .modal-transition-enter,
  .modal-transition-exit {
    display: block;
  }

  .modal-transition-exit-done {
    display: none;
  }
`

const GlobalStyle = createGlobalStyle`
  ${burgerTransitionstyle}
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }
`

export default GlobalStyle
