import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  .content {
    padding-top: constant(safe-area-inset-top); /* Safari */
    padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
    padding-bottom: constant(safe-area-inset-bottom); /* Safari */
    padding-bottom: env(safe-area-inset-bottom); /* iOS 11.2+ */
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
  }
`

export default GlobalStyle
